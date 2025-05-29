import React from "react";
import digidocImage from "../../assets/images/digidoc_project.svg";
import prescriberyImage from "../../assets/images/prescribery_logo.png";
import prescriberyDarkImage from "../../assets/images/prescribery_dark_logo.png";
import nexBuyImage from "../../assets/images/nexbuy_logo.png"
import buildDarkImage from "../../assets/images/buildezi_dark_logo.png";
import buildImage from "../../assets/images/buildezi_logo.png";


const Projects = ({ ref, theme }) => {
  const projects = [
    {
      id: 1,
      title: "Digidoc",
      description: `DigiDoc is an innovative digital documentation platform developed for the Central Government of India to modernize the creation and management of legal documents such as affidavits, gift deeds, and more. It streamlines the traditionally manual and paper-heavy processes by integrating essential features like e-signatures, digital signatures, and consent-based reviews, ensuring legal authenticity, operational efficiency, and transparency.

To enhance the delivery workflow, DigiDoc is integrated with BlueDart, enabling secure and swift shipment of finalized physical documents whenever required.

Complementing the web platform, a dedicated mobile application built with React Native allows individual users to easily access documents they’ve created, upload them directly to DigiLocker, and manage their legal paperwork through a secure and user-friendly interface. The app extends the platform’s accessibility, enabling users to stay connected with their documentation from anywhere, at any time.`,
      image: `${digidocImage}`,
      skills: ["React", "Material UI", "Javascript","React Native"],
    },
    {
      id: 2,
      title: "NexBuy Hub",
      description: `NexbuyHub is a full-featured e-commerce platform designed to deliver a seamless shopping and store management experience. It consists of two key components:

      A customer-facing mobile application built using React Native, offering a fast, user-friendly interface for browsing products, managing carts, and placing orders.

      An admin dashboard developed in React, allowing store owners to efficiently manage products, track orders, handle inventory, and analyze performance.

      The platform is powered by Firebase, which handles authentication, real-time data sync, cloud storage, and secure backend services. For payment processing, Mollie is integrated to enable smooth and secure checkout experiences.`,
      image: `${nexBuyImage}`,
      skills: ['React','React Native','Tailwind Css', 'Firebase'],
    },
    {
      id: 3,
      title: "BeyondMD Prescribery(Patient & Provider)",
      description: `This application belongs to the Telehealth and Telemedicince domain. It fundamentally serves the purpose of bringing medical services to
each citizen's disposal. This application provides the features for patients to book appointments for their concerns with doctors, including a
personalized chat module, record for each medication, allergy and the prescriptions prescribed to him, feature for enabling RPM( Remote
Patient Monitoring), services for booking various lab Tests which also include delivery of their reports to his/her households. Thus reducing
the hassle to visit clinics for continuous health checkups.`,
      image: `${theme === "dark" ? prescriberyDarkImage : prescriberyImage}`,
      skills: ["Android", "Kotlin", "Java", "Terra SDK"],
    },
    {
      id: 4,
      title: "Build Ezi",
      description: `This project is fundamentally a mobile application built for clients, owners and workers. 
      This application focuses onproviding the clients and owners to collaborate and get their work done under proper supervision. 
      This application clearsthe hassle for clients to keep a check on site work progress, this application serves as the purpose where the client caneasily log in to the app and 
      have a look over all the plans, workers assigned on the on-site work and their day-to-daytimesheets, daily logs which helps the clients to continuously keep an easy check over 
      the quality of work being done which further helps the owner to provide efficient work delivery to the clients.`,
      image: `${theme === "dark" ? buildDarkImage : buildImage}`,
      skills: ["Android", "Kotlin", "Java", "Firebase"],
    },
  ];
  return (
    <div class="mx-auto max-w-7xl py-16 md:py-24 " ref={ref}>
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Work</p>
        </div>
        <p class="pt-4 dark:text-gray-dark-600">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      <div class="pt-12 px-4 lg:px-0  flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            class="bg-white dark:bg-gray-dark-100 rounded-xl flex flex-col md:flex-row  justify-evenly px-12 py-12 shadow "
          >
            <div class="order-first px-12 py-12 flex-1 justify-items-stretch items-center">
              <img src={project.image} />
            </div>
            <div class="flex-1 flex-col order-last md:order-2  ">
              <p class="text-xl pt-12 font-bold dark:text-white">
                {project.title}
              </p>
              <p class="text-base pt-6 text-justify dark:text-gray-dark-600">
                {project.description}
              </p>
              <div class="grid  grid-cols-3 grid-rows-2  rounded-xl mt-6">
                {project.skills.map((skill) => (
                  <div class="text-center flex justify-center items-center bg-gray-200 dark:bg-gray-dark-200 dark:text-gray-dark-600 rounded-xl mr-1 mt-2 ">
                    <p class="px-5 py-1 text-[14px]">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
