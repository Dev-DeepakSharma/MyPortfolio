import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">DEEPA SHARMA</h1>
              <p className="text-lg mt-2">Senior Customer Executive | Administrative Executive | IT Aspirant</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm">
              <p className="flex items-center mb-1">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                deepasharmgiee@gmail.com
              </p>
              <p className="flex items-center mb-1">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                7982808360
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dwarka Mor, New Delhi - 110059
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Career Objective */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">CAREER OBJECTIVE</h2>
            <p className="text-gray-700">
              I am <span className="font-semibold">Deepa Sharma</span>, an IT aspirant from Delhi with strong technical and analytical skills. I possess entry-level experience in <span className="font-semibold">Full Stack Web Development (MERN Stack)</span> and aspire to grow into a <span className="italic">Senior Developer role</span>. Skilled in React.js, Node.js, and MongoDB, I bring strong problem-solving abilities, efficient multitasking, and a fast-learning mindset. I am committed to contributing to innovative, high-quality web solutions while ensuring performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {/* Education */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">EDUCATION</h2>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Bachelor of Commerce (B.Com)</h3>
                  <p className="text-gray-600">Indira Gandhi National Open University (IGNOU)</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Senior Secondary (XII)</h3>
                  <p className="text-gray-600">CBSE Board, Delhi</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Secondary (X)</h3>
                  <p className="text-gray-600">CBSE Board, Delhi</p>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">TECHNICAL SKILLS</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>React.js, Node.js, MongoDB (MERN Stack Basics)</li>
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>MS Office (Word, Excel, PowerPoint)</li>
                  <li>Google Workspace (Docs, Sheets, Drive)</li>
                  <li>Email and Phone Communication Handling</li>
                  <li>Client Documentation and Data Management</li>
                </ul>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">INTERESTS</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Traveling</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Listening to Soft Music</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Exploring New Technologies</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Experience */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">EXPERIENCE</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-700">Amazon India Pvt. Ltd.</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">June 2022 – Present | 40 Months</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Senior Customer Specialist</p>
                  <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>Handled customer concerns and complaints efficiently</li>
                    <li>Addressed customer inquiries, resolved issues, and provided product and service information</li>
                    <li>Provided advisory and support services to ensure customer satisfaction</li>
                    <li>Conducted meetings and coordinated with internal teams for resolution and process improvement</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-700">Aim High Advice Services Pvt. Ltd.</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Jan 2021 – Apr 2022 | 15 Months</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Immigration Consultant</p>
                  <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>Reviewed client documents and prepared visa applications</li>
                    <li>Provided advisory and support services for immigration processes</li>
                    <li>Coordinated with clients and ensured timely application submissions</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-700">Nexus Financial Services (CA Firm)</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Nov 2019 – Dec 2020 | 14 Months</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Senior Executive</p>
                  <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>Provided financial advisory and client support services</li>
                    <li>Reviewed financial documents and prepared applications</li>
                    <li>Coordinated meetings and supported team operations to enhance productivity</li>
                  </ul>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">SOFT SKILLS</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Excellent Communication</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Team Collaboration</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Adaptability</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Quick Learning</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Time Management</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Organization</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Problem-Solving</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Decision-Making</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;