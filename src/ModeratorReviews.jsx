import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import PagesHeader from "./Components/PagesHeader";
import { productsRequest } from "./productsApi";

function getProductId(product) {
  return product._id || product.id;
}

export default function ModeratorReviews() {
  const role = (localStorage.getItem("userRole") || "").toLowerCase();
  const [products, setProducts] = useState([]);
  const [reviewReasons, setReviewReasons] = useState({});
  const [loading, setLoading] = useState(true);
  const [reviewingId, setReviewingId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const user = { name: "Moderator" };
  const navLinks = [
    { to: "/moderator/reviews", label: "PRODUCT REVIEWS", icon: <MdOutlineInventory2 />, end: true },
  ];

  useEffect(() => {
    let isActive = true;
    productsRequest("/pending")
      .then((response) => {
        if (isActive) setProducts(Array.isArray(response) ? response : response.products || response.data || []);
      })
      .catch((error) => {
        if (isActive) setErrorMessage(error.message || "Unable to load pending products.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => { isActive = false; };
  }, []);

  function refreshPendingProducts() {
    setLoading(true);
    setErrorMessage("");
    productsRequest("/pending")
      .then((response) => setProducts(Array.isArray(response) ? response : response.products || response.data || []))
      .catch((error) => setErrorMessage(error.message || "Unable to load pending products."))
      .finally(() => setLoading(false));
  }

  async function reviewProduct(product, decision) {
    const productId = getProductId(product);
    setReviewingId(productId);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const isApproved = decision === "approve";
      const response = await productsRequest(`/${productId}/${decision}`, {
        method: "PATCH",
        ...(isApproved ? {} : { body: JSON.stringify({ reason: reviewReasons[productId] || "" }) }),
      });
      setProducts((previous) => previous.filter((item) => getProductId(item) !== productId));
      setSuccessMessage(response.message || `Product ${isApproved ? "approved" : "rejected"}.`);
    } catch (error) {
      setErrorMessage(error.message || `Unable to ${decision} this product.`);
    } finally {
      setReviewingId(null);
    }
  }

  if (!role.includes("moderator")) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F2F4F5] pt-24 sm:pt-16">
      <PagesHeader user={user} navLinks={navLinks} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#2AAB9F]">Moderator workspace</p>
            <h1 className="mt-1 text-2xl font-extrabold text-[#1A4379] sm:text-3xl">Product review queue</h1>
            <p className="mt-2 text-sm text-gray-600">Review creator submissions. Approved products appear in the creator's My Products page.</p>
          </div>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4379] shadow-sm">
            {products.length} awaiting review
          </span>
        </header>

        {successMessage && <p role="status" className="mt-6 rounded-xl bg-teal-50 p-4 text-sm font-medium text-teal-800">{successMessage}</p>}
        {errorMessage && <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">{errorMessage}</p>}

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-[#1A4379]">Pending submissions</h2>
            <button type="button" onClick={refreshPendingProducts} disabled={loading} className="rounded-full border border-[#2EC5BC] px-4 py-2 text-sm font-semibold text-[#168D85] disabled:opacity-50">Refresh</button>
          </div>

          {loading ? (
            <div className="rounded-2xl bg-white px-6 py-12 text-center text-sm text-gray-500">Loading pending submissions…</div>
          ) : products.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
              <h3 className="font-bold text-[#1A4379]">All caught up</h3>
              <p className="mt-2 text-sm text-gray-500">New creator submissions will appear here for review.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {products.map((product) => {
                const productId = getProductId(product);
                const creator = typeof product.creator === "object" ? product.creator : {};
                const submittedAt = product.createdAt || product.submittedAt;
                return (
                  <article key={productId} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                    <div className="grid md:grid-cols-[220px_1fr]">
                      <img src={product.image} alt={product.name} className="h-56 w-full bg-gray-100 object-cover md:h-full" />
                      <div className="p-5 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Pending review</span>
                            <h3 className="mt-3 text-xl font-bold text-[#1A4379]">{product.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">Submitted by {creator.name || "Creator"}{creator.email ? ` · ${creator.email}` : ""}</p>
                          </div>
                          <p className="font-bold text-[#1A4379]">₦{Number(product.price).toLocaleString()}</p>
                        </div>
                        <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-gray-700">{product.description}</p>
                        <p className="mt-3 text-sm text-gray-500">Stock: {product.stock}{submittedAt ? ` · Submitted ${new Date(submittedAt).toLocaleString()}` : ""}</p>
                        <div className="mt-5 border-t border-gray-100 pt-4">
                          <label className="block text-sm font-semibold text-gray-700">Rejection reason <span className="font-normal text-gray-400">(optional)</span>
                            <textarea value={reviewReasons[productId] || ""} onChange={(event) => setReviewReasons((previous) => ({ ...previous, [productId]: event.target.value }))} rows={2} placeholder="Explain what needs to change..." className="mt-1 block w-full rounded-lg border border-gray-300 p-3 text-sm outline-[#2EC5BC]" />
                          </label>
                          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                            <button type="button" disabled={reviewingId === productId} onClick={() => reviewProduct(product, "reject")} className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 px-5 py-2.5 font-semibold text-red-700 hover:bg-red-50 disabled:opacity-50"><FaTimes /> Reject</button>
                            <button type="button" disabled={reviewingId === productId} onClick={() => reviewProduct(product, "approve")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2EC5BC] px-5 py-2.5 font-semibold text-white hover:bg-[#20A89F] disabled:opacity-50"><FaCheck /> {reviewingId === productId ? "Saving..." : "Approve product"}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
