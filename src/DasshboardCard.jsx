import lion from "./assets/images/lion.png";
import spaceship from "./assets/space.svg";
import adventure from "./images/Bundle.svg";
import phonic from "./assets/phonics.svg";
import { useDownload } from "./Download";

function DasshboardCard() {
  const { download, handleDownload } = useDownload();

  const card = [
    {
      title: "Alphabet Adventure Pack",
      image: lion,
      badgeText: "WORKSHEET",
      text: "Download",
      reciept: "Reciept",
    },
    {
      title: "Space Explorers Math",
      image: spaceship,
      badgeText: "MATH",
      text: "Download",
      reciept: "Reciept",
    },
    {
      title: "Alphabet Adventure Pack",
      image: adventure,
      badgeText: "WORKSHEET",
      text: "Download",
      reciept: "Reciept",
    },
    {
      title: "Phonic Fun Volume 1",
      image: phonic,
      badgeText: "WORKSHEET",
      text: "Download",
      reciept: "Reciept",
    },
  ];

  return (
    <section className="w-full min-w-0 px-4 py-8 sm:px-8 md:px-12">
      <div>
        <h3 className="font-extrabold text-[24px] font-[Plus Jakarta Sans] text-[#4A5568]">
          Your Purchases
        </h3>
        <p className="font-medium text-[16px] text-[#6B7280]">
          Access all your learning materials in one place.
        </p>
      </div>

      <div className="grid w-full min-w-0 grid-cols-2 gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
        {card.map((c, index) => (
          <div
            key={`${c.title}-${index}`}
            className="flex min-w-0 flex-col justify-between overflow-hidden rounded-4xl shadow-sm"
          >
            <img
              src={c.image}
              alt=""
              className="h-auto w-full rounded-t-3xl"
            />

            <div className="flex flex-1 flex-col items-start p-5">
              <button className="mt-2 h-8 w-auto rounded-full bg-blue-50 px-2 py-2 text-xs font-extrabold text-[#002F71]">
                {c.badgeText}
              </button>

              <h3 className="my-4 min-h-14 w-full break-words font-[Plus Jakarta Sans] text-lg font-semibold text-[#002F71]">
                {c.title}
              </h3>

              <button
                onClick={() => handleDownload(download.id)}
                className="h-10 w-full rounded-4xl bg-[#2EC5BC] py-2 text-center text-[16px] text-white"
              >
                {c.text}
              </button>

              <button className="mt-4 h-10 w-full rounded-4xl outline outline-[#2EC5BC] text-[16px] font-semibold text-[#2EC5BC]">
                {c.reciept}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DasshboardCard;