import React from 'react'
import LabelBottomNavigation from '../LabelBottomNavigation'

const MobilMenu = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 w-full z-50 lg:hidden'>
      <LabelBottomNavigation />
    </nav>
  )
}

export default MobilMenu