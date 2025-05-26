import React from 'react'

const DynamicRoute = async ({params}) => {
  const {filepath} = await params;

  return (
    <div>
      <h1>This is Dynamic route page</h1>
      <h2>And you visit this route: {filepath.join("/")}</h2>
    </div>
  )
}

export default DynamicRoute;
