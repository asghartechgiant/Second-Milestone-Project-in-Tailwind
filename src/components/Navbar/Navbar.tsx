import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-5 py-6 mx-10 text-xl ">
      <div className="hover:bg-orange-500  hover:text-white">
        <Link href="/work">Work</Link>
      </div>

      <div className="hover:bg-orange-500 hover:text-white">
        <Link href="/blog"> Blog</Link>
      </div>
      <div className="hover:bg-orange-500  hover:text-white">Contact</div>
    </div>
  );
};
export default Navbar;
