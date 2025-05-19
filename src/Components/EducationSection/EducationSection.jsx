const EducationSection = () => {
  // Education data with the 5 specific items
  const educationData = {
    primaryEducation: {
      school: "Our Own Vidyavihar,Prantij",
      standards: "1st to 9th Standard",
      years: "2010-2019",
      achievements: "Consistent academic performer with focus on mathematics and science",
    },
    sscMarks: {
      school: "Taxshila Vidyalay,Prantij",
      percentage: "85%",
      year: "2020",
      board: "State Board",
    },
    hscMarks: {
      school: "Taxshila Science Vidyalay,Prantij",
      percentage: "78%",
      year: "2022",
      stream: "Science",
    },
    currentCollege: {
      name: "Silver Oak University Engineering College",
      course: "B.Tech in Computer Engineering",
      currentYear: "3rd Year",
      cgpa: "8.5/10",
    },
    careerStatus: {
      lookingFor: "Internship",
      interests: "Web Development, UI/UX Design, Software Development",
      availability: "Available for Summer 2024",
    },
  }

  return (
    <section className="  w-full py-12 " id="education">
      <div className=" border-none rounded-xl  bg-[#101423] container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Education 🧑‍🎓</h2>

        <div className="space-y-6">
          {/* Primary Education */}
          <div className=" bg-[#101423]  p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Primary Education (1-9 Standard)</h3>
            <div className="mt-2 text-gray-300">
              <p>
                <span className="text-blue-400">School:</span> {educationData.primaryEducation.school}
              </p>
              <p>
                <span className="text-blue-400">Years:</span> {educationData.primaryEducation.years}
              </p>
              <p>
                <span className="text-blue-400">Details:</span> {educationData.primaryEducation.achievements}
              </p>
            </div>
          </div>

          {/* SSC Marks */}
          <div className=" bg-[#101423]  p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-white">SSC (10th Standard)</h3>
            <div className="mt-2 text-gray-300">
              <p>
                <span className="text-blue-400">School:</span> {educationData.sscMarks.school}
              </p>
              <p>
                <span className="text-blue-400">Board:</span> {educationData.sscMarks.board}
              </p>
              <p>
                <span className="text-blue-400">Year:</span> {educationData.sscMarks.year}
              </p>
              <p>
                <span className="text-blue-400 font-medium">Percentage:</span>{" "}
                <span className="text-white font-medium">{educationData.sscMarks.percentage}</span>
              </p>
            </div>
          </div>

          {/* HSC Marks */}
          <div className=" bg-[#101423]  p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-white">HSC (12th Standard)</h3>
            <div className="mt-2 text-gray-300">
              <p>
                <span className="text-blue-400">College:</span> {educationData.hscMarks.college}
              </p>
              <p>
                <span className="text-blue-400">Stream:</span> {educationData.hscMarks.stream}
              </p>
              <p>
                <span className="text-blue-400">Year:</span> {educationData.hscMarks.year}
              </p>
              <p>
                <span className="text-blue-400 font-medium">Percentage:</span>{" "}
                <span className="text-white font-medium">{educationData.hscMarks.percentage}</span>
              </p>
            </div>
          </div>

          {/* Current College */}
          <div className=" bg-[#101423]  p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Current College Education</h3>
            <div className="mt-2 text-gray-300">
              <p>
                <span className="text-blue-400">College:</span> {educationData.currentCollege.name}
              </p>
              <p>
                <span className="text-blue-400">Course:</span> {educationData.currentCollege.course}
              </p>
              <p>
                <span className="text-blue-400">Current Year:</span> {educationData.currentCollege.currentYear}
              </p>
              <p>
                <span className="text-blue-400 font-medium">CGPA:</span>{" "}
                <span className="text-white font-medium">{educationData.currentCollege.cgpa}</span>
              </p>
            </div>
          </div>

          {/* Career Status */}
          <div className=" bg-[#101423]  p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-white">Career Status</h3>
            <div className="mt-2 text-gray-300">
              <p>
                <span className="text-blue-400 font-medium">Looking for:</span>{" "}
                <span className="text-white font-medium">{educationData.careerStatus.lookingFor}</span>
              </p>
              <p>
                <span className="text-blue-400">Interests:</span> {educationData.careerStatus.interests}
              </p>
              <p>
                <span className="text-blue-400">Availability:</span> {educationData.careerStatus.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
