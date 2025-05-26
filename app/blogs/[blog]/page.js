import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react'

 export async function generateMetadata({params}){
  console.log(params);
  const blogName = await params
    const {blog} = blogName

  return {
    title:`Blog ${blog}`
  }
}

const Blog = async ({params, searchParams}) => {
    const blogName = await params
    const {blog} = blogName

  return (
    <div>
      <h1>THis is blog page from <b>{blog}</b></h1>
      <Link href="/blogs/blog/comments">View Comment</Link>
    </div>
  )
}

export default Blog
