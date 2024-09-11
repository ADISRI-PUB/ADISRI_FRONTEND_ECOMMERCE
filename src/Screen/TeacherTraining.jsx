import React,{useState} from "react";
import Slider from "react-slick";

import { Helmet } from "react-helmet";


import '../Css/IPrePrimary.css'


function TeacherTraining() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("For Teacher Training Program");
  const [message, setMessage] = useState("");
  const regex = /[6-9]{1}[0-9]{9}/;
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
     
       if (!regex.test(phone)) {
          document.querySelector('.text').classList.replace("text-black","text-[#FF403D]")
       }
       else{
        document.querySelector(".tracking-wide").textContent="sending......"

        setTimeout(async()=>{
          const formData = new FormData(event.target);
          
          formData.append("access_key", "229f2605-024b-4455-9837-6bbd8d888654");
          const response = await fetch("https://api.web3forms.com/submit", {
           method: "POST",
           body: formData
         });
        const data = await response.json()
         if (data.success) {
          document.querySelector(".tracking-wide").textContent="sent !"
               setTimeout(()=>{
                setEmail("");
                          setMessage("");
                          setPhone("");
                         
                          setfirstname("");
                          setlastname("");
                          event.target.reset();
                            document.querySelector(".tracking-wide").textContent="send"
               },1000)
         } else {
          //  console.log("Error", data);
           // setResult(data.message);
           document.querySelector('.tracking-wide').textContent="Please Try Again Later !"
           setTimeout(()=>{
             document.querySelector(".tracking-wide").textContent="send"

           },1000)
         }
        },1000)
        
       }
    

   

   
  };
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
    <div className="min-h-screen">
       <div className="applications">
        <Helmet>
        <title>Teacher Training Program - Enhance Your Teaching Skills | Adisri Publications</title>
        <meta 
          name="description" 
          content="Join the Teacher Training Program by Adisri Publications. Designed for educators looking to enhance their teaching skills and methodologies, our program offers comprehensive training and certification." 
        />
        <meta 
          name="keywords" 
          content="Teacher Training Program, Professional Development, Educator Training, Teaching Skills, Education Programs, Adisri Publications" 
        />
      </Helmet>

        </div>
      {/* <h1>Teacher training program</h1> */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="">
          <div className="py-10  max-sm:py-4 w-2/3 max-sm:w-full m-auto">
            <h1 className="text-[2vw] text-center max-sm:text-lg text-[#293249]">Teacher Training Program</h1>

            <p  className="px-4 py-3 max-sm:px-2 text-xl max-sm:text-sm text-[#293249] ">
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
        <div className="  max-sm:p-0">
          {/* <Slider {...settings} className=" ">
              </Slider> */}
          
            <div>
              <img
                className="w-[65%] m-auto"
                src="Education-bro (1).png"
                alt=""
              />
            </div>
  
        </div>
      </div>
      <div className="w-[90%] m-auto py-4 ">
        <div className=" max-sm:justify-center max-sm:flex-wrap ">
        <h1 className="text-xl font-semibold  text-center py-4 border-[#FFFFFF] ">
          {" "}
          <span className="text-[#293249]  text-3xl  "> About the Programme</span>
        </h1>
        <p className=" w-[85%] max-sm:w-full m-auto leading-relaxed text-lg py-5 text-[#293249]">
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
          <p className="w-4/5 max-sm:w-full m-auto p-10 max-sm:p-4 leading-relaxed sm:text-center text-lg text-[#293249]">
            In summary, Adisri – DKIF trainings & workshops based on CBSE
            guidelines are crucial for fostering professional development,
            enhancing teaching effectiveness, and ultimately contributing to the
            holistic development of students within the CBSE educational
            framework. Our proposed workshops cover a wide range of topics that
            have been meticulously crafted to align with NEP 2020, NCF (National
            Curriculum Framework), SDG Goals, incorporating Research methodology
            in lesson plans & classrooms etc.
          </p>
          <button className="bg-[#FF5F5F] rounded-full p-3 block m-auto  text-black max-sm:text-xs   transition-all duration-400 hover:bg-[#FCE992]  " 
          >
         <a
  href="https://drive.google.com/uc?export=download&id=16fC2oxuSHoemQD5P7br-_PZupnlseII_"
  download="TeachTraining.pdf"

  className="flex logg items-center space-x-3"
>
              {" "}
             <span className=""> Download Brochure</span>
              <span className="">
              <svg id='_download' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
              </span>
            </a>
          </button>
          <br />
          <h4 className="text-lg font-medium text-[#293249] px-5 max-sm:text-sm max-sm:py-5 w-full  " onClick={()=>{
            document.querySelector('.formteachertraining').classList.toggle('hidden')
          }}>For More About this Program <b className="cursor-pointer  p-2 text-sm bg-[#ff5f5f] text-white rounded-full max-sm:p-1"> Click Here</b></h4>
         <div className={`formteachertraining max-w-[600px] m-auto relative  hidden`}>
         <div className=" w-[100%] sm:max-w-[80%]  m-auto">
                    <form
                      id="Contact-us"
                       onSubmit={onSubmit}
                      className="rounded-lg  min-w-full"
                    
                    >
                      
                      <div className="">
                        <div>
                          {/* <h1 className="text-center text-2xl mb-6 text-white font-bold font-sans border-b-2 border-white">
                    CONTACT FROM 
                  </h1> */}
                          <div className="grid sm:grid-cols-2 gap-10 max-sm:gap-2">
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md"
                                htmlFor="username"
                              >
                                First Name*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                                type="text"
                                name="firstname"
                                id="username"
                                required
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)}
                              />
                            </div>
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md"
                                htmlFor="username"
                              >
                                Last Name
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                                type="text"
                                name="lastname"
                                id="username"
                                value={lastname}
                                onChange={(e) => {
                                  setlastname(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-10 max-sm:gap-5">
                            <div>
                              <label
                                className="text-black font-semibold block my-3 text-md"
                                htmlFor="username"
                              >
                                Email*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                                type="email"
                                name="email"
                                id="username"
                                required
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                            <div>
                              <label
                                className="text-black font-semibold block sm:my-3 text-md text"
                                htmlFor="username"
                              >
                                Phone*
                              </label>
                              <input
                                className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                                type="number"
                                name="phone"
                                id="username"
                                required
                                value={phone}
                                onFocus={() => {
                                  document
                                    .querySelector(".text")
                                    .classList.replace(
                                      "text-[#FF403D]",
                                      "text-black"
                                    );
                                }}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              className="text-black font-semibold block my-3 text-md"
                              htmlFor="username"
                            >
                              Subject
                            </label>
                            <input
                              className="w-full  p-2 bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                              type="text"
                              name="subject"
                              id="username"
                              required
                              readOnly="true"
                              value={subject}
                             
                            />
                          </div>
                          <div className="w-full ">
                            <label
                              className="text-black  font-semibold block my-3  text-md "
                              htmlFor="username"
                            >
                              Message
                            </label>
                            <textarea
                              className="w-full bg-transparent border-b-2 border-[#FF403D] text-black focus:outline-none"
                              name="message"
                              cols={"30"}
                              rows={"5"}
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <button
                         type="submit"
                        className="w-full mt-6 transition-all  duration-200 bg-[#FF403D] hover:bg-[#ff6764] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans "
                      >
                        Send
                      </button>
                    </form>
                  </div>
             
         </div>
          <h3 className="text-2xl py-10 font-medium text-[#293249] max-sm:text-lg">
            New Academic System According To NEP
          </h3>
       
          <div className="w-4/5 max-sm:w-[90%] m-auto   gap-0  _3d-container ">
           
          <div className=" ">
            <div className="text-center border-b-4 border-black text-3d ">
              <p className="border-r-4 border-black text-xl ">Foundational</p>
              </div>
            <div className="_3d min-h-[200px]  h-full   bg-purple-700 text-white">
            <div className=" flex logg text-center m-auto  h-full ">
            <div className="w-11/12 m-auto text-xl ">
                 {/* <p className="border-b-2">Foundational</p> */}
                     <h6>2 Years</h6>
                     <p><span>(Class 1 & 2)</span> <span>(Class 6-8)</span></p>
                     <p>----------------------------</p>
                     <p>3 Years (Anganwadi/pre-school/Balvatika)(Ages 3-6)</p>
                 </div>
                 </div>
            </div>
            </div>
               <div className=" ">
            <div className="text-center border-b-4 border-black text-3d ">
              <p className="border-r-4 border-black text-xl ">Preparatory</p>
              </div>
            <div className="_3d min-h-[200px]  h-full   bg-amber-500 text-white">
            <div className=" flex logg text-center m-auto  h-full ">
            <div className="w-11/12 m-auto text-2xl ">
                 {/* <p className="border-b-2">Foundational</p> */}
                     <h6>3 Years</h6>
                     <p><span>(Class 3 to 5 )</span></p>
                     
                     <p>(Ages 8-11)</p>
                 </div>
                 </div>
            </div>
            </div>
             
            <div className=" ">
            <div className="text-center border-b-4 border-black text-3d ">
              <p className="border-r-4 border-black text-xl ">Middle</p>
              </div>
            <div className="_3d min-h-[200px]  h-full   bg-purple-400 text-white">
            <div className=" flex logg text-center m-auto  h-full ">
                 <div className="w-11/12 m-auto text-2xl ">
                 {/* <p>Middle</p> */}
                     <h6>3 Years</h6>
                     <p><span>(Class 6 to 8)</span></p>
                     
                     <p>(Age 11-14)</p>
                 </div>
                 </div>
            </div>
            </div>
            <div className=" ">
            <div className="text-center border-b-4 border-black text-3d ">
              <p className="border-r-4 border-black text-xl ">Secondary</p>
              </div>
            <div className="_3d min-h-[200px]  h-full   bg-green-400 text-white">
            <div className=" flex logg text-center m-auto  h-full ">
                 <div className="w-11/12 m-auto text-2xl ">
                 {/* <p>Middle</p> */}
                     <h6>4 Years</h6>
                     <p><span>(Class 9 to 12)</span></p>
                     
                     <p>(Age 14-18)</p>
                 </div>
                 </div>
            </div>
            </div>
          
          </div>
          <h3 className="text-2xl py-10 font-medium text-[#293249] max-sm:text-lg">
            List of Topics included in Teacher Training Program
          </h3>
          <div className="w-3/5 flex  justify-center m-auto max-sm:w-[90%] ">
          {/* <table>
            <tr>
              <th>S.NO</th>
              <th>Topics</th>
              <th>Category</th>
            </tr>
            <tr>
              <td>1.</td>
              <td className="">New Education Policy (NEP)2020</td>
              <td className="">ALL</td>              
            </tr>
            <tr>
              <td>2.</td>
              <td>National Curriculum Framework(NCF): Foundational Satge</td>
              <td>Foundation</td>
            </tr>
            <tr>
              <td>3.</td>
              <td></td>
              <td></td>
            </tr>
          </table> */}
          <table border="1" cellspacing="0" cellpadding="5" className="max-sm:text-xs">
  <thead >
    <tr className="bg-[#FF5F5F] ">
      <th>S.NO</th>
      <th>Topics</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>New Education Policy (NEP) 2020</td>
      <td>All</td>
    </tr>
    <tr>
      <td>2</td>
      <td>National Curriculum Framework (NCF): Foundational Stage</td>
      <td>Foundational</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Early Childhood Care and Education FLN- Foundational Literacy & Numeracy</td>
      <td>Foundational</td>
    </tr>
    <tr>
      <td>4</td>
      <td>FLN - Foundfational Literacy & Numeracy </td>
      <td>Foundational</td>
    </tr>
   
    <tr>
      <td>5</td>
      <td>HPC-Holistic Progress Card</td>
      <td>Foundational & Prep.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Storytelling Pedagogy</td>
      <td>Foundational & Prep.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Game based Pedagogy</td>
      <td>Foundational & Prep.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Making a Lesson Plan Essential Components</td>
      <td>All</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Alternative to Homework</td>
      <td>Foundational & Prep.</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Three domains of child development-Parent, Teacher & Child</td>
      <td>Foundational & Prep.</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Environmental Education</td>
      <td>Found. Prep & Middle</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Learning by doing</td>
      <td>Middle</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Adolescent Education Programme</td>
      <td>Middle</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Art Integration</td>
      <td>All</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Classroom Management</td>
      <td>All</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Critical & Creative Thinking</td>
      <td>All</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Experiential Learning</td>
      <td>All</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Gender Sensitivity in Schools</td>
      <td>All</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Happy Classrooms</td>
      <td>All</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Ethics & Integrity</td>
      <td>All</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Learning outcomes & Pedagogies</td>
      <td>All</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Life skills (Basic)</td>
      <td>All</td>
    </tr>
    <tr>
      <td>23</td>
      <td>21st Century Skill Based Classrooms</td>
      <td>All</td>
    </tr>
    <tr>
      <td>24</td>
      <td>Career Guidance</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>25</td>
      <td>Cyber Safety & Security</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>26</td>
      <td>Stress Management</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>27</td>
      <td>Strengthening Assessment & Evaluation Practices</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Leading Transformation</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>29</td>
      <td>School Libraries</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Theory of Knowledge</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>31</td>
      <td>Active Learning</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Project based learning</td>
      <td>Secondary/All</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Competency Based Assessment (Secondary Level)- Generic</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>34</td>
      <td>SQAAF(Principal/Vice Principal /SR.Coordinator)</td>
      <td></td>
    </tr>
  </tbody>
</table>
          </div>
        
        
        </div>
      </div>
    </div>
  );
}

export default TeacherTraining;
