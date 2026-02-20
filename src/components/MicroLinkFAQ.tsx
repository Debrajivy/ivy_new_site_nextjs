"use client"
import React, { useState } from 'react';
import { Course } from '@/lib/api';

interface LinkData {
  anchorText: string;
  hyperlink: string;
}

interface MicroLinkFAQProps {
  course: Course;
}

const linkData: LinkData[] = [
  { "anchorText": "data science course", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science classes", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course online", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science masters programs online", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "python data science course", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course with placement guarantee", "hyperlink": "https://ivyproschool.com/courses/no-upfront-fees-data-science-and-ml-course" },
  { "anchorText": "msc data science online", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science full course", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "online data science programs", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course fees", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course pune", "hyperlink": "Pune Micro Page" },
  { "anchorText": "data science course bangalore", "hyperlink": "Bangalore Micro Page" },
  { "anchorText": "data science course in mumbai", "hyperlink": "MumbaiMicro Page" },
  { "anchorText": "data science course in kerala", "hyperlink": "Kerala Micro Page" },
  { "anchorText": "data science course outline", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course certificate", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course in kolkata", "hyperlink": "Kolkata Micro Page" },
  { "anchorText": "data science course after 12th", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course with placement", "hyperlink": "https://ivyproschool.com/courses/no-upfront-fees-data-science-and-ml-course" },
  { "anchorText": "data science course in india", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course salary", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course python", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course noida", "hyperlink": "Noida Micro Page" },
  { "anchorText": "data science course for beginners", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course online", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science course gurgaon", "hyperlink": "Gurgaon Micro Page" },
  { "anchorText": "data science course details", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" },
  { "anchorText": "data science online classes", "hyperlink": "https://ivyproschool.com/courses/data-science-and-ml-course" }
];

const MicroLinkFAQ: React.FC<MicroLinkFAQProps> = ({ course }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const filteredLinkData = linkData.filter(data => !data.hyperlink.includes('Micro Page'));

  return (
    <div className="bg-[#121212] text-white font-sans p-6 w-full mx-auto rounded-none shadow-none md:p-12">
      <div className="border-b border-[#2a2a2a] pb-4 mb-4">
        <h2 className="text-xl font-bold">People Also Search For</h2>
      </div>
      <div className="bg-[#1e1e1e] p-4 rounded-md">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
          <h2 className="text-sm font-semibold">Courses</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        {isOpen && (
          <div className="mt-4 text-xs leading-relaxed">
            {filteredLinkData.map((data, index) => (
              <React.Fragment key={index}>
                <a
                  href={data.hyperlink}
                  className="text-[#6495ED] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.anchorText}
                </a>
                {index < filteredLinkData.length - 1 && ' | '}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MicroLinkFAQ;
