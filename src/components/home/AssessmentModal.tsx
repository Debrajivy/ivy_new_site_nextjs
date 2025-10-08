"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, BookOpenText, Trophy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Define interfaces for questions and courses
interface Option {
  value: string;
  label: string;
}

interface Question {
  id: string;
  type: 'mcq' | 'input';
  question: string;
  options?: Option[];
  placeholder?: string;
}

interface Course {
  id: string;
  name: string;
  description: string;
  keywords: string[]; // Used for recommendation logic
  link: string; // Link to the course page
}

// Define the props for the AssessmentModal
interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the available courses at Ivy Professional School
const IVY_COURSES: Course[] = [
  {
    id: 'gen-ai-iitg',
    name: 'Generative AI Course with IIT Guwahati',
    description: 'Master the cutting-edge concepts of Generative AI, LLMs, and diffusion models with expert faculty from IIT Guwahati.',
    keywords: ['generative ai', 'llm', 'diffusion models', 'ai content', 'advanced ai'],
    link: '/courses/iit-generative-ai-course', // Replace with actual course link
  },
  {
    id: 'ds-ai-iitg',
    name: 'Data Science & AI with IIT Guwahati',
    description: 'A comprehensive program covering data science, machine learning, and artificial intelligence, in collaboration with IIT Guwahati.',
    keywords: ['data science', 'ai', 'machine learning', 'python', 'r', 'statistics', 'comprehensive'],
    link: '/courses/iit-data-science-course',
  },
  {
    id: 'cloud-de-cert',
    name: ' Cloud Data Engineering with Nasscom Certification',
    description: 'Learn to build robust data pipelines and manage data infrastructure on cloud platforms.',
    keywords: ['cloud', 'data engineering', 'etl', 'pipelines', 'azure', 'aws', 'gcp', 'infrastructure'],
    link: '/courses/data-engineering-course',
  },
  {
    id: 'ds-ml-ai',
    name: 'Data Science & AI with Nasscom Certification',
    description: 'Deep dive into machine learning algorithms and AI applications, focusing on practical implementation.',
    keywords: ['data science', 'machine learning', 'ai', 'algorithms', 'python', 'modeling'],
    link: '/courses/data-science-and-ml-course',
  },
  {
    id: 'data-viz',
    name: 'Data Visualization Certification',
    description: 'Develop skills in creating compelling data visualizations using tools like Tableau and Power BI.',
    keywords: ['data visualization', 'tableau', 'power bi', 'reporting', 'dashboards'],
    link: '/courses/data-visualization-course',
  },
  {
    id: 'data-analytics-viz',
    name: 'Data Analytics with Visualization Certification',
    description: 'Combine core data analytics principles with powerful data visualization techniques for insightful reporting.',
    keywords: ['data analytics', 'data visualization', 'sql', 'excel', 'tableau', 'business intelligence'],
    link: '/courses/data-analytics-course',
  },
  {
    id: 'business-analytics',
    name: 'Data Visualization Certification',
    description: 'Gain a strong foundation in business analytics, including statistical analysis, SQL, and business intelligence tools.',
    keywords: ['business analytics', 'sql', 'statistics', 'excel', 'business intelligence', 'decision making'],
    link: '/courses/business-analytics-course',
  },
  {
    id: 'cloud-de-iitg',
    name: 'Cloud Data Engineering Course with IIT Guwahati',
    description: 'An advanced program in cloud data engineering, focusing on scalable data solutions with IIT Guwahati expertise.',
    keywords: ['cloud', 'data engineering', 'advanced', 'iit guwahati', 'big data', 'distributed systems'],
    link: '/courses/iit-data-engineering-course',
  },
];


