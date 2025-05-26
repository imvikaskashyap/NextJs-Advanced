import React from 'react'

const Comments = async ({params, searchParams}) => {

    const paramss = await params;
    const {blog, comment} = params;
    
  return (
    <div>
      <h1>THis is Comment page ({comment}) from page : {blog} (page) </h1>
    </div>
  )
}

export default Comments
