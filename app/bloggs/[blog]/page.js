import React from 'react'

const page = async ({params}) => {
    const {blog} = await params;

    console.log("blog Page",blog)

  return (
    <div>
      <h1>This is blog page: {blog}</h1>
    </div>
  )
}

export default page
