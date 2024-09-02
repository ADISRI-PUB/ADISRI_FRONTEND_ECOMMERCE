import React from "react";
import Slider from "react-slick";
function TeacherTraining() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: "",
    prevArrow: "",
    dots: false,
  };
  return (
    <div className="min-h-screen bg-[#e0e0e088]">
      {/* <h1>Teacher training program</h1> */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="">
          <div className="py-10 w-2/3 m-auto">
            <h1 className="text-[2vw] text-center">Teacher Training Program</h1>

            <p className="px-4 py-3 text-xl ">
              Adisri Publications is a rapidly growing organization which
              strongly focuses on the very necessary early childhood education
              and professional development of a child, parent as well as
              organizations with a positive and strong influence on the basics
              of schooling and learning insights.Adisri Publications offers
              Teacher training programs which are designed to equip individuals
              with the necessary skills, knowledge, and understanding to become
              effective educators. These Teacher training programs, are
              conducted in the right manner and with the right content, have the
              power to train teachers to such an extent that they go on to
              positively impact students not just in academics but also outside
              of it.
            </p>
          </div>
        </div>
        <div className=" p-20">
          {/* <Slider {...settings} className=" ">
              </Slider> */}
          
            <div>
              <img
                className=""
                src="https://senseselec.com/wp-content/uploads/2024/05/Teacher-training-programs-scaled.jpg"
                alt=""
              />
            </div>
  
        </div>
      </div>
      <div className="w-[90%] m-auto py-4 ">
        <div className="flex  logg">
        <h1 className="text-xl font-semibold  border-[#FFFFFF] ">
          {" "}
          <span className="text-[#293249] "> About the Programme</span>
        </h1>
        <p className=" w-[85%] m-auto leading-relaxed text-lg py-5 text-[#293249]">
          Adisri Publications in association with Dr. Kalam International
          Foundation (a leading International NGO certified by MSME, Govt. of
          India & Niti Ayog) is committed to promoting quality & value-based
          education along with professional development amongst educators in
          alignment with policy requirements of quality. Adisri Publications has
          collaborated with Dr. Kalam International Foundation (DKIF) to offer
          an opportunity for enrichment and growth of your esteemed teaching
          staff. Training for teachers according to CBSE (Central Board of
          Secondary Education) guidelines offers several benefits
        </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center p-2 border-white text-[#293249] sm:py-10">Highlights</h1>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1  gap-[20px] py-5  highlights">
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Enhanced Teaching Skills
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              Teacher's training & workshops based on CBSE guidelines help
              teachers improve their teaching methodologies, classroom
              management techniques, and understanding of subject matter. This
              leads to more effective delivery of lessons and better student
              engagement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Updated Curriculum Understanding{" "}
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              Teachers gain insights into the latest CBSE curriculum updates,
              assessment patterns, and educational reforms. This ensures they
              are aligned with current educational standards and can impart
              knowledge accordingly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Incorporation of Innovative Techniques
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              Training encourages teachers to integrate new technologies and
              innovative teaching techniques into their classrooms. This can
              include using digital tools, interactive learning methods, and
              project-based learning approaches.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Improved Student Learning Outcomes
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              With better teaching practices and a deeper understanding of
              curriculum objectives, teachers can positively impact student
              learning outcomes. This might reflect in improved academic
              performance and overall development of students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">Professional Development</h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              These trainings & workshops provide opportunities for professional
              growth and networking among educators. It fosters a community of
              practice where teachers can share experiences, collaborate on best
              practices, and support each other.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Adherence to Educational Standards
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              By following CBSE guidelines, teachers ensure that their teaching
              practices meet national educational standards. This consistency
              helps in maintaining quality education across CBSE-affiliated
              schools.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Personalized Learning Approaches
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              Training often emphasizes personalized learning strategies that
              cater to diverse student needs and learning styles. Teachers learn
              to differentiate instruction and provide individualized support to
              students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">
              Preparation for Assessments
            </h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              {" "}
              Our trainings often include guidance on assessment strategies and
              techniques. Teachers learn how to design effective assessments
              that align with curriculum goals and provide meaningful feedback
              to students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-center">Enhanced Teaching Skills</h3>
            <p className="flex justify-center w-11/12 py-3 m-auto">
              Our trainings often include guidance on assessment strategies and
              techniques. Teachers learn how to design effective assessments
              that align with curriculum goals and provide meaningful feedback
              to students.
            </p>
          </div>
        </div>
        <div>
          <p className="w-4/5 m-auto p-10 max-sm:p-4 leading-relaxed text-center text-lg text-[#293249]">
            In summary, Adisri – DKIF trainings & workshops based on CBSE
            guidelines are crucial for fostering professional development,
            enhancing teaching effectiveness, and ultimately contributing to the
            holistic development of students within the CBSE educational
            framework. Our proposed workshops cover a wide range of topics that
            have been meticulously crafted to align with NEP 2020, NCF (National
            Curriculum Framework), SDG Goals, incorporating Research methodology
            in lesson plans & classrooms etc.
          </p>
          <button className="bg-white rounded-full p-3 block m-auto  text-black max-sm:text-xs   transition-all duration-400 hover:bg-[#293249] hover:text-white " onMouseEnter={()=>{
           document.querySelector('#_download').setAttribute('fill',"#FFFFFF")  
          }}
           onMouseLeave={()=>{
            document.querySelector('#_download').setAttribute('fill',"#000")  
           }}
          >
            <a
              href="https://drive.google.com/file/d/1S28iwHGOFH85bA_c2fWmi8bCh3tV4MkL/view?usp=sharing"
              download="TeachTraining.pdf"
              target="_blank"
              className="flex logg items-center space-x-3"
            >
              {" "}
             <span className=""> Download Brochure</span>
              <span className="">
              <svg id='_download' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
              </span>
            </a>
          </button>
          <h4 className="text-lg font-medium text-[#293249] px-5">For More About this Program  <a href="mailto:design.adisri@gmail.com"> <b className="cursor-pointer"> Click Here</b> </a></h4>
          <h3 className="text-2xl py-10 font-medium text-[#293249]">
            List of Topics included in Teacher Training Program
          </h3>
          <div className="w-2/5 max-sm:w-[90%] m-auto">
            <img
              className=""
              src="proposal dr. Kalam foundation & adisri publications_page-0004.jpg"
              alt=""
            />
          </div>
        
        
        </div>
      </div>
    </div>
  );
}

export default TeacherTraining;
