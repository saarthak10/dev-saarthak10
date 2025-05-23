import React from 'react'
import mailIcon from '../../assets/mail_icon.svg'
import copyIcon from '../../assets/copy_icon.svg'
import phoneIcon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div class="mx-auto max-w-7xl py-24 ">
          <div class="flex flex-col justify-center items-center">
            <div class=" bg-gray-200 rounded-lg">
              <p class="px-5 py-1">Get in touch</p>
            </div>
            <p class="pt-4">
              What’s next? Feel free to reach out to me 
            </p>
          </div>

          <div class="pt-12 flex justify-center items-end">
            <img src={mailIcon} />
            <p class="px-5 text-4xl "> saarthaksharma87@gmail.com</p>
            <img src={copyIcon} />
          </div>

          <div class="pt-4 flex justify-center items-end">
            <img src={phoneIcon} />
            <p class="px-5 text-4xl "> +91 8219278097</p>
            <img src={copyIcon} />
          </div>
         
        </div>
  )
}

export default Contact