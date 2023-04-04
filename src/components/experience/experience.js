import React from "react";
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
import { Slide } from "react-awesome-reveal";


export const Experience = () =>{
    return(
        <section id="experience">
            <h5 className="text-[#191919] dark:text-[#fff]">What Skills I Have</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend bg-transparent border-2 border-[#4dbfff]">
                    <h3>
                        Frontend Developmrnt
                    </h3>
                    <div className="experience_content ">
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>HTML</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                            
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>CSS</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Javascrit</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>

                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Bootstrap</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>

                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>Tailwind</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>React</h4>
                             <small className=" text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                                
                             </div>
                        </article>
                        
                    </div>
                   
                </div>
                
                <div className="experience_Backend bg-transparent border-2 border-[#4dbfff]">
                    <h3>
                        Additonal Skills
                    </h3>
                    <div className="experience_content "> 
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                                
                             <h4>Framer</h4>
                             <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">basics</small>
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Bootstrap</h4>
                             <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                                
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Node</h4>
                             <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">basics</small>
                                
                                </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>GIT Control</h4>
                             <small className="text-[#191919] dark:text-[rgba(255,255,255,0.6)]">Experienced</small>
                                
                                </div>
                        </article>
                       
                    </div>
                   
                </div>
            </div>
        </section>

    


    )
   
}