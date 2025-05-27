import React from "react";
import mailIcon from "../../assets/mail_icon.svg";
import copyIcon from "../../assets/copy_icon.svg";
import phoneIcon from "../../assets/call_icon.svg";

const Contact = ({ref}) => {
  return (
    <div class="mx-auto max-w-7xl py-16 md:py-24" ref={ref} id="contact">
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Get in touch</p>
        </div>
        <p class="pt-4 dark:text-gray-dark-600">What’s next? Feel free to reach out to me</p>
      </div>

      <div class="pt-12 flex justify-center items-end">
        <img src={mailIcon} />
        <p class="px-5 text-[18px] md:text-4xl dark:text-white "> saarthaksharma87@gmail.com</p>
        <img
          src={copyIcon}
          class="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("saarthaksharma87@gmail.com");
          }}
        />
      </div>

      <div class="pt-4 flex justify-center items-end">
        <img src={phoneIcon} />
        <p class="px-5 text-[18px] md:text-4xl dark:text-white"> +91 8219278097</p>
        <img
          src={copyIcon}
          class="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(" +91 8219278097");
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
