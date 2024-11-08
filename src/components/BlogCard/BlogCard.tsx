function BlogCard() {
  return (
    <div className="px-20 md:px-[150px] my-4 md:my-10 ">
      <div className="text-2xl font-bold">
        <h1>UI Interactions of the week</h1>
      </div>
      <div className="flex gap-5 py-3 ">
        <span>12 Feb 2019</span>
        <span className="border-r-4 "></span>
        <span>Express, Handlebars</span>
      </div>
      <div className="text-lg tracking-wider ">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <hr className="mt-10" />
      </div>
    </div>
  );
}
export default BlogCard;
