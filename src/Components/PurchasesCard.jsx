export default function PurchasesCard({ image, productTitle, purchased}) {
return (
    <div className="flex flex-col">
        <div>
            <img src={image} alt="Product photo" className="rounded-t-3xl" />
        </div>
        <div className="p-5 bg-white rounded-b-3xl">
            <h4 className="text-sm text-[#4A5568]">{productTitle}</h4>
            <p className="text-sm text-[#4A5568] py-3">Purchased: {purchased}</p>
            <div className="flex flex-col gap-3">
                <button className="text-base font-semibold text-white bg-[#2EC5BC] w-full rounded-full px-6 py-2">Download</button>
                <button className="text-base font-semibold text-[#2EC5BC] bg-white border border-[#2EC5BC] w-full rounded-full px-6 py-2">Receipt</button>
            </div>
        </div>
    </div>
)
}