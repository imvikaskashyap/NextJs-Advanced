import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Blogs",
};

const Blogs = () => {
  return (
    <div>
      <h1>This is Blogs Main page</h1>

      <p><Link href="/blogs/blog1">Blog 1</Link></p>
      <p><Link href="/blogs/blog2">Blog 2</Link></p>
      <p><Link href="/blogs/blog3">Blog 3</Link></p>
    </div>
  )
}

export default Blogs
