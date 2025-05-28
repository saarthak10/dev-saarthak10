import React, { useState } from "react";
import mailIcon from "../../assets/mail_icon.svg";
import copyIcon from "../../assets/copy_icon.svg";
import checkIcon from "../../assets/check_icon.svg";
import phoneIcon from "../../assets/call_icon.svg";
import { toast } from 'react-toastify'


const Contact = ({ref}) => {
  const phoneNumber = '+91 8219278097'
  const email ='saarthaksharma87@gmail.com'
  const [showPhoneRightIcon, setShowPhoneRightIcon] = useState(false)
  const [showEmailRightIcon, setShowEmailRightIcon] = useState(false)

  const copyToClipboard = (text, type) => {
      const showRightIcon = type === "email" ? setShowEmailRightIcon : setShowPhoneRightIcon;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
    .then(()=>{
      // toast.success("copied successfully!")
      showRightIcon(true)
      setTimeout(()=>{
        showRightIcon(false)
      },5000)
    })
    .catch(err => {
      console.error("Clipboard API failed", err);
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
};

const fallbackCopy = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";  // Avoid scrolling to bottom
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand("copy");
    toast.success("copied successfully!")
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textarea);
};

  return (
    <div class="mx-auto max-w-7xl py-16 md:py-24" ref={ref} id="contact">
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Get in touch</p>
        </div>
        <p class="pt-4 dark:text-gray-dark-600">What’s next? Feel free to reach out to me</p>
      </div>

      <div class="pt-12 flex justify-center items-end">
        <a href="mailto:saarthaksharma87@gmail.com" class="cursor-pointer">
          <img src={mailIcon} />
        </a>
        <p class="px-5 text-[18px] md:text-4xl dark:text-white "> saarthaksharma87@gmail.com</p>
         {showEmailRightIcon ?
        
          <img
            src={checkIcon}
            class="cursor-pointer"
          />
        
        :

          <img
            src={copyIcon}
            class="cursor-pointer  hover:stroke-gray-600"
            onClick={() => {
            copyToClipboard(email,'email')
            }}
          />          
        }

        
      </div>

      <div class="pt-4 flex justify-center items-end">
        <a href="tel:+918219278097" class="cursor-pointer">
          <img src={phoneIcon} />
          </a>
        <p class="px-5 text-[18px] md:text-4xl dark:text-white"> +91 8219278097</p>
        {showPhoneRightIcon ?
        
          <img
            src={checkIcon}
            class="cursor-pointer"
          />
        
        :

          <img
            src={copyIcon}
            class="cursor-pointer hover:stroke-gray-600"
            onClick={() => {
            copyToClipboard(phoneNumber,'phoneNumber')
            }}
          />          
        }
          

      </div>
    </div>
  );
};

export default Contact;
