import Image from "next/image";

export default function Card2({ image, title, year, sidebar, paragraph }: any) {
  return (
    <div className="grid grid-cols-10 border-b-2 pb-5 justify-items-center  hover:scale-110 transition-all duration-300">
      <Image
        className="grid col-span-10 md:col-span-4 lg:col-span-2"
        src={image}
        alt="Card"
        width={250}
        height={180}
      ></Image>

      <div className="col-span-10 md:col-span-6 lg:col-span-8 ">
        <h2 className="text-3xl mt-8 sm:mt-0 font-bold ml-3">{title}</h2>
        <div>
          <div className="flex gap-4 mt-5 ml-3">
            <button className="bg-black rounded-3xl text-white px-4">
              {year}
            </button>
            <h2 className="py-1">{sidebar}</h2>
          </div>
          <div className="ml-3 text-lg my-4 ">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
