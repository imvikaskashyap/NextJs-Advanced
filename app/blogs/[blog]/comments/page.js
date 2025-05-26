import Link from 'next/link'
import React from 'react'

const Comments = async ({params, searchParams}) => {
  return (
    <div>
      <h1>THis is Comments page</h1>
      <Link href="/blogs/blog/comments/1">Go to Comment</Link>
    </div>
  )
}

export default Comments