// Define the assessment questions
const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 'background',
    type: 'mcq',
    question: 'What is your current professional background?',
    options: [
      { value: 'student', label: 'Student' },
      { value: 'working_professional', label: 'Working Professional' },
      { value: 'career_changer', label: 'Career Changer' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'career_goal',
    type: 'mcq',
    question: 'What are your primary career goals?',
    options: [
      { value: 'advance_current', label: 'Advance in my current role' },
      { value: 'switch_field', label: 'Switch to a new field (e.g., Data Science, AI)' },
      { value: 'specialize_niche', label: 'Specialize in a niche area (e.g., Generative AI, Cloud Data Engineering)' },
      { value: 'start_venture', label: 'Start my own venture/freelance' },
    ],
  },
  {
    id: 'interest_area',
    type: 'mcq',
    question: 'Which area of data science/AI interests you most?',
    options: [
      { value: 'data_analysis_reporting', label: 'Analyzing data and creating reports/dashboards' },
      { value: 'ml_ai_model', label: 'Building Machine Learning/AI models' },
      { value: 'data_infrastructure', label: 'Designing and managing data infrastructure/pipelines' },
      { value: 'ai_content_generation', label: 'Creating content/solutions with Generative AI' },
      { value: 'data_visualization', label: 'Visualizing data effectively' },
    ],
  },
  {
    id: 'programming_comfort',
    type: 'mcq',
    question: 'What is your comfort level with programming (e.g., Python, R, SQL)?',
    options: [
      { value: 'beginner', label: 'Beginner (little to no experience)' },
      { value: 'intermediate', label: 'Intermediate (some experience, can write basic scripts)' },
      { value: 'advanced', label: 'Advanced (proficient, comfortable with complex coding)' },
    ],
  },
  {
    id: 'cloud_interest',
    type: 'mcq',
    question: 'Are you interested in cloud technologies (e.g., AWS, Azure, GCP)?',
    options: [
      { value: 'yes', label: 'Yes, definitely' },
      { value: 'no', label: 'Not particularly' },
      { value: 'not_sure', label: 'Not sure / Open to learning' },
    ],
  },
  {
    id: 'specific_skills',
    type: 'input',
    question: 'Are there any specific skills or tools you are keen to learn (e.g., Tableau, Python, Spark)?',
    placeholder: 'e.g., Python, SQL, Tableau, NLP',
  },
];

