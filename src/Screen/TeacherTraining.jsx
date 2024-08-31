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
    <div className="min-h-screen">
      {/* <h1>Teacher training program</h1> */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="bg-blue-300">
          <div className="py-10 w-2/3 m-auto">
            <h1 className="text-[2vw] text-center">Teacher Training Program</h1>

            <p className="px-3 py-3">
              ADISRI PUBLICATIONS is a dynamic and evolving name in the
              educational publishing industry in India. We are committed to
              offering enjoyable learning opportunities and memorable reading
              experiences as we strive to enhance the quality of education for
              students through reading, writing, and drawing. Our mission is to
              develop and publish high-quality educational books for pre-primary
              and primary students across a variety of subjects, including
              English, Mathematics, Environmental Studies, Art, Activities,
              Hindi, and English Rhymes. With a nationwide network and corporate
              offices across Delhi and the National Capital Region, Adisri
              Publications ensures exceptional market penetration and
              availability of our products throughout the country. Our robust
              team network enables us to serve different parts of India
              efficiently. Recognizing the immense potential beyond the Indian
              market, Adisri Publications has also embarked on an international
              journey. With a focus on global expansion, we have successfully
              entered markets in the Middle East, sharing our expertise and
              high-quality educational materials with a broader audience
            </p>
          </div>
        </div>
        <div className="bg-yellow-300 p-20">
          <Slider {...settings} className=" ">
            <div className="">
              <img
                className="aspect-[4/8] "
                src="https://qph.cf2.quoracdn.net/main-qimg-c909a9333e08d197a474d455554c2086.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="aspect-[4/2]"
                src="https://senseselec.com/wp-content/uploads/2024/05/Teacher-training-programs-scaled.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="aspect-[4/8]"
                src="https://dev.ihmalta.com/wp-content/uploads/teacher_training_main_wef_2022_feb_quality80_585x351.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-[90%] m-auto py-4">
        <h1 className="text-xl font-semibold ">IntroDuction</h1>
        <p className="w-3/5 text-center m-auto leading-loose text-lg">
          Adisri Publications in association with Dr. Kalam International
          Foundation (a leading International NGO certified by MSME, Govt. of
          India & Niti Ayog) is committed to promoting quality & value-based
          education along with professional development amongst educators in
          alignment with policy requirements of quality. Adisri Publications has
          collaborated with Dr. Kalam International Foundation (DKIF) to offer
          an opportunity for enrichment and growth of your esteemed teaching
          staff. Training for teachers according to CBSE (Central Board of
          Secondary Education)
        </p>
        <div>
          <h1 className="text-3xl font-bold border-b-2 p-2">Highlights</h1>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[20px] py-5 gap-y-5">
          <div>
            <h3 className="font-semibold text-2xl ">Enhanced Teaching Skills</h3>
            <p>
              Teacher's training & workshops based on CBSE guidelines help
              teachers improve their teaching methodologies, classroom
              management techniques, and understanding of subject matter.
              Thisteads to more effective delivery of lessons and better student
              engagement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Updated Curriculum Understanding </h3>
            <p>
              Teachers gain insights into the latest CBSE curriculum updates,
              assessment patterns, and educational reforms. This ensures they
              are aligned with current educational standards and can impart
              knowledge accordingly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Incorporation of Innovative Techniques:</h3>
            <p>
              Training encourages teachers to integrate new technologies and
              innovative teaching techniques into their classrooms. This can
              include using digital tools, interactive learning methods, and
              project-based learning approaches.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Improved Student Learning Outcomes:</h3>
            <p>
              With better teaching practices and a deeper understanding of
              curriculum objectives, teachers can positively impact student
              learning outcomes. This might reflect in improved academic
              performance and overall development of students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Professional Development</h3>
            <p>
              These trainings & workshops provide opportunities for professional
              growth and networking among educators. It fosters a community of
              practice where teachers can share experiences, collaborate on best
              practices, and support each other.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Adherence to Educational Standards:</h3>
            <p>
              By following CBSE guidelines, teachers ensure that their teaching
              practices meet national educational standards. This consistency
              helps in maintaining quality education across CBSE-affiliated
              schools.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Personalized Learning Approaches:</h3>
            <p>
              Training often emphasizes personalized learning strategies that
              cater to diverse student needs and learning styles. Teachers learn
              to differentiate instruction and provide individualized support to
              students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Preparation for Assessments:</h3>
            <p> Our trainings often include guidance on assessment
strategies and techniques. Teachers learn how to design effective assessments that
align with curriculum goals and provide meaningful feedback to students.</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Enhanced Teaching Skills</h3>
            <p>
              Our trainings often include guidance on assessment strategies and
              techniques. Teachers learn how to design effective assessments
              that align with curriculum goals and provide meaningful feedback
              to students.
            </p>
          </div>
        </div>
        <div>
            <h3 className="text-2xl py-4 font-medium">A List of the topics has been mentioned for your perusal.</h3>
            <div className="w-2/5 max-sm:w-[90%] m-auto">
               <img className="" src="proposal dr. Kalam foundation & adisri publications_page-0004.jpg" alt=""  />
            </div>
          <h5 className="w-[50%] max-sm:w-[90%] text-center m-auto py-10">
          We look forward to your kind confirmation and inputs regarding the specific topics
that would be of your interest to your teaching staff.

Once we get your confirmation, we can work closely to finalize the workshop
schedule and logistics.

We thank you for your keen interest & commitment to quality & value- based
education.

We look forward to a fruitful & long association with your esteemed institution.

          </h5>
          <button className="bg-slate-500 rounded-full p-3 text-white max-sm:text-xs m-auto block transition-all duration-200 hover:bg-gray-900 ">
          <a href="https://drive.google.com/file/d/1S28iwHGOFH85bA_c2fWmi8bCh3tV4MkL/view?usp=sharing" download="TeachTraining.pdf" target="_blank"> Download Brochure</a> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherTraining;
