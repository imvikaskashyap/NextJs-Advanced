import Link from "next/link";

const Blogs = () => {
  console.log("Blogs Page");
  return (
    <>
    
      <div>
        <h1>Welcome to Our Blog</h1>
        <ol className="blog-links">
          <li>
            <Link href="/bloggs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/bloggs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/bloggs/3">Blog 3</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Blogs;