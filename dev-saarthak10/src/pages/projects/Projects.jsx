import React from "react";
import digidocImage from "../../assets/digidoc_project.svg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digidoc",
      description: `DigiDoc is an innovative project developed for the Central Government of India to modernize the online creation of legal documents such as affidavits, 
      gift deeds, and more.The platform streamlines the documentation process with integrated features like e-signatures, 
       digital signatures, and consent-based reviews, ensuring both efficiency and legal authenticity. Additionally, DigiDoc connects with BlueDart services for the 
       swift and secure delivery of finalized documents.`,
      image: `${digidocImage}`,
      skills: ["React", "Material UI", "Javascript", "Git"],
    },
    {
      id: 2,
      title: "Digidoc",
      description: `DigiDoc is an innovative project developed for the Central Government of India to modernize the online creation of legal documents such as affidavits, 
      gift deeds, and more. Designed with a user-friendly interface, it caters to Individuals, Corporates, and Business Associates (BAs), offering
      role-based access aligned with each user's responsibilities. The platform streamlines the documentation process with integrated features like e-signatures, 
      digital signatures, and consent-based reviews, ensuring both efficiency and legal authenticity. Additionally, DigiDoc connects with BlueDart services for the 
      swift and secure delivery of finalized documents. By simplifying and digitizing document workflows, DigiDoc enhances user convenience while supporting the government’s 
      vision of a more efficient and accessible administrative system.`,
      image: `${digidocImage}`,
      skills: [],
    },
    {
      id: 3,
      title: "Digidoc",
      description: `DigiDoc is an innovative project developed for the Central Government of India to modernize the online creation of legal documents such as affidavits, 
      gift deeds, and more. Designed with a user-friendly interface, it caters to Individuals, Corporates, and Business Associates (BAs), offering
       role-based access aligned with each user's responsibilities. The platform streamlines the documentation process with integrated features like e-signatures, 
       digital signatures, and consent-based reviews, ensuring both efficiency and legal authenticity. Additionally, DigiDoc connects with BlueDart services for the 
       swift and secure delivery of finalized documents. By simplifying and digitizing document workflows, DigiDoc enhances user convenience while supporting the government’s 
      vision of a more efficient and accessible administrative system.`,
      image: `${digidocImage}`,
      skills: [],
    },
  ];
  return (
    <div class="mx-auto max-w-7xl py-16 md:py-24 ">
      <div class="flex flex-col justify-center items-center">
        <div class=" bg-gray-200 rounded-lg">
          <p class="px-5 py-1">Work</p>
        </div>
        <p class="pt-4">Some of the noteworthy projects I have built:</p>
      </div>

      <div class="pt-12 px-4 lg:px-0  flex flex-col gap-6">
        {projects.map((project) => (
          <div class="bg-white rounded-xl flex flex-col md:flex-row  justify-evenly px-12 py-12 shadow ">
            <div class="order-first px-12 py-12 flex-1/2 justify-items-stretch items-center">
              <img src={project.image} />
            </div>
            <div class="flex-1/2 flex-col order-last md:order-2  ">
              <p class="text-xl pt-12 font-bold">{project.title}</p>
              <p class="text-base pt-6 text-justify">{project.description}</p>
              <div class="grid  grid-cols-3 grid-rows-2  rounded-xl mt-6">

              {project.skills.map((skill)=>(
                <div class="text-center bg-gray-200 rounded-xl mr-1 mt-2 ">
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
