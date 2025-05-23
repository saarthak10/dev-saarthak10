import React from 'react'
import footerIcon from '../../assets/footer_icon.svg'
const Footer = () => {
  return (
    <div class="mx-auto max-w-7xl">
        <div class="flex flex-row justify-center items-center py-6">
            <img src={footerIcon}/>
            <p class="pl-2 text-sm"> 2025 Saarthak Sharma | Crafted with purpose</p>

        </div>

    </div>
  )
}

export default Footer