import styles from "./About.module.css";

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:2/8 lg:w-2/8">
                      <img
                            className={styles.img}
                          src="src\assets\img\SAVE_20210602_190555.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Vishal Jadhav 
                      </h2>
                      <p className="mt-6 text-gray-600">
                         <p >Proficient in HTML, CSS and JavaScript with hands-on experience in building 
                       Responsive and user-friendly web interface. Skilled in utilizing front-end 
                      frameworks such as Bootstrap to create dynamic and interactive websites. 
                     Strong problem-solving abilities and quick learner.</p>
                      </p>
                     
                      
                  </div>
              </div>
          </div>
      </div>
  );
}