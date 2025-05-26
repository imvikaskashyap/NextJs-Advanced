import React from 'react'
import Web from './web/page'
import Android from './android/page'

const ServiceLayout = ({children}) => {
  return (
    <div>
      <Web/>
      <Android/>
    </div>
  )
}

export default ServiceLayout
