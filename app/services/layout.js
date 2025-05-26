import React from 'react'

export const metadata = {
  title: "Services",
};

const ServiceLayout = ({children}) => {
  return (
    <div>
      <h1>This is Service Layout page</h1>
      {children}
    </div>
  )
}

export default ServiceLayout
