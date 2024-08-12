import { Link } from "react-router-dom";
import React from "react";
import style from "./Home.module.css"

 export default function Home() {
  return (
      <div className={style.MainContainerBox}>

              <div className={style.ContainerHeading}>
                 <div  className={style.mainCover}>
                  <img className={style.img} src="src\assets\img\1723288560835.webp" alt="image1" />
                  
                </div>

                <div className={style.headingName}>
                      <h2 className={style.Name}>
                          Vishal Jadhav
                          <span className={style.desig}>Front-End Devloper</span>
                      </h2>
                      <div className={style.profilePara}>
                    
                        <p className="mt-6 text-gray-600">
                            My Name is <b>Vishal Kishanrao Jadhav</b>.I am a<b> Aircraft Maintenance Engineer. </b> I completed My engneering from<b> Hindustan Aerospace And Engineering College Pune.</b> 
                      </p>
                      <p className="mt-4 text-gray-600">
                         I am doing <b>Full Stack Development Career Program With Java Specialization</b> training in <b>Skill Academy</b> from last April.I have Studied front-End Devloping program till now and currently Start studying DSA and Java.
                      </p>
                     
                       </div>
                       <div className="Skills">
                        <b>Skills</b>
                        <div className={style.skillContainer}>
                            <img className={style.skillimg} src="src\assets\img\images (1).png" alt="" />
                            <img className={style.skillimg}  src="src\assets\img\images.png" alt="" />
                            <img className={style.skillimg}  src="src\assets\img\png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png" alt="" />
                            <img className={style.skillimg}  src="src\assets\img\reactlogo.png" alt=""/>
                        </div>
                       </div>
                 </div>                     
                      
              </div>
     </div>
  );
}

