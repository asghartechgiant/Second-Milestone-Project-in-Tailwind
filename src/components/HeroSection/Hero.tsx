import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" grid grid-cols-12 pt-[50px] gap-y-20 sm:gap-y-0 sm:pt-[100px] px-[150px]">
      <div className="col-span-12 lg:col-span-8 ">
        <h1 className="text-[24px] sm:text-[44px] font-bold">
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <div className="leading-6 my-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enims velit mollit. Exercitation
          veniam <br /> consequat sunt nostrud amet.
        </div>
        <button className="bg-[#FF6464] rounded-[4px] py-2 px-8 text-white">
          Download Resume
        </button>
      </div>

      <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
        {" "}
        <Image src="/hero.png" alt="hero" width={250} height={250}></Image>
      </div>
    </div>
  );
}
