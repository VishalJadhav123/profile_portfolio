import styles from "./Education.module.css";
import { Link } from "react-router-dom";

function Education(){
  return(
    <>
    <div className={styles.MainContainer}>
      
      <div className={styles.EducationContainer}>
        <h2>Education</h2>
       
        <div className={styles.container}>
          
          <div className={styles.card}>
            <h2>Skill Academy by Testbook</h2>
            <h3>April 2024-Ongoing</h3>
            <h4>[Full Stack Development Career Program (with Java Specialization)]
            </h4>
          </div>

          <div className={styles.card}>
            <h2>Hindustan Aerospace and Engineering</h2>
            <h3>(Approved by DGCA Govt. of India)
            </h3>
            <h4>(Aircraft Maintenance Engineer).
            </h4>
          </div>

          <div className={styles.card}>
            <h2>Yashwantrao Chavan Open University, Nashik</h2>
            <h3>[Bachelor Of Arts (B.A)]
            </h3>
          </div>

          <div className={styles.card}>
            <h2>Sharda modern school and college</h2>
            <h3>[Higher Secondary Education]
            </h3>
           </div>
        
        
        </div>
      </div>
      
      <div className={styles.ProjectContainer}>
        <h2>Projects</h2>

        <div className={styles.container}>

        <div className={styles.card}>
            <h2>Personal Portfolio Website</h2>
            <Link to="https://github.com/VishalJadhav123/"
             className="hover:underline">Git Link</Link>
           <h4>
           Tech stack: - HTML, CSS, JavaScript, Bootstrap, React.Js</h4>
          </div>

          <div className={styles.card}>
            <h2>Todo-App</h2>
            <Link to="https://github.com/VishalJadhav123/ToDo-App.git" className="hover:underline">Git Link</Link>
           <h4>It is a solo Project made in the span of 3 days.
           Tech stack: - HTML, CSS, JavaScript, Bootstrap, React.Js</h4>
          </div>

          <div className={styles.card}>
            <h2>Calculato</h2>
            <Link to="https://github.com/VishalJadhav123/Calculator.git" className="hover:underline">Git Link</Link>
            <h4>Tech stack: - HTML, CSS, JavaScript, Bootstrap, React.Js.
            </h4>
          </div>

        
        
        
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Education;