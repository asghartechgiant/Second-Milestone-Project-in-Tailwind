import Card2 from "@/components/Card2/Card2";

export default function WorkPage() {
  return (
    <div className="px-[150px] ">
      <h1 className="text-4xl font-bold mb-6">Work </h1>
      <div className="flex flex-col gap-10">
        <Card2
          image="/first.png"
          title="Designing Dashboards"
          year="2020"
          sidebar="Dashboard"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card2
          image="/second.png"
          title="Vibrant Portraits of 2020"
          year="2018"
          sidebar="Illustration"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card2
          image="/third.png"
          title="36 Days of Malayalam type"
          year="2022"
          sidebar="Typography"
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
}
