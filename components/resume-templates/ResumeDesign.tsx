import React, { useEffect, useState } from 'react';

const ResumeDesign = ({ form }: any) => {

  const themeColor = form.getValues('theme');

  // Adding sticky class on scroll
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 150); // Trigger sticky behavior after 150px of scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{ borderColor: themeColor }} 
      className={`p-6 bg-white shadow-lg w-full border-t-8 border-t-red-500 min-h-[35rem] ${isSticky ? 'sticky top-0' : ''}`}
    >
      {/* Header Section */}
      <div className="text-center mt-8">
        <h1 style={{ color: themeColor }} className="text-2xl font-bold">
          {`${form.getValues('firstName')} ${form.getValues('lastName')}`}
        </h1>
        <p className="text-md font-semibold">{form.getValues('jobTitle')}</p>
        <p style={{ color: themeColor }} className="mt-1">{form.getValues('address')}</p>

        <div style={{ borderColor: themeColor }} className="flex justify-between mt-4 border-b-2 pb-2 text-sm">
          <p style={{ color: themeColor }} >{form.getValues('phone')}</p>
          <p style={{ color: themeColor }}>{form.getValues('email')}</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="py-4">
        <p className="text-start text-gray-700 italic">{form.getValues('summary')}</p>
      </div>

      {/* Professional Experience Section */}
      <div className="my-2">
        <h2 style={{ color: themeColor, borderColor: themeColor }} className="text-red-500 text-lg text-center border-b-2 pb-2 font-bold mb-4">
          Professional Experience
        </h2>
        <div>
          {form.getValues('professionalExperience')?.map((experience: any, index: number) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 style={{ color: themeColor }} className="text-lg font-bold text-red-500">
                  {experience.positionTitle}
                </h3>
                <span className="text-gray-600 text-xs">
                  {experience.startDate} to {experience.endDate}
                </span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                {experience.companyName}, {experience.city}, {experience.state}
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-2">
                {experience.summary?.split('\n').map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="my-2">
        <h2 style={{ color: themeColor, borderColor: themeColor }} className="text-red-500 text-lg text-center border-b-2 pb-2 font-bold mb-4">
          Education
        </h2>
        <div>
          {form.getValues('education')?.map((education: any, index: number) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 style={{ color: themeColor }} className="text-lg font-bold text-red-500">{education.universityName}</h3>
                <span className="text-gray-600 text-xs">
                  {education.startDate} - {education.endDate}
                </span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                {education.degree}, GPA: {education.percentage}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="my-2">
        <h2
          style={{ color: themeColor, borderColor: themeColor }}
          className="text-red-500 text-lg text-center border-b-2 pb-2 font-bold mb-4"
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 gap-x-10">
          {form.getValues('skills')?.map((skill: any, index: number) => (
            <div key={index} className="">
              <div className="grid grid-cols-2 items-center">
                <h3 style={{ color: themeColor }} className="text-sm font-bold text-red-500">
                  {skill.name}
                </h3>
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 h-2">
                  <div
                    style={{ width: `${skill.progress * 20}%`, backgroundColor: themeColor }}
                    className="h-full"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeDesign;
