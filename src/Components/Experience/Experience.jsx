import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";

const Experience = () => {
  // Function to handle certificate download
  const handleCertificateDownload = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/certificate.pdf'; // Path to PDF in public folder
    link.download = 'certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="Experience" className="p-6 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center md:justify-start md:w-2/5 gap-6 md:gap-8">
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaHtml5 color="#E34F26" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaCss3 color="#1572B6" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaReact color="#61DAFB" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaJs color="#F7DF1E" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaFigma color="#F24E1E" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <SiMongodb color="#47A248" size={40} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <SiRedis color="#FF4438" size={40} />
          </span>
        </div>

        {/* Internship Details */}
        <div className="w-full md:w-3/5">
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-50 rounded-lg p-6">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png"
              alt="CodeSoft Logo"
              className="w-32 h-16 object-contain self-center sm:self-start"
            />

            <div className="text-white flex-1">
              <h2 className="text-lg md:text-xl font-semibold">Frontend Developer, CodeSoft (1 Month, Remote)</h2>
              <ul className="text-sm md:text-base list-disc ml-5 mt-2 space-y-1">
                <li>Collaborated on real-time web development projects, enhancing functionality and design.</li>
                <li>Developed responsive and user-friendly UI components using HTML, CSS, and JavaScript.</li>
                <li>Gained practical experience in frontend development, problem-solving, and team collaboration.</li>
                <li>Participated in bug fixes and feature enhancements based on user feedback and reviews.</li>
              </ul>

              <div className="mt-5">
                <button
                  onClick={handleCertificateDownload}
                  className="inline-block text-base md:text-lg px-6 py-3 border-2 rounded-xl border-blue-50 bg-slate-600 hover:bg-slate-700 transition cursor-pointer"
                >
                  Completion Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;