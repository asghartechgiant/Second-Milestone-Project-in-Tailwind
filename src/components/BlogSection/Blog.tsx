import Link from "next/link";
import Card from "../Card/Card";

export default function BlogSection() {
  return (
    <div className="bg-[#EDF7FA] px-[150px] py-8 ">
      <div className="flex justify-between my-4">
        <h2>Recent posts</h2>
        <Link href={"#"}>View all</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card />
        <Card />
      </div>
    </div>
  );
}