const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // For scrolling to recommendations

  useEffect(() => {
    // Reset state when modal opens/closes
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({});
      setRecommendations([]);
      setIsAssessmentComplete(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  // Scroll to recommendations when they are generated
  useEffect(() => {
    if (isAssessmentComplete && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isAssessmentComplete, recommendations]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    // Basic validation: ensure an answer is selected/entered for the current question
    const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];
    if (currentQuestion.type === 'mcq' && !answers[currentQuestion.id]) {
      alert('Please select an option to proceed.'); // Using alert for simplicity, replace with a UI message
      return;
    }
    if (currentQuestion.type === 'input' && !answers[currentQuestion.id]?.trim()) {
      alert('Please enter your response to proceed.'); // Using alert for simplicity, replace with a UI message
      return;
    }

    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      generateRecommendations();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const generateRecommendations = async () => {
    setIsLoading(true);
    setIsAssessmentComplete(true); // Mark assessment as complete to show results section

    // Simulate API call or complex logic
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate loading time

    const userProfileKeywords: string[] = [];

    // Process MCQ answers
    if (answers.career_goal === 'specialize_niche' || answers.interest_area === 'ai_content_generation') {
      userProfileKeywords.push('generative ai');
    }
    if (answers.interest_area === 'data_infrastructure' || answers.cloud_interest === 'yes') {
      userProfileKeywords.push('cloud', 'data engineering');
    }
    if (answers.interest_area === 'ml_ai_model') {
      userProfileKeywords.push('machine learning', 'ai');
    }
    if (answers.interest_area === 'data_analysis_reporting' || answers.interest_area === 'data_visualization') {
      userProfileKeywords.push('data analytics', 'data visualization', 'business intelligence');
    }
    if (answers.programming_comfort === 'beginner' && (answers.interest_area === 'data_analysis_reporting' || answers.interest_area === 'data_visualization')) {
      userProfileKeywords.push('excel', 'sql'); // Suggest foundational tools
    }
    if (answers.programming_comfort === 'intermediate' || answers.programming_comfort === 'advanced') {
      userProfileKeywords.push('python', 'r');
    }

    // Process input field for specific skills
    const specificSkills = answers.specific_skills?.toLowerCase().split(',').map(s => s.trim()) || [];
    userProfileKeywords.push(...specificSkills);

    // Filter and score courses based on keywords
    const scoredCourses = IVY_COURSES.map(course => {
      let score = 0;
      userProfileKeywords.forEach(keyword => {
        if (course.keywords.some(courseKeyword => courseKeyword.includes(keyword))) {
          score++;
        }
      });
      return { course, score };
    });

    // Sort by score in descending order and get top 3 unique courses
    const sortedCourses = scoredCourses
      .filter(item => item.score > 0) // Only recommend courses with at least one match
      .sort((a, b) => b.score - a.score)
      .map(item => item.course);

    // Remove duplicates based on course ID
    const uniqueRecommendations = Array.from(new Map(sortedCourses.map(course => [course.id, course])).values());

    // If no specific recommendations, provide general ones
    if (uniqueRecommendations.length === 0) {
      setRecommendations(
        IVY_COURSES.filter(course => ['ds-ai-iitg', 'business-analytics'].includes(course.id)) // General popular courses
      );
    } else {
      setRecommendations(uniqueRecommendations.slice(0, 3)); // Limit to top 3
    }

    setIsLoading(false);
  };

  if (!isOpen) return null;

  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];
  const progress = ((currentStep + (isAssessmentComplete ? 1 : 0)) / (ASSESSMENT_QUESTIONS.length + 1)) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Card className="relative w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-lg shadow-xl">
        <CardHeader className="bg-gradient-to-r from-ivy-blue to-ivy-orange text-white p-4 flex flex-row items-center justify-between">
          <h2 className="text-xl font-bold flex items-center">
            <BookOpenText className="mr-2 h-6 w-6" /> IvyPro Career Assessment
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <XCircle className="h-6 w-6" />
          </Button>
        </CardHeader>

        <CardContent className="flex-grow p-6 overflow-y-auto">
          {!isAssessmentComplete ? (
            <div>
              <Progress value={progress} className="w-full h-2 mb-6" />
              <p className="text-sm text-gray-600 mb-4">
                Question {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}
              </p>
              <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>

              {currentQuestion.type === 'mcq' && currentQuestion.options && (
                <RadioGroup
                  value={answers[currentQuestion.id] || ''}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                  className="space-y-4"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="text-base font-medium cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === 'input' && (
                <Input
                  type="text"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full p-3 border rounded-lg"
                />
              )}
            </div>
          ) : (
            <div ref={messagesEndRef} className="text-center">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                  <p className="text-lg text-gray-700">Generating your personalized recommendations...</p>
                </div>
              ) : (
                <>
                  <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Your Personalized Course Recommendations!</h3>
                  <p className="text-gray-700 mb-6">
                    Based on your responses, here are the Ivy Professional School courses best suited for your career goals:
                  </p>
                  {recommendations.length > 0 ? (
                    <div className="space-y-4">
                      {recommendations.map((course) => (
                        <Card key={course.id} className="p-4 text-left border-2 border-primary/20 bg-primary/5">
                          <h4 className="text-lg font-semibold text-primary mb-1">{course.name}</h4>
                          <p className="text-gray-700 text-sm mb-2">{course.description}</p>
                          <Button asChild size="sm" className="mt-2">
                            <a href={course.link} target="_blank" rel="noopener noreferrer">
                              Learn More
                            </a>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      We couldn't find a perfect match based on your answers. Please explore our full range of courses or schedule a consultation with our human advisors.
                    </p>
                  )}
                  <Button onClick={onClose} className="mt-8">
                    Close Assessment
                  </Button>
                </>
              )}
            </div>
          )}
        </CardContent>

        {!isAssessmentComplete && (
          <CardFooter className="flex justify-between p-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0 || isLoading}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={isLoading}
              className="flex items-center"
            >
              {currentStep < ASSESSMENT_QUESTIONS.length - 1 ? (
                <>Next <ChevronRight className="ml-2 h-4 w-4" /></>
              ) : (
                <>Get Recommendations <CheckCircle className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AssessmentModal;
