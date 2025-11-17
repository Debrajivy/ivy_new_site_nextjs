import React from 'react';
import { Course } from '@/lib/api';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Github, Activity, BarChart, GraduationCap, Award, PlayCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Crop from "../../assests/Crop.webp";
import FaceMask from "../../assests/FaceMask.webp";
import Nasscomcustomer from "../../assests/Nasscom-customer.webp";
import NasscomManufacturing from "../../assests/Me.webp";
import Ca from "../../assests/Ca.webp";
import Hs from "../../assests/Hs.webp";
import Cpa from "../../assests/cpa.webp";
import Ts from "../../assests/Ts.webp";
import oC from "../../assests/oC.webp";
import Ecommerce from "../../assests/Ecommerce.webp";
import Consumer from "../../assests/Consumer.webp";
import Msd from "../../assests/Msd.webp";
import Ki from "../../assests/Ki.webp";
import Ar from "../../assests/Ar.webp";
import Cb from "../../assests/Cb.webp";
import sp from "../../assests/sp.webp";
import me1 from "../../assests/me1.webp";
import AIC1 from "../../assests/AIC1.webp";
import AIC2 from "../../assests/AIC2.webp";
import Image from 'next/image';
interface CourseProjectsProps {
  course: Course;
}

const CourseProjects = ({ course }: CourseProjectsProps) => {
  if (!course.projects || course.projects.length === 0) {
    return null;
  }
  // Filter projects for practice (hands-on experience) vs. regular projects
  const practiceProjects = course.projects.filter(project => project.isPractice);
  const regularProjects = course.projects.filter(project => !project.isPractice);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What real-world projects will I work on during the course?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4">
            Build a professional portfolio with real-world projects designed in collaboration with industry experts.
            Apply your knowledge to solve actual business problems and showcase your skills to potential employers.
          </p>
        </div>

        <Tabs defaultValue="course-projects" className="max-w-5xl mx-auto">
          <TabsList
            className="flex w-full justify-center items-center overflow-x-auto pb-2 gap-4 no-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              padding: '0 16px', // Add horizontal padding if needed
            }}
          >
            {
              course.title != "AI for Product Managers" ?

                <TabsTrigger
                  value="course-projects"
                  className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
                >
                  <span className="inline sm:hidden">Showcase</span>
                  <span className="hidden sm:inline">Alumni Showcase</span>
                </TabsTrigger> : null

            }

            <TabsTrigger
              value="practice"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Practice</span>
              <span className="hidden sm:inline">Try Before Enrolling</span>
            </TabsTrigger>
            <TabsTrigger
              value="capstone"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Capstone</span>
              <span className="hidden sm:inline">Capstone Projects</span>
            </TabsTrigger>
          </TabsList>


          <TabsContent value="course-projects">
            {regularProjects.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-2 sm:gap-0">
                  <h3 className="text-2xl font-bold">Course Projects</h3>
                  <span className="sm:ml-3 bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full self-start sm:self-auto">
                    {regularProjects.length} projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {regularProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <Image
                          width={400}
                          height={200}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="pt-6 flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                          <h4 className="font-bold text-lg">{project.title}</h4>
                          <Badge
                            variant={project.difficulty === 'Beginner' ? 'secondary' :
                              project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                            className="self-start sm:self-auto"
                          >
                            {project.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, index) => (
                            <Badge variant="outline" key={index}>{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl p-0">
                            <div className="aspect-video w-full">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://youtube.com/embed/${project.videoId}`}
                                title="Project Demonstration"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-t-lg"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold">Project Demonstration</h3>
                              <p className="text-gray-600 mt-2">Watch how this project was implemented</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* <div className="mt-8 bg-primary/5 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Project-Based Learning Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BarChart size={18} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Portfolio Building</h5>
                        <p className="text-xs text-gray-600">Create impressive portfolio pieces to show future employers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <GraduationCap size={18} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Practical Experience</h5>
                        <p className="text-xs text-gray-600">Apply theoretical knowledge to real-world scenarios</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Award size={18} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">Industry Recognition</h5>
                        <p className="text-xs text-gray-600">Projects designed with input from industry experts</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </TabsContent>


          {
            course.title === "Data Science with Machine Learning & AI Certification" ?


              <TabsContent value="practice">
                {practiceProjects.length > 0 && (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
                      {/* <div className="bg-ivy-orange/10 rounded-full p-2 mr-0 sm:mr-3 self-start sm:self-auto">
                    <Play size={20} className="text-ivy-orange" />
                  </div> */}
                      <h3 className="text-2xl font-bold">Try Before Enroll</h3>
                    </div>Before

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {practiceProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                          <div className="h-48 overflow-hidden">
                            <Image
                              width={400}
                              height={200}
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="pt-6 flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                              <h4 className="font-bold text-lg">{project.title}</h4>
                              <Badge
                                variant={project.difficulty === 'Beginner' ? 'secondary' :
                                  project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                                className="self-start sm:self-auto"
                              >
                                {project.difficulty}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.skills.map((skill, index) => (
                                <Badge variant="outline" key={index}>{skill}</Badge>
                              ))}
                            </div>
                          </CardContent>
                          {/* <CardFooter>
                        <Button className="w-full">
                          Try This Project Now
                        </Button>
                      </CardFooter> */}

                          <CardFooter className="border-t pt-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="w-full">
                                  Try This Project Now
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl p-0">
                                <div className="aspect-video w-full">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://youtube.com/embed/${project.videoId}`}
                                    title="Project Demonstration"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-t-lg"
                                  />
                                </div>

                              </DialogContent>
                            </Dialog>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    {/* <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-700 mb-4">
                        Get a taste of our teaching methodology and project-based learning approach before committing to the full course.
                      </p>
                      <Button variant="outline">
                        Explore All Free Projects
                      </Button>
                    </div> */}
                  </div>
                )}
              </TabsContent>
              :
              <TabsContent value="practice">
                {practiceProjects.length > 0 && (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
                      {/* <div className="bg-ivy-orange/10 rounded-full p-2 mr-0 sm:mr-3 self-start sm:self-auto">
                    <Play size={20} className="text-ivy-orange" />
                  </div> */}
                      <h3 className="text-2xl font-bold">Try Before Enroll</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {practiceProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                          <div className="h-48 overflow-hidden">
                            <Image
                              width={400}
                              height={200}
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="pt-6 flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                              <h4 className="font-bold text-lg">{project.title}</h4>
                              <Badge
                                variant={project.difficulty === 'Beginner' ? 'secondary' :
                                  project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                                className="self-start sm:self-auto"
                              >
                                {project.difficulty}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.skills.map((skill, index) => (
                                <Badge variant="outline" key={index}>{skill}</Badge>
                              ))}
                            </div>
                          </CardContent>
                          {/* <CardFooter>
                        <Button className="w-full">
                          Try This Project Now
                        </Button>
                      </CardFooter> */}

                          <CardFooter className="border-t pt-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="w-full">
                                  Try This Project Now
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl p-0">
                                <div className="aspect-video w-full">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://youtube.com/embed/${project.videoId}`}
                                    title="Project Demonstration"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-t-lg"
                                  />
                                </div>

                              </DialogContent>
                            </Dialog>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-700 mb-4">
                        Get a taste of our teaching methodology and project-based learning approach before committing to the full course.
                      </p>
                      <Button variant="outline">
                        Explore All Free Projects
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>

          }





          {/* <TabsContent value="practice">
            {practiceProjects.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
                 
                  <h3 className="text-2xl font-bold">Try  You Enroll</h3>
                </div>Before

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {practiceProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="pt-6 flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                          <h4 className="font-bold text-lg">{project.title}</h4>
                          <Badge
                            variant={project.difficulty === 'Beginner' ? 'secondary' :
                              project.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                            className="self-start sm:self-auto"
                          >
                            {project.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, index) => (
                            <Badge variant="outline" key={index}>{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                   
                      <CardFooter className="border-t pt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full">
                              Try This Project Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl p-0">
                            <div className="aspect-video w-full">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://youtube.com/embed/${project.videoId}`}
                                title="Project Demonstration"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-t-lg"
                              />
                            </div>

                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-700 mb-4">
                    Get a taste of our teaching methodology and project-based learning approach before committing to the full course.
                  </p>
                  <Button variant="outline">
                    Explore All Free Projects
                  </Button>
                </div>
              </div>
            )}
          </TabsContent> */}




          {
            course.title === "Data Science with Machine Learning & AI Certification" ?

              <TabsContent value="capstone">
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                    <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                  </div>
                  <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                    Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                    These projects are often featured on resumes and serve as excellent talking points during job interviews.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Image Container - Responsive Solution */}
                      <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          width={400}
                          height={200}
                          src={sp}
                          alt="Hate Speech Detection Using Machine Learning"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <CardContent className="pt-6 flex-grow">
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <h4 className="font-bold text-lg leading-snug">
                            Sales Pipeline Performance Tracker using Excel
                          </h4>
                          <Badge className="shrink-0">Beginner to Intermediate</Badge>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          Create an interactive Sales Pipeline Tracker in Excel. Learn to calculate conversion rates, expected values, and build dynamic dashboards using formulas, PivotTables, and data validation.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {['PivotTables', 'PivotCharts', 'Data Validation', 'Conditional Formatting', 'Formulas'].map((skill, index) => (
                            <Badge variant="outline" key={index}>{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="border-t pt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                            <div className="h-[80vh] w-full px-10 py-2 bg-white">
                              <iframe
                                src="https://drive.google.com/file/d/1EAcilhKH2g_QBD1erdsIXHgloYcief6z/preview"
                                width="100%"
                                height="100%"
                                title="Project Details PDF"
                                className="border-0"
                                allow="autoplay"
                              />
                            </div>
                            <div className="p-4 border-t flex justify-end">
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                              >
                                <a
                                  href="https://drive.google.com/file/d/1EAcilhKH2g_QBD1erdsIXHgloYcief6z/view"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>


                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Image Container - Responsive Solution */}
                      <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          width={400}
                          height={200}
                          src={me1}
                          alt="Hate Speech Detection Using Machine Learning"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <CardContent className="pt-6 flex-grow">
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <h4 className="font-bold text-lg leading-snug">
                            Manufacturing Efficiency Analysis Using Power BI
                          </h4>
                          <Badge className="shrink-0">Intermediate to Advanced</Badge>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          Design a Power BI dashboard to monitor production performance across factories. Use DAX formulas, time intelligence, and dynamic visuals to uncover trends and compare factory efficiencies.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {['DAX Formulas', 'Time Intelligence', 'Trend Visualization', 'Data Modeling', 'Power BIIterator Functions'].map((skill, index) => (
                            <Badge variant="outline" key={index}>{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="border-t pt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">
                              View Project Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                            <div className="h-[80vh] w-full px-10 py-2 bg-white">
                              <iframe
                                src="https://drive.google.com/file/d/1peuWpE0b0UoJlDRWiNgqh-piwd1xkpuL/preview"
                                width="100%"
                                height="100%"
                                title="Project Details PDF"
                                className="border-0"
                                allow="autoplay"
                              />
                            </div>
                            <div className="p-4 border-t flex justify-end">
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                              >
                                <a
                                  href="https://drive.google.com/file/d/1peuWpE0b0UoJlDRWiNgqh-piwd1xkpuL/view"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                                >
                                  Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>

                  </div>
                </div>
                {/* ... rest of your code remains the same ... */}
              </TabsContent>

              :

              course.title === "Data Science with Machine Learning & AI Certification" ?

                <TabsContent value="capstone">
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                      <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                    </div>
                    <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                      Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                      These projects are often featured on resumes and serve as excellent talking points during job interviews.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                        <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                          <Image
                            width={400}
                            height={200}
                            src={Hs}
                            alt="Healthcare ML Project"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-3 gap-2">
                            <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                              Hate Speech Detection Using Machine Learning                          </h4>
                            <Badge className="shrink-0">Intermediate</Badge>
                          </div>


                          <p className="text-gray-600 text-sm mb-4">
                            Learn to build a machine learning model to detect hate speech in text. Explore data preprocessing, feature extraction, and train models like Logistic Regression and Naive Bayes for text classification
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {['Machine Learning', 'NLP', 'Hate Speech Detection', 'Text Classification', 'Python', 'Scikit-learn'].map((skill, index) => (
                              <Badge variant="outline" key={index}>{skill}</Badge>
                            ))}
                          </div>


                          <CardFooter className="border-t pt-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="w-full">
                                  View Project Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                  <iframe
                                    src="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/preview"
                                    width="100%"
                                    height="100%"
                                    title="Project Details PDF"
                                    className="border-0"
                                    allow="autoplay"
                                  />
                                </div>
                                <div className="p-4 border-t flex justify-end">
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                  >
                                    <a
                                      href="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/view"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center"
                                    >
                                      Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardFooter>

                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                        <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                          <Image
                            width={400}
                            height={200}
                            src={Cpa}
                            alt="Financial ML Project"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-6">
                          {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                      <h4 className="font-bold text-lg">Crop Yield Prediction using Machine Learning</h4>
                      <Badge className="self-start sm:self-auto">Industry Partner</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      In this project, you will take on the role of a Data Scientist for AgroGrow Co., an agricultural innovation company helping farmers and policymakers make smarter crop-related decisions. You’ll use climate, geographic, and agricultural input data to predict crop yields, enabling stakeholders to optimize farming practices, plan for resource allocation, and adapt to climate risks.

                    </p> */}
                          <div className="flex justify-between items-start mb-3 gap-2">
                            <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                              Customer Personality Analysis for Targeted Marketing
                            </h4>
                            <Badge className="shrink-0">Intermediate</Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            Analyzing customer demographics, purchase history, and responses to marketing campaigns, the company can create tailored marketing strategies and product offerings. Focuses on segmenting a retail company’s customer base using clustering techniques.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {['K-means Clustering', 'Marketing Strategy', 'Exploratory Data Analysis', 'Data Preprocessing', 'XGBoost', 'Feature Engineering'].map((skill, index) => (
                              <Badge variant="outline" key={index}>{skill}</Badge>
                            ))}
                          </div>
                          <CardFooter className="border-t pt-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="w-full">
                                  View Project Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                  <iframe
                                    src="https://drive.google.com/file/d/1Ua--4i9rMbuSYZ2qj5y1AE3bc-rzOyj7/preview"
                                    width="100%"
                                    height="100%"
                                    title="Project Details PDF"
                                    className="border-0"
                                    allow="autoplay"
                                  />
                                </div>
                                <div className="p-4 border-t flex justify-end">
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                  >
                                    <a
                                      href="https://drive.google.com/file/d/1Ua--4i9rMbuSYZ2qj5y1AE3bc-rzOyj7/view"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center"
                                    >
                                      Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardFooter>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-12 sm:mt-16">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                      <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                        Ivy Professional School has incubated and supported several successful AI startups.
                        Our students get exposure to cutting-edge projects similar to these.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                          <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              Visit <ExternalLink size={14} className="ml-2" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                          <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              Visit <ExternalLink size={14} className="ml-2" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                          <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              Visit <ExternalLink size={14} className="ml-2" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                :

                course.title === "Generative AI Course" ?

                  <TabsContent value="capstone">
                    <div className="mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                        <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                      </div>
                      <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                        Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                        These projects are often featured on resumes and serve as excellent talking points during job interviews.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image
                              width={400}
                              height={200}
                              src={Hs}
                              alt="Healthcare ML Project"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-3 gap-2">
                              <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                Real-Time Face Mask Detection using Deep Learning                         </h4>
                              <Badge className="shrink-0">Advanced</Badge>
                            </div>


                            <p className="text-gray-600 text-sm mb-4">
                              Create a real-time face mask detection system using TensorFlow and Keras with pre-trained models like MobileNetV2 and ResNet50. Deploy the model in a Streamlit app for real-time video analysis.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {['TensorFlow', 'Keras', 'OpenCV', 'MobileNetV2', 'ResNet50', 'Streamlit'].map((skill, index) => (
                                <Badge variant="outline" key={index}>{skill}</Badge>
                              ))}
                            </div>


                            <CardFooter className="border-t pt-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="w-full">
                                    View Project Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                  <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                    <iframe
                                      src="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/preview"
                                      width="100%"
                                      height="100%"
                                      title="Project Details PDF"
                                      className="border-0"
                                      allow="autoplay"
                                    />
                                  </div>
                                  <div className="p-4 border-t flex justify-end">
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="sm"
                                    >
                                      <a
                                        href="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                      >
                                        Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </CardFooter>

                          </CardContent>
                        </Card>

                        <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image
                              width={400}
                              height={200}
                              src={Cpa}
                              alt="Financial ML Project"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="pt-6">
                            {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                      <h4 className="font-bold text-lg">Crop Yield Prediction using Machine Learning</h4>
                      <Badge className="self-start sm:self-auto">Industry Partner</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      In this project, you will take on the role of a Data Scientist for AgroGrow Co., an agricultural innovation company helping farmers and policymakers make smarter crop-related decisions. You’ll use climate, geographic, and agricultural input data to predict crop yields, enabling stakeholders to optimize farming practices, plan for resource allocation, and adapt to climate risks.

                    </p> */}
                            <div className="flex justify-between items-start mb-3 gap-2">
                              <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                Crop Yield Prediction using Machine Learning
                              </h4>
                              <Badge className="shrink-0">Intermediate</Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              Predict crop yield using machine learning models such as XGBoost, Linear Regression, and Random Forest, based on historical and environmental data. Deploy results in a Streamlit app for easy visualization.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {['XGBoost', 'Linear Regression', 'Random Forest', 'OpenCV', 'Streamlit'].map((skill, index) => (
                                <Badge variant="outline" key={index}>{skill}</Badge>
                              ))}
                            </div>
                            <CardFooter className="border-t pt-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="w-full">
                                    View Project Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                  <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                    <iframe
                                      src="https://drive.google.com/file/d/1Ua--4i9rMbuSYZ2qj5y1AE3bc-rzOyj7/preview"
                                      width="100%"
                                      height="100%"
                                      title="Project Details PDF"
                                      className="border-0"
                                      allow="autoplay"
                                    />
                                  </div>
                                  <div className="p-4 border-t flex justify-end">
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="sm"
                                    >
                                      <a
                                        href="https://drive.google.com/file/d/1Ua--4i9rMbuSYZ2qj5y1AE3bc-rzOyj7/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                      >
                                        Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </CardFooter>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="mt-12 sm:mt-16">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                        <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                          Ivy Professional School has incubated and supported several successful AI startups.
                          Our students get exposure to cutting-edge projects similar to these.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                            <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                Visit <ExternalLink size={14} className="ml-2" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                            <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                Visit <ExternalLink size={14} className="ml-2" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                            <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                Visit <ExternalLink size={14} className="ml-2" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  :

                  course.title === "Data Analytics and Generative AI Course" ?
                    <TabsContent value="capstone">
                      <div className="mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                          <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                        </div>
                        <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                          Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                          These projects are often featured on resumes and serve as excellent talking points during job interviews.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                          <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                              <Image
                                width={400}
                                height={200}
                                src={Ts}
                                alt="Healthcare ML Project"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardContent className="pt-6">
                              <div className="flex justify-between items-start mb-3 gap-2">
                                <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                  Tourism Analytics Dashboard using Tableau                       </h4>
                                <Badge className="shrink-0">Intermediate</Badge>
                              </div>


                              <p className="text-gray-600 text-sm mb-4">
                                Design an interactive Tableau dashboard to help users find the best summer destinations based on their preferences. Use filters, ranking logic, and geospatial data visualization.                                                       </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {['Parameter Integration', 'Category-based Ranking', 'Weather Visualization '].map((skill, index) => (
                                  <Badge variant="outline" key={index}>{skill}</Badge>
                                ))}
                              </div>


                              <CardFooter className="border-t pt-4">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="w-full">
                                      View Project Details
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                    <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                      <iframe
                                        src="https://drive.google.com/file/d/1QZBxpeIL0qDaAwz06mjEf8y4vHAYQxbF/preview"
                                        width="100%"
                                        height="100%"
                                        title="Project Details PDF"
                                        className="border-0"
                                        allow="autoplay"
                                      />
                                    </div>
                                    <div className="p-4 border-t flex justify-end">
                                      <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                      >
                                        <a
                                          href="https://drive.google.com/file/d/1QZBxpeIL0qDaAwz06mjEf8y4vHAYQxbF/view"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center"
                                        >
                                          Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </CardFooter>

                            </CardContent>
                          </Card>

                          <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                              <Image
                                width={400}
                                height={200}
                                src={oC}
                                alt="Financial ML Project"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardContent className="pt-6">
                              {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                      <h4 className="font-bold text-lg">Crop Yield Prediction using Machine Learning</h4>
                      <Badge className="self-start sm:self-auto">Industry Partner</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      In this project, you will take on the role of a Data Scientist for AgroGrow Co., an agricultural innovation company helping farmers and policymakers make smarter crop-related decisions. You’ll use climate, geographic, and agricultural input data to predict crop yields, enabling stakeholders to optimize farming practices, plan for resource allocation, and adapt to climate risks.

                    </p> */}
                              <div className="flex justify-between items-start mb-3 gap-2">
                                <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                  Ola Cabs Case Study using SQL
                                </h4>
                                <Badge className="shrink-0">Intermediate</Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-4">
                                Analyze ride-hailing data with SQL to uncover insights into booking patterns, driver performance, revenue metrics, and peak-hour trends for better fleet and resource planning                                 </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {['SQL Views', 'CTEs', 'JOINs', 'SQL ', 'Window Functions', 'Revenue Analysis', 'Booking Segmentation', 'Performance Benchmarking'].map((skill, index) => (
                                  <Badge variant="outline" key={index}>{skill}</Badge>
                                ))}
                              </div>
                              <CardFooter className="border-t pt-4">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="w-full">
                                      View Project Details
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                    <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                      <iframe
                                        src="https://drive.google.com/file/d/1fHrfNm_pKrkUmAE3D07kciR8jeHgwQEp/preview"
                                        width="100%"
                                        height="100%"
                                        title="Project Details PDF"
                                        className="border-0"
                                        allow="autoplay"
                                      />
                                    </div>
                                    <div className="p-4 border-t flex justify-end">
                                      <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                      >
                                        <a
                                          href="https://drive.google.com/file/d/1fHrfNm_pKrkUmAE3D07kciR8jeHgwQEp/view"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center"
                                        >
                                          Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </CardFooter>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div className="mt-12 sm:mt-16">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                          <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                            Ivy Professional School has incubated and supported several successful AI startups.
                            Our students get exposure to cutting-edge projects similar to these.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                              <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                  Visit <ExternalLink size={14} className="ml-2" />
                                </a>
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                              <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                  Visit <ExternalLink size={14} className="ml-2" />
                                </a>
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                              <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                              <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                  Visit <ExternalLink size={14} className="ml-2" />
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                    :
                    course.title === "Data Analytics Course" ?
                      <TabsContent value="capstone">
                        <div className="mb-8">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                            <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                          </div>
                          <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                            Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                            These projects are often featured on resumes and serve as excellent talking points during job interviews.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                <Image
                                  width={400}
                                  height={200}
                                  src={Ecommerce}
                                  alt="Healthcare ML Project"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardContent className="pt-6">
                                <div className="flex justify-between items-start mb-3 gap-2">
                                  <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                    E-commerce Sales and Customer Insights Using Power BI
                                  </h4>
                                  <Badge className="shrink-0">Intermediate</Badge>
                                </div>


                                <p className="text-gray-600 text-sm mb-4">
                                  Analyze sales and customer data using Power BI and DAX functions. Build dashboards to uncover top-selling products, customer retention trends, and optimize revenue.                                                            </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {['DAX', 'Data Modeling', 'Customer Segmentation', 'Revenue Analysis', 'Time Analysis'].map((skill, index) => (
                                    <Badge variant="outline" key={index}>{skill}</Badge>
                                  ))}
                                </div>


                                <CardFooter className="border-t pt-4">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="outline" size="sm" className="w-full">
                                        View Project Details
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                      <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                        <iframe
                                          src="https://drive.google.com/file/d/1Q2I6TWbzLWZa0VNzCBqJGUNQGcSFjxL0/preview"
                                          width="100%"
                                          height="100%"
                                          title="Project Details PDF"
                                          className="border-0"
                                          allow="autoplay"
                                        />
                                      </div>
                                      <div className="p-4 border-t flex justify-end">
                                        <Button
                                          asChild
                                          variant="outline"
                                          size="sm"
                                        >
                                          <a
                                            href="https://drive.google.com/file/d/1Q2I6TWbzLWZa0VNzCBqJGUNQGcSFjxL0/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                          >
                                            Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                          </a>
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </CardFooter>

                              </CardContent>
                            </Card>

                            <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                <Image
                                  width={400}
                                  height={200}
                                  src={Consumer}
                                  alt="Financial ML Project"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardContent className="pt-6">

                                <div className="flex justify-between items-start mb-3 gap-2">
                                  <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                    Consumer Price Index Forecasting using Time Series Modeling
                                  </h4>
                                  <Badge className="shrink-0">Intermediate to Advanced</Badge>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                  Forecast the Consumer Price Index (CPI) using ARIMA/SARIMA models. Analyze historical data and apply time series forecasting techniques to predict inflation trends.                                                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {['Statsmodels', 'ARIMA', 'SARIMA', 'Time Series Forecasting ', 'Forecasting'].map((skill, index) => (
                                    <Badge variant="outline" key={index}>{skill}</Badge>
                                  ))}
                                </div>
                                <CardFooter className="border-t pt-4">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="outline" size="sm" className="w-full">
                                        View Project Details
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                      <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                        <iframe
                                          src="https://drive.google.com/file/d/1ydk8qz_PWXZtEePYLZcxnVfDkiUK9wY1/preview"
                                          width="100%"
                                          height="100%"
                                          title="Project Details PDF"
                                          className="border-0"
                                          allow="autoplay"
                                        />
                                      </div>
                                      <div className="p-4 border-t flex justify-end">
                                        <Button
                                          asChild
                                          variant="outline"
                                          size="sm"
                                        >
                                          <a
                                            href="https://drive.google.com/file/d/1ydk8qz_PWXZtEePYLZcxnVfDkiUK9wY1/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                          >
                                            Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                          </a>
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </CardFooter>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="mt-12 sm:mt-16">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                            <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                              Ivy Professional School has incubated and supported several successful AI startups.
                              Our students get exposure to cutting-edge projects similar to these.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                            <Card>
                              <CardContent className="pt-6">
                                <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                                <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                  <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    Visit <ExternalLink size={14} className="ml-2" />
                                  </a>
                                </Button>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardContent className="pt-6">
                                <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                                <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                  <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    Visit <ExternalLink size={14} className="ml-2" />
                                  </a>
                                </Button>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardContent className="pt-6">
                                <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                                <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                  <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    Visit <ExternalLink size={14} className="ml-2" />
                                  </a>
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </TabsContent>
                      :
                      course.title === "Data Analytics and Generative AI Course" ?
                        <TabsContent value="capstone">
                          <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                              <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                            </div>
                            <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                              Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                              These projects are often featured on resumes and serve as excellent talking points during job interviews.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                              <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                  <Image
                                    width={400}
                                    height={200}
                                    src={Msd}
                                    alt="Healthcare ML Project"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <CardContent className="pt-6">
                                  <div className="flex justify-between items-start mb-3 gap-2">
                                    <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                      Master SQL Data Analysis for Business Insights                                    </h4>
                                    <Badge className="shrink-0">Intermediate</Badge>
                                  </div>


                                  <p className="text-gray-600 text-sm mb-4">
                                    Analyze two datasets to uncover missing records, sum quantities, and determine unique entries. Learn advanced SQL techniques such as joins, unions, and aggregation to enhance your data analysis skills and optimize SQL queries for business intelligence.                                                                                </p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {['SQL', 'Data Analysis', 'SQL Joins', 'SQL Aggregation', 'Business Intelligence'].map((skill, index) => (
                                      <Badge variant="outline" key={index}>{skill}</Badge>
                                    ))}
                                  </div>


                                  <CardFooter className="border-t pt-4">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" className="w-full">
                                          View Project Details
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                        <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                          <iframe
                                            src="https://drive.google.com/file/d/13FiPQILZvxRs_Fgm6kAos6KxIBwMq_xv/preview"
                                            width="100%"
                                            height="100%"
                                            title="Project Details PDF"
                                            className="border-0"
                                            allow="autoplay"
                                          />
                                        </div>
                                        <div className="p-4 border-t flex justify-end">
                                          <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                          >
                                            <a
                                              href="https://drive.google.com/file/d/13FiPQILZvxRs_Fgm6kAos6KxIBwMq_xv/view"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center"
                                            >
                                              Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                            </a>
                                          </Button>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  </CardFooter>

                                </CardContent>
                              </Card>

                              <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                  <Image
                                    width={400}
                                    height={200}
                                    src={Ki}
                                    alt="Financial ML Project"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <CardContent className="pt-6">

                                  <div className="flex justify-between items-start mb-3 gap-2">
                                    <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                      Kofluence Influencer Marketing Dashboard                                    </h4>
                                    <Badge className="shrink-0">Intermediate to Advanced</Badge>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-4">
                                    As a Business Analyst at Kofluence, create an automated Excel dashboard to evaluate the effectiveness of micro-influencers in a Zyntra campaign. Track key metrics like engagement rate, reach, and conversions. Compare influencer performance and generate insights to optimize future campaigns.                                                                                        </p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {['Dashboard', 'Business Analytics', 'KPI Analysis', 'Data Visualization '].map((skill, index) => (
                                      <Badge variant="outline" key={index}>{skill}</Badge>
                                    ))}
                                  </div>
                                  <CardFooter className="border-t pt-4">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="outline" size="sm" className="w-full">
                                          View Project Details
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                        <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                          <iframe
                                            src="https://drive.google.com/file/d/1nR1y2gCIrJ41uo_5KUvYzcEmXrwmiuGh/preview"
                                            width="100%"
                                            height="100%"
                                            title="Project Details PDF"
                                            className="border-0"
                                            allow="autoplay"
                                          />
                                        </div>
                                        <div className="p-4 border-t flex justify-end">
                                          <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                          >
                                            <a
                                              href="https://drive.google.com/file/d/1nR1y2gCIrJ41uo_5KUvYzcEmXrwmiuGh/view"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center"
                                            >
                                              Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                            </a>
                                          </Button>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  </CardFooter>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div className="mt-12 sm:mt-16">
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                              <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                                Ivy Professional School has incubated and supported several successful AI startups.
                                Our students get exposure to cutting-edge projects similar to these.
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                              <Card>
                                <CardContent className="pt-6">
                                  <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                                  <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                                  <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      Visit <ExternalLink size={14} className="ml-2" />
                                    </a>
                                  </Button>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="pt-6">
                                  <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                                  <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                                  <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      Visit <ExternalLink size={14} className="ml-2" />
                                    </a>
                                  </Button>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="pt-6">
                                  <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                                  <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                                  <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                      Visit <ExternalLink size={14} className="ml-2" />
                                    </a>
                                  </Button>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </TabsContent>
                        :
                        course.title === " Data Engineering Course" || course.title === "Cloud Data Engineering Course with IIT Guwahati" ?
                          <TabsContent value="capstone">
                            <div className="mb-8">
                              <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                                <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                              </div>
                              <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                                Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                                These projects are often featured on resumes and serve as excellent talking points during job interviews.
                              </p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                  <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                    <Image
                                      width={400}
                                      height={200}
                                      src={Ar}
                                      alt="Healthcare ML Project"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <CardContent className="pt-6">
                                    <div className="flex justify-between items-start mb-3 gap-2">
                                      <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                        Automated Retail Sales ETL Pipeline Using Azure Data Factory                                     </h4>
                                      <Badge className="shrink-0">Intermediate</Badge>
                                    </div>


                                    <p className="text-gray-600 text-sm mb-4">
                                      You are a Data Engineer tasked with automating the daily ETL pipeline for a retail
                                      chain. Sales data is generated daily across store locations and must be cleaned,
                                      transformed, and stored in Azure for downstream reporting and analytics. The
                                      pipeline needs to run automatically, ensure data accuracy, and support fast querying
                                      through optimized storage.                                          </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                      {['Azure Blob Storage', 'Azure Data Factory (ADF)', 'Parquet Format', 'CSV (raw input format)'].map((skill, index) => (
                                        <Badge variant="outline" key={index}>{skill}</Badge>
                                      ))}
                                    </div>


                                    <CardFooter className="border-t pt-4">
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button variant="outline" size="sm" className="w-full">
                                            View Project Details
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                          <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                            <iframe
                                              src="https://drive.google.com/file/d/1gu8h-FMUh18CfcsCKIwPPu3t9kFQS_A7/preview"
                                              width="100%"
                                              height="100%"
                                              title="Project Details PDF"
                                              className="border-0"
                                              allow="autoplay"
                                            />
                                          </div>
                                          <div className="p-4 border-t flex justify-end">
                                            <Button
                                              asChild
                                              variant="outline"
                                              size="sm"
                                            >
                                              <a
                                                href="https://drive.google.com/file/d/1gu8h-FMUh18CfcsCKIwPPu3t9kFQS_A7/view"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                              >
                                                Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                              </a>
                                            </Button>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    </CardFooter>

                                  </CardContent>
                                </Card>

                                <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                  <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                    <Image
                                      width={400}
                                      height={200}
                                      src={Cb}
                                      alt="Financial ML Project"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <CardContent className="pt-6">

                                    <div className="flex justify-between items-start mb-3 gap-2">
                                      <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                        Customer Behavior Analysis for a Grocery Store Using PySpark & SQL                                               </h4>
                                      <Badge className="shrink-0">Intermediate to Advanced</Badge>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                      You are acting as a Data Engineer for RetailMart, a newly launched grocery store
                                      founded by Sarah, an ambitious entrepreneur. With increasing footfall and purchase
                                      data, Sarah wants to move beyond gut-feel decisions and start leveraging data for
                                      actionable insights. She has collected structured data related to sales, inventory, and
                                      members and seeks your expertise to understand shopping patterns, top-selling
                                      products, and opportunities to enhance customer loyalty.                                                                                               </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                      {['PySpark (Spark SQL, DataFrame API)', 'SQL', 'Google Colab / Databricks / Jupyter Notebook with Spark integration', 'Seaborn/Matplotlib (for visualizations, optional)'].map((skill, index) => (
                                        <Badge variant="outline" key={index}>{skill}</Badge>
                                      ))}
                                    </div>
                                    <CardFooter className="border-t pt-4">
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button variant="outline" size="sm" className="w-full">
                                            View Project Details
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                          <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                            <iframe
                                              src="https://drive.google.com/file/d/1iPYtD0nAMZ102nONnxwzN8SZ1Ej97gNS/preview"
                                              width="100%"
                                              height="100%"
                                              title="Project Details PDF"
                                              className="border-0"
                                              allow="autoplay"
                                            />
                                          </div>
                                          <div className="p-4 border-t flex justify-end">
                                            <Button
                                              asChild
                                              variant="outline"
                                              size="sm"
                                            >
                                              <a
                                                href="https://drive.google.com/file/d/1iPYtD0nAMZ102nONnxwzN8SZ1Ej97gNS/view"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                              >
                                                Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                              </a>
                                            </Button>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    </CardFooter>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>

                            <div className="mt-12 sm:mt-16">
                              <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                                <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                                  Ivy Professional School has incubated and supported several successful AI startups.
                                  Our students get exposure to cutting-edge projects similar to these.
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                                <Card>
                                  <CardContent className="pt-6">
                                    <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                                    <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                      <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        Visit <ExternalLink size={14} className="ml-2" />
                                      </a>
                                    </Button>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardContent className="pt-6">
                                    <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                                    <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                      <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        Visit <ExternalLink size={14} className="ml-2" />
                                      </a>
                                    </Button>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardContent className="pt-6">
                                    <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                                    <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                      <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        Visit <ExternalLink size={14} className="ml-2" />
                                      </a>
                                    </Button>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </TabsContent>
                          :
                          course.title === "AI for Product Managers" ?


                            <TabsContent value="capstone">
                              <div className="mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                                  <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                                </div>
                                <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                                  Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                                  These projects are often featured on resumes and serve as excellent talking points during job interviews.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                      <Image
                                        width={400}
                                        height={200}
                                        src={AIC1}
                                        alt="Healthcare ML Project"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <CardContent className="pt-6">
                                      <div className="flex justify-between items-start mb-3 gap-2">
                                        <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                          AI-Powered Knowledge Assistant                               </h4>
                                        <Badge className="shrink-0">Intermediate</Badge>
                                      </div>


                                      <p className="text-gray-600 text-sm mb-4">
                                        In this project, you will act as a Product Manager working with AI Engineers to design and prototype an AI
                                        assistant that answers employee questions using internal company documents (policies, HR guidelines,
                                        compliance manuals). You will apply the Retrieval-Augmented Generation (RAG) framework to reduce
                                        hallucinations and ensure trusted responses.
                                      </p>
                                      <div className="flex flex-wrap gap-2 mb-4">
                                        {['Rag Pipeline', 'LangChain', 'Flowise', 'Prompt'].map((skill, index) => (
                                          <Badge variant="outline" key={index}>{skill}</Badge>
                                        ))}
                                      </div>


                                      <CardFooter className="border-t pt-4">
                                        <Dialog>
                                          <DialogTrigger asChild>
                                            <Button variant="outline" size="sm" className="w-full">
                                              View Project Details
                                            </Button>
                                          </DialogTrigger>
                                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                            <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                              <iframe
                                                src="https://drive.google.com/file/d/1oLcxVDOS9TcAnckcj53G0ETZlbGdZZaN/preview"
                                                width="100%"
                                                height="100%"
                                                title="Project Details PDF"
                                                className="border-0"
                                                allow="autoplay"
                                              />
                                            </div>
                                            <div className="p-4 border-t flex justify-end">
                                              <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                              >
                                                <a
                                                  href="https://drive.google.com/file/d/1oLcxVDOS9TcAnckcj53G0ETZlbGdZZaN/view"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="flex items-center"
                                                >
                                                  Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                              </Button>
                                            </div>
                                          </DialogContent>
                                        </Dialog>
                                      </CardFooter>

                                    </CardContent>
                                  </Card>

                                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                      <Image
                                        width={400}
                                        height={200}
                                        src={AIC2}
                                        alt="Financial ML Project"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <CardContent className="pt-6">

                                      <div className="flex justify-between items-start mb-3 gap-2">
                                        <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                          AI-Powered Product Feedback Synthesizer
                                        </h4>
                                        <Badge className="shrink-0">Intermediate to Advanced</Badge>
                                      </div>
                                      <p className="text-gray-600 text-sm mb-4">
                                        In this project, you will act as a Product Manager leveraging AI to analyze large volumes of customer
                                        reviews and survey responses. You will use prompt workflows and no-code prototyping tools to
                                        automatically cluster feedback, summarize insights, and generate prioritized feature requests for the
                                        roadmap.                                                </p>
                                      <div className="flex flex-wrap gap-2 mb-4">
                                        {['Prompt Layers', 'Streamlit', 'Prompt Engineering', ' AI Agents'].map((skill, index) => (
                                          <Badge variant="outline" key={index}>{skill}</Badge>
                                        ))}
                                      </div>
                                      <CardFooter className="border-t pt-4">
                                        <Dialog>
                                          <DialogTrigger asChild>
                                            <Button variant="outline" size="sm" className="w-full">
                                              View Project Details
                                            </Button>
                                          </DialogTrigger>
                                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                            <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                              <iframe
                                                src="https://drive.google.com/file/d/1oVlMdxMgHEZ2iHmQHkmKAxribSxe5Klb/preview"
                                                width="100%"
                                                height="100%"
                                                title="Project Details PDF"
                                                className="border-0"
                                                allow="autoplay"
                                              />
                                            </div>
                                            <div className="p-4 border-t flex justify-end">
                                              <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                              >
                                                <a
                                                  href="https://drive.google.com/file/d/1oVlMdxMgHEZ2iHmQHkmKAxribSxe5Klb/view"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="flex items-center"
                                                >
                                                  Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                              </Button>
                                            </div>
                                          </DialogContent>
                                        </Dialog>
                                      </CardFooter>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>

                              <div className="mt-12 sm:mt-16">
                                <div className="mb-6">
                                  <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                                  <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                                    Ivy Professional School has incubated and supported several successful AI startups.
                                    Our students get exposure to cutting-edge projects similar to these.
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                                  <Card>
                                    <CardContent className="pt-6">
                                      <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                                      <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                                      <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                          Visit <ExternalLink size={14} className="ml-2" />
                                        </a>
                                      </Button>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardContent className="pt-6">
                                      <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                                      <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                                      <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                          Visit <ExternalLink size={14} className="ml-2" />
                                        </a>
                                      </Button>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardContent className="pt-6">
                                      <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                                      <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                                      <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                          Visit <ExternalLink size={14} className="ml-2" />
                                        </a>
                                      </Button>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </TabsContent>
                            :





                            course.title === "AI and Machine Learning Course" ?
                              <TabsContent value="capstone">
                                <div className="mb-8">
                                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-0">
                                    <h3 className="text-2xl font-bold">Industry Capstone Projects</h3>
                                  </div>
                                  <p className="text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
                                    Every student completes a comprehensive capstone project working with real data and business problems from our industry partners.
                                    These projects are often featured on resumes and serve as excellent talking points during job interviews.
                                  </p>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <Image
                                          width={400}
                                          height={200}
                                          src={Hs}
                                          alt="Healthcare ML Project"
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <CardContent className="pt-6">
                                        <div className="flex justify-between items-start mb-3 gap-2">
                                          <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                            Hate Speech Detection Using Machine Learning</h4>
                                          <Badge className="shrink-0">Intermediate</Badge>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">
                                          In this project, you will act as a Machine Learning Engineer tasked with building a text classification system
                                          to detect hate speech in online content. Using natural language processing techniques, you will clean and
                                          preprocess text data, extract relevant features, and train classification models to differentiate hate speech
                                          from neutral or non-offensive content.                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                          {['Python', 'Scikit-learn', 'Natural Language Processing', 'Logistic Regression', 'Naive Bayes'].map((skill, index) => (
                                            <Badge variant="outline" key={index}>{skill}</Badge>
                                          ))}
                                        </div>


                                        <CardFooter className="border-t pt-4">
                                          <Dialog>
                                            <DialogTrigger asChild>
                                              <Button variant="outline" size="sm" className="w-full">
                                                View Project Details
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                              <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                                <iframe
                                                  src="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/preview"
                                                  width="100%"
                                                  height="100%"
                                                  title="Project Details PDF"
                                                  className="border-0"
                                                  allow="autoplay"
                                                />
                                              </div>
                                              <div className="p-4 border-t flex justify-end">
                                                <Button
                                                  asChild
                                                  variant="outline"
                                                  size="sm"
                                                >
                                                  <a
                                                    href="https://drive.google.com/file/d/1I_zpBYoKpNCq51lijF4cYePXttFwYRLA/view"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                  >
                                                    Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                                  </a>
                                                </Button>
                                              </div>
                                            </DialogContent>
                                          </Dialog>
                                        </CardFooter>

                                      </CardContent>
                                    </Card>

                                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                                      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <Image
                                          width={400}
                                          height={200}
                                          src={""}
                                          alt="Financial ML Project"
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <CardContent className="pt-6">

                                        <div className="flex justify-between items-start mb-3 gap-2">
                                          <h4 className="font-bold text-lg leading-snug max-w-[calc(100%-120px)]">
                                            Customer Personality Segmentation using Clustering Analysis                                   </h4>
                                          <Badge className="shrink-0">Intermediate to Advanced</Badge>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">
                                          In this project, you will act as a Customer Insights Analyst for a retail company aiming to enhance its
                                          marketing strategy through customer segmentation. By analyzing demographic, behavioral, and
                                          transactional attributes, you will group customers into distinct segments to enable targeted marketing and
                                          product personalization.                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                          {['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Clustering Algorithms (K-Means)'].map((skill, index) => (
                                            <Badge variant="outline" key={index}>{skill}</Badge>
                                          ))}
                                        </div>
                                        <CardFooter className="border-t pt-4">
                                          <Dialog>
                                            <DialogTrigger asChild>
                                              <Button variant="outline" size="sm" className="w-full">
                                                View Project Details
                                              </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                              <div className="h-[80vh] w-full px-10 py-2 bg-white">
                                                <iframe
                                                  src="https://drive.google.com/file/d/1nR1y2gCIrJ41uo_5KUvYzcEmXrwmiuGh/preview"
                                                  width="100%"
                                                  height="100%"
                                                  title="Project Details PDF"
                                                  className="border-0"
                                                  allow="autoplay"
                                                />
                                              </div>
                                              <div className="p-4 border-t flex justify-end">
                                                <Button
                                                  asChild
                                                  variant="outline"
                                                  size="sm"
                                                >
                                                  <a
                                                    href="https://drive.google.com/file/d/1nR1y2gCIrJ41uo_5KUvYzcEmXrwmiuGh/view"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                  >
                                                    Open in New Tab <ExternalLink className="ml-2 h-4 w-4" />
                                                  </a>
                                                </Button>
                                              </div>
                                            </DialogContent>
                                          </Dialog>
                                        </CardFooter>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </div>

                                <div className="mt-12 sm:mt-16">
                                  <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">Startup Projects</h3>
                                    <p className="text-gray-600 max-w-3xl px-2 sm:px-0">
                                      Ivy Professional School has incubated and supported several successful AI startups.
                                      Our students get exposure to cutting-edge projects similar to these.
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                                    <Card>
                                      <CardContent className="pt-6">
                                        <h4 className="font-bold text-lg mb-2">time2justice.ai</h4>
                                        <p className="text-gray-600 text-sm mb-4">Legal AI technology that automates legal document analysis and processing</p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                          <a href="https://time2justice.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            Visit <ExternalLink size={14} className="ml-2" />
                                          </a>
                                        </Button>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardContent className="pt-6">
                                        <h4 className="font-bold text-lg mb-2">BiGo.bike</h4>
                                        <p className="text-gray-600 text-sm mb-4">AI-powered electric vehicle platform for sustainable urban transportation</p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                          <a href="https://bigo.bike" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            Visit <ExternalLink size={14} className="ml-2" />
                                          </a>
                                        </Button>
                                      </CardContent>
                                    </Card>

                                    <Card>
                                      <CardContent className="pt-6">
                                        <h4 className="font-bold text-lg mb-2">prepAI.com</h4>
                                        <p className="text-gray-600 text-sm mb-4">AI-driven education platform for personalized learning and test preparation</p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                          <a href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            Visit <ExternalLink size={14} className="ml-2" />
                                          </a>
                                        </Button>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </div>
                              </TabsContent>
                              :
                              null

          }

        </Tabs>
      </div>
    </section>
  );
};

export default CourseProjects;