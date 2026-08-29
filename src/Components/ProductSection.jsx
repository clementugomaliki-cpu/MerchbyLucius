import ProductCard from "./ProductCard";

export default function ProductSection({ title, subtitle, products }) {
  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center h-14 mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#4A5568]">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <button className="text-sm text-teal-500 font-semibold">
          See All →
        </button>
      </div>
      <div className="flex gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            tag={product.tag}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>
    </div>
  );
}
