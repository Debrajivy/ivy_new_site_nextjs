
import React, { useState } from 'react';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, Award, ChevronRight, ChevronLeft, CheckCircle, 
  XCircle, AlertCircle, ArrowRight, RefreshCw 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuizProps {
  quiz: any;
  onFinish: () => void;
}

const TopicQuiz: React.FC<QuizProps> = ({ quiz, onFinish }) => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quiz.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const handleAnswer = (value: string) => {
    const answerIndex = parseInt(value, 10);
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };
  
  const goToNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateScore = () => {
    return selectedAnswers.reduce((score, answerIndex, questionIndex) => {
      const question = quiz.questions[questionIndex];
      return answerIndex === question.correctOption ? score + 1 : score;
    }, 0);
  };
  
  const getScorePercentage = () => {
    return (calculateScore() / quiz.questions.length) * 100;
  };
  
  const isCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === quiz.questions[questionIndex].correctOption;
  };
  
  const handleFinish = () => {
    const score = calculateScore();
    const percentage = getScorePercentage();
    
    let message = '';
    if (percentage === 100) {
      message = 'Perfect score! You\'ve mastered this topic.';
    } else if (percentage >= 80) {
      message = 'Great job! You have a strong understanding of this topic.';
    } else if (percentage >= 60) {
      message = 'Good effort! You\'re on the right track.';
    } else {
      message = 'Keep practicing! Review the material and try again.';
    }
    
    toast({
      title: `Quiz Complete! Score: ${score}/${quiz.questions.length}`,
      description: message,
      duration: 5000,
    });
    
    onFinish();
  };
  
  const handleRetry = () => {
    setSelectedAnswers(Array(quiz.questions.length).fill(-1));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowExplanation(false);
  };
  
  const currentQ = quiz.questions[currentQuestion];
  
  if (showResults) {
    return (
      <Card className="border-0 shadow-md">
        <CardHeader className="bg-gradient-to-r from-ivy-purple to-ivy-blue text-white">
          <CardTitle className="flex items-center">
            <Trophy className="h-6 w-6 mr-2" />
            Quiz Results
          </CardTitle>
          <CardDescription className="text-white opacity-90">
            {quiz.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-4">
              <span className="text-3xl font-bold">
                {calculateScore()}/{quiz.questions.length}
              </span>
            </div>
            <h3 className="text-xl font-semibold">
              {getScorePercentage() >= 70 ? 'Congratulations!' : 'Good Effort!'}
            </h3>
            <p className="text-muted-foreground">
              {getScorePercentage() === 100 
                ? 'Perfect score! You\'ve mastered this topic.' 
                : getScorePercentage() >= 80 
                  ? 'Great job! You have a strong understanding of this topic.'
                  : getScorePercentage() >= 60 
                    ? 'Good effort! You\'re on the right track.'
                    : 'Keep practicing! Review the material and try again.'}
            </p>
          </div>
          
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="font-medium mb-2">Your Score</h4>
              <div className="flex items-center mb-1">
                <Progress value={getScorePercentage()} className="h-2" />
                <span className="ml-2 text-sm font-medium">{getScorePercentage().toFixed(0)}%</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Question Review</h4>
              <div className="space-y-2">
                {quiz.questions.map((q: any, index: number) => (
                  <div key={q.id} className="flex items-center">
                    <div className="mr-2">
                      {isCorrect(index) ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <span className={`text-sm ${isCorrect(index) ? '' : 'text-red-600'}`}>
                      Question {index + 1}: {isCorrect(index) ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {getScorePercentage() >= 70 && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center">
                <Award className="h-12 w-12 text-green-500 mr-4" />
                <div>
                  <h4 className="font-semibold text-green-700">Badge Earned!</h4>
                  <p className="text-green-600 text-sm">
                    You've earned the "{quiz.title} Expert" badge for your knowledge!
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleRetry}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={handleFinish}>
            Finish
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="bg-gradient-to-r from-ivy-purple to-ivy-blue text-white">
        <div className="flex justify-between items-center">
          <CardTitle>{quiz.title}</CardTitle>
          <div className="text-sm">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </div>
        </div>
        <Progress 
          value={((currentQuestion + 1) / quiz.questions.length) * 100} 
          className="h-1 mt-2 bg-white/30"
        />
      </CardHeader>
      
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">{currentQ.text}</h3>
        
        <RadioGroup 
          value={selectedAnswers[currentQuestion] === -1 ? undefined : selectedAnswers[currentQuestion].toString()} 
          onValueChange={handleAnswer}
          className="space-y-3"
          disabled={showExplanation}
        >
          {currentQ.options.map((option: string, index: number) => (
            <div 
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-md border ${
                showExplanation && index === currentQ.correctOption 
                  ? 'border-green-500 bg-green-50' 
                  : showExplanation && selectedAnswers[currentQuestion] === index && index !== currentQ.correctOption 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <RadioGroupItem 
                value={index.toString()} 
                id={`option-${index}`} 
                className="text-primary"
              />
              <Label 
                htmlFor={`option-${index}`}
                className={`flex-grow cursor-pointer ${
                  showExplanation && index === currentQ.correctOption 
                    ? 'text-green-700' 
                    : showExplanation && selectedAnswers[currentQuestion] === index && index !== currentQ.correctOption 
                      ? 'text-red-700' 
                      : ''
                }`}
              >
                {option}
              </Label>
              {showExplanation && index === currentQ.correctOption && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {showExplanation && selectedAnswers[currentQuestion] === index && index !== currentQ.correctOption && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>
        
        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h4 className="font-semibold text-blue-700 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Explanation
            </h4>
            <p className="text-blue-600 mt-1">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        {!showExplanation && selectedAnswers[currentQuestion] !== -1 ? (
          <Button onClick={() => setShowExplanation(true)}>
            Check Answer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button 
            onClick={goToNextQuestion}
            disabled={selectedAnswers[currentQuestion] === -1}
          >
            {currentQuestion === quiz.questions.length - 1 ? 'See Results' : 'Next Question'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TopicQuiz;
