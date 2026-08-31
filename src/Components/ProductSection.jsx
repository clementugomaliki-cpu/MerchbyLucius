import ProductCard from "./ProductCard";
import { FaChevronRight } from "react-icons/fa";

export default function ProductSection({ title, subtitle, products }) {
  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#4A5568]">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <button className="text-sm text-[#2EC5BC] font-semibold shrink-0">
          See All ›
        </button>
      </div>

      <div className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {products.map((product) => (
          <div key={product.id} className="snap-start shrink-0">
            <ProductCard
              image={product.image}
              title={product.title}
              tag={product.tag}
              id={product.id}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
