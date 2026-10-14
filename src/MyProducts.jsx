import { useEffect, useState } from "react";
import { FaSearch, FaSlidersH, FaPlus } from "react-icons/fa";
import CreatorDashboardSidebar from "./Components/CreatorDashboardSidebar";
import PagesHeader from "./Components/PagesHeader";
import ProductSection from "./Components/ProductSection";
import creatorAvatar from "./images/creatorphoto.png";
import {
  MdDashboard,
  MdOutlineInventory2,
  MdOutlinePoll,
  MdOutlineBrightness5,
} from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import { productsRequest } from "./productsApi";

function readUser() {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}");
  } catch {
    return {};
  }
}

export default function MyProducts() {
  const account = readUser();
  const user = {
    name: account.name || account.fullName || "Lucius",
    avatar: creatorAvatar,
  };
  const creatorId = String(account._id || account.id || account.userId || "");
  const creatorNavLinks = [
    { to: "/creator-dashboard", label: "DASHBOARD", icon: <MdDashboard />, end: true },
    { to: "/creator-dashboard/products", label: "MY PRODUCTS", icon: <MdOutlineInventory2 /> },
    { to: "/creator-dashboard/sales", label: "SALES ANALYTICS", icon: <MdOutlinePoll /> },
    { to: "/creator-dashboard/payouts", label: "PAYOUTS", icon: <GiStarMedal /> },
    { to: "/creator-dashboard/settings", label: "SETTINGS", icon: <MdOutlineBrightness5 /> },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [productFormOpen, setProductFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "", price: "", image: null, stock: "" });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await productsRequest("/");
        const approvedProducts = Array.isArray(response) ? response : response.products || response.data || [];
        const creatorProducts = creatorId
          ? approvedProducts.filter((product) => String(product.creator?._id || product.creator?.id || product.creator) === creatorId)
          : [];
        if (isActive) {
          setProducts(creatorProducts.map((product) => ({
            ...product,
            id: product._id || product.id,
            title: product.name,
            tag: product.tag || "NEW",
          })));
        }
      } catch (error) {
        if (isActive) setErrorMessage(error.message || "Unable to load approved products.");
      } finally {
        if (isActive) setIsLoading(false);
      }
    }

    loadProducts();
    return () => { isActive = false; };
  }, [creatorId]);

  const visibleProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function updateFormDetails(event) {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  }

  async function submitProduct(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("description", formData.description.trim());
      payload.append("price", formData.price);
      payload.append("stock", formData.stock);
      payload.append("image", formData.image);
      const response = await productsRequest("/add-product", { method: "POST", body: payload });
      setSuccessMessage(response.message || "Your product has been submitted for moderator review.");
      setFormData({ name: "", description: "", price: "", image: null, stock: "" });
      setProductFormOpen(false);
    } catch (error) {
      setErrorMessage(error.message || "Unable to submit this product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex mt-24 sm:mt-16 overflow-x-hidden">
      <PagesHeader user={user} navLinks={creatorNavLinks} />
      <CreatorDashboardSidebar user={user} />
      <main className="flex-1 w-full ml-0 md:ml-80 p-4 sm:p-6 bg-[#F2F4F5] min-h-screen">
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 min-h-[106px]">
          <div className="flex flex-col gap-1 w-full sm:w-[297px]">
            <p className="text-xl sm:text-2xl font-extrabold text-[#4A5568]">{`Hello, ${user.name}! 👋`}</p>
            <span className="text-[#6B7280] text-sm">Ready for today's products adventure?</span>
          </div>
          <button
            className="w-full sm:w-[312px] h-12 rounded-full bg-[#2EC5BC] text-white flex items-center justify-center gap-2 font-bold text-xs tracking-wider uppercase"
            onClick={() => { setErrorMessage(""); setProductFormOpen(true); }}
          >
            <FaPlus /> Create New Product
          </button>
        </header>

        {successMessage && <p role="status" className="mt-4 rounded-lg bg-teal-50 p-4 text-sm font-medium text-teal-800">{successMessage}</p>}
        {errorMessage && !productFormOpen && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-700">{errorMessage}</p>}

        <div className="w-full max-w-[1021px] flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between border border-[#E2E7FF] rounded-xl bg-white p-4 mt-8">
          <div className="relative w-full sm:w-[384px]">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full h-[46px] rounded-lg border border-[#BBCAC6] bg-[#FAF8FF] pl-10 pr-4 text-sm text-[#131B2E] outline-none"
            />
          </div>
          <span className="flex items-center gap-2 h-[42px] px-4 text-sm text-[#131B2E]"><FaSlidersH /> Approved only</span>
        </div>

        <section className="mt-8 overflow-x-auto">
          {isLoading ? (
            <p className="mt-6 rounded-xl bg-white p-6 text-sm text-gray-500">Loading approved products…</p>
          ) : visibleProducts.length > 0 ? (
            <ProductSection title="Your Products" subtitle="Approved products are published here after moderator review." products={visibleProducts} />
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-500">
              {errorMessage
                ? errorMessage
                : !creatorId
                  ? "Your account ID was not found. Sign in again to load your approved products."
                  : searchTerm
                ? "No approved products match your search."
                : "No approved products yet. Products will appear here after moderator review."}
            </div>
          )}
        </section>
      </main>

      {productFormOpen && (
        <div className="fixed inset-0 bg-[#1A4379]/50 flex items-center justify-center z-[60] p-4" onClick={() => setProductFormOpen(false)}>
          <form className="bg-white flex flex-col max-h-[90vh] w-full max-w-2xl overflow-y-auto px-6 sm:px-8 py-6 gap-4 rounded-2xl" onClick={(event) => event.stopPropagation()} onSubmit={submitProduct}>
            <div>
              <h2 className="text-xl font-bold text-[#1A4379]">Submit a product</h2>
              <p className="text-sm text-gray-500 mt-1">A moderator must approve your product before it appears in Your Products.</p>
            </div>
            {errorMessage && <p role="alert" className="text-sm text-red-700">{errorMessage}</p>}
            <label className="text-sm font-semibold">Product title
              <input type="text" name="name" value={formData.name} onChange={updateFormDetails} required className="mt-1 block w-full rounded-lg border border-[#BBCAC6] p-3 outline-[#2EC5BC]" />
            </label>
            <label className="text-sm font-semibold">Product description
              <textarea name="description" value={formData.description} onChange={updateFormDetails} required rows={3} className="mt-1 block w-full resize-y rounded-lg border border-[#BBCAC6] p-3 outline-[#2EC5BC]" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">Price
                <input type="number" name="price" min="0" step="0.01" value={formData.price} onChange={updateFormDetails} required className="mt-1 block w-full rounded-lg border border-[#BBCAC6] p-3 outline-[#2EC5BC]" />
              </label>
              <label className="text-sm font-semibold">Stock
                <input type="number" name="stock" min="0" step="1" value={formData.stock} onChange={updateFormDetails} required className="mt-1 block w-full rounded-lg border border-[#BBCAC6] p-3 outline-[#2EC5BC]" />
              </label>
            </div>
            <label className="text-sm font-semibold">Product image
              <input type="file" name="image" accept="image/*" required onChange={(event) => setFormData((previous) => ({ ...previous, image: event.target.files?.[0] || null }))} className="mt-1 block w-full rounded-lg border border-[#BBCAC6] p-3" />
            </label>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setProductFormOpen(false)} className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-600">Cancel</button>
              <button type="submit" disabled={isSubmitting} className="rounded-full bg-[#2EC5BC] px-6 py-3 font-bold text-white hover:bg-[#20A89F] disabled:opacity-60">{isSubmitting ? "Submitting..." : "Submit for review"}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
