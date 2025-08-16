
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrainCircuit, Upload, FileUp, Sparkles } from 'lucide-react';
import JobCard from '@/components/jobs/JobCard';

const JobRecommendation = () => {
  const { toast } = useToast();
  const [tab, setTab] = useState("resume");
  const [skills, setSkills] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
      toast({
        title: "Resume uploaded",
        description: `${e.target.files[0].name} has been uploaded successfully.`,
      });
    }
  };

  const handleAnalyzeClick = () => {
    if ((tab === "resume" && !resumeFile) || (tab === "skills" && !skills.trim())) {
      toast({
        title: "Missing information",
        description: tab === "resume" 
          ? "Please upload your resume first" 
          : "Please enter your skills first",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis complete",
        description: "We've found job matches based on your profile!",
      });
    }, 2500);
  };

  // Mock data - in a real app this would come from an API after processing the resume/skills
  const recommendedJobs = [
    {
      id: 101,
      title: 'Machine Learning Engineer',
      company: 'Tech Innovations',
      matchScore: 98,
      skillMatch: ['Python', 'TensorFlow', 'Deep Learning'],
      location: 'Remote',
      salary: '$130,000 - $150,000',
      description: 'Perfect match for your machine learning and Python skills'
    },
    {
      id: 102,
      title: 'Senior Data Scientist',
      company: 'Data Corp',
      matchScore: 94,
      skillMatch: ['Data Modeling', 'Python', 'Statistics'],
      location: 'New York, NY (Hybrid)',
      salary: '$120,000 - $160,000',
      description: 'Your statistical analysis experience is exactly what we need'
    },
    {
      id: 103,
      title: 'AI Product Manager',
      company: 'IntelliSystems',
      matchScore: 92,
      skillMatch: ['Product Management', 'AI', 'Team Leadership'],
      location: 'San Francisco, CA',
      salary: '$140,000 - $170,000',
      description: 'Your background in both tech and business makes you ideal for this role'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold mb-2">AI-Powered Job Recommendations</h2>
          <p className="text-gray-600">
            Our AI will analyze your profile and match you with the perfect job opportunities
          </p>
        </div>
        
        {!showResults ? (
          <>
            <Tabs defaultValue="resume" value={tab} onValueChange={setTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="resume">Upload Resume</TabsTrigger>
                <TabsTrigger value="skills">Enter Skills Manually</TabsTrigger>
              </TabsList>
              
              <TabsContent value="resume" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <FileUp className="h-10 w-10 text-gray-400 mb-3" />
                      <p className="text-lg font-medium mb-1">
                        {resumeFile ? resumeFile.name : "Upload your resume"}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {resumeFile ? "File uploaded successfully" : "Drag and drop or click to browse"}
                      </p>
                      <Button variant="outline" type="button">
                        <Upload className="h-4 w-4 mr-2" /> Select File
                      </Button>
                    </div>
                    <input 
                      id="resume-upload" 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="hidden" 
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </TabsContent>
              
              <TabsContent value="skills">
                <div className="space-y-4">
                  <Textarea 
                    placeholder="Enter your skills, experience, and job preferences (e.g., Python, Data Analysis, Machine Learning, 5 years experience, Remote work...)" 
                    className="min-h-[150px]"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">
                    Include skills, years of experience, job titles, and preferences for the best matches
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                disabled={isAnalyzing}
                onClick={handleAnalyzeClick}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Analyzing your profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Find Matching Jobs
                  </>
                )}
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-2">AI Analysis Results</h3>
              <p className="text-sm text-gray-600 mb-2">Based on your profile, you have strong skills in:</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Deep Learning'].map(skill => (
                  <span key={skill} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">We found <span className="font-semibold">28 jobs</span> that match your profile, here are the top matches:</p>
            </div>
            
            <div className="space-y-4">
              {recommendedJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            <div className="text-center pt-4">
              <Button variant="outline" onClick={() => setShowResults(false)} className="mr-4">
                Update Your Profile
              </Button>
              <Button>
                View All 28 Matching Jobs
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobRecommendation;
