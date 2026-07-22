export default function CreatorBenefits({logo, title}) {
    return (
        <div className="rounded-3xl bg-white flex flex-col p-8 gap-4">
            <div>
                <div className="">{logo}</div>
            </div>
            <h3 className="font-bold text-lg text-[#002F71]">{title}</h3>
        </div>
    )
}