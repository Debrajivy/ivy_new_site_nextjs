import React from 'react';
import { Course } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Users, Award, Briefcase, Brain } from 'lucide-react';

interface CourseOverviewProps {
  course: Course;
}

const getAboutCourseTitle = (courseTitle: string) => {
  const knownTitles = [
    "Generative AI Course",
    "Data Science with Machine Learning & AI Certification",
    " Data Engineering Course",
    "Data Science with Machine Learning & AI Certification",
    "Data Analytics and Generative AI Course",
    "Data Analytics Course",
    "Data Analytics and Generative AI Course",
    "Cloud Data Engineering Course with IIT Guwahati",
    "AI for Product Managers"
  ];

  if (knownTitles.includes(courseTitle)) {
    return `What is ${courseTitle} and why should I learn it today?`;
  }

  return "What is Data Science with AI & ML and why should I learn it today?";
};

const getAboutWhatYouWillLearn = (whatYouWillLearn: string) => {
  const knownTitles = [
    "Generative AI Course",
    "Data Science with Machine Learning & AI Certification",
    " Data Engineering Course",
    "Data Science with Machine Learning & AI Certification",
    "Data Analytics and Generative AI Course",
    "Data Analytics Course",
    "Data Analytics and Generative AI Course",
    "Cloud Data Engineering Course with IIT Guwahati",
  ];

  if (knownTitles.includes(whatYouWillLearn)) {
    return `What will I learn in Ivy Pro School ${whatYouWillLearn} course?`;
  }

  return "What is Data Science with AI & ML and why should I learn it today?";
};

const CourseOverview = ({ course }: CourseOverviewProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginTop: 40 }}>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                What is{" "}
                {course.title !== "Data science course (Pay after Placement)"
                  ? (
                    <>
                      <span className="text-[#009fda]">{course.title}</span>{" "}
                      and why should I learn it today?
                    </>
                  )
                  : (
                    <>
                      <span className="text-[#009fda]">Data Science Course</span>{" "}
                      and why should I learn it today?
                    </>
                  )
                }
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {course.longDescription}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                What will I learn in Ivy Pro School{" "}
                {
                  course.title !== "Data science course (Pay after Placement)" ?
                    <span className="text-[#00a0da]">{course.title} course?</span> : <span className="text-[#00a0da]"> Data Science Course?</span>
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.outcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={18} style={{ color: '#009fda' }} className="text-ivy-purple mr-2 mt-1 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
          <Card>
  <CardContent className="p-6">
    <h3 className="font-bold text-lg mb-4">Who are the instructors for this course?</h3>
    <div className="space-y-6">
      {course.instructors?.map((instructor) => {
        const linkedInUrl =
          instructor.name === "Prateek Agrawal"
            ? "https://www.linkedin.com/in/prateekagrawal/"
            : instructor.name === "Eeshani Agrawal"
            ? "https://www.linkedin.com/in/eeshani-agrawal-b674045/"
            : "#";

        return (
          <a
            key={instructor.id}
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start mb-3 hover:bg-gray-50 rounded-lg p-2 transition"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <div className="font-semibold flex items-center">
                {instructor.name}
                {/* LinkedIn icon — now just a decorative image inside the same link */}
                {(instructor.name === "Prateek Agrawal" ||
                  instructor.name === "Eeshani Agrawal") && (
                  <img
                    alt="LinkedIn"
                    className="w-4 h-4 ml-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png?20210220164014"
                  />
                )}
                {instructor.isFounder && (
                  <span className="ml-2 text-xs bg-ivy-orange text-white px-2 py-0.5 rounded-full">
                    Founder
                  </span>
                )}
                {instructor.isDirector && (
                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    Director
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500">{instructor.role}</div>
            </div>
          </a>
        );
      })}
    </div>
  </CardContent>
</Card>



            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">What career opportunities can I expect after this course?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Briefcase size={25} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Hiring Partners</div>
                    <p className="text-sm text-gray-600"> 94% Placement Rate | 4-5 LPA avg salary | 17,000+ job openings in India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users size={20} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div style={{ marginLeft: 1 }} className="font-medium">Alumni Network</div>
                    <p className="text-sm text-gray-600">

                      Get&nbsp;


                      <a
                        href="https://ivyproschool.com/alumni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"

                      >
                        connected with alumni,{" "}

                      </a>

                      Join over&nbsp;

                      <a
                        href="https://chat.whatsapp.com/ImcpUAYaD87FVwce6ZMaYN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"
                      >

                        WhatsApp Student Community {" "}

                      </a>

                      and Lifetime&nbsp;


                      <a
                        href="https://youtu.be/HTTMGTCxd0Q?si=__QkZiVlXQM9t8A0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"
                      >

                        Placement Assistance

                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award size={30} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Industry Recognition</div>
                    <p className="text-sm text-gray-600">Fortune 500 hiring partners including Google, Microsoft, Accenture, IBM, Oracle, Cognizant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;