
import React from 'react';
import { leaderboard } from '@/lib/mockTopicsData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award } from 'lucide-react';

const TopicsLeaderboard = () => {
  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="divide-y">
          {leaderboard.map((entry, index) => (
            <div 
              key={entry.userId}
              className={`flex items-center p-4 ${
                index === 0 
                  ? 'bg-gradient-to-r from-amber-100 to-amber-50' 
                  : index === 1 
                    ? 'bg-gradient-to-r from-gray-100 to-gray-50'
                    : index === 2 
                      ? 'bg-gradient-to-r from-orange-100 to-orange-50'
                      : ''
              }`}
            >
              <div className="flex-shrink-0 mr-3">
                {index < 3 ? (
                  <div className={`rounded-full p-2 flex items-center justify-center ${
                    index === 0 
                      ? 'bg-amber-400' 
                      : index === 1 
                        ? 'bg-gray-300'
                        : 'bg-orange-500'
                  }`}>
                    <Trophy className={`h-5 w-5 ${index === 0 ? 'text-amber-800' : index === 1 ? 'text-gray-700' : 'text-orange-800'}`} />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
                    {entry.rank}
                  </div>
                )}
              </div>
              
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {entry.username.charAt(0)}
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="font-semibold">{entry.username}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="flex items-center mr-3">
                    <Trophy className="h-3.5 w-3.5 mr-1 text-amber-500" /> 
                    {entry.points} pts
                  </span>
                  <span className="flex items-center">
                    <Award className="h-3.5 w-3.5 mr-1 text-blue-500" /> 
                    {entry.badges} badges
                  </span>
                </div>
              </div>
              
              {index < 3 && (
                <Badge className={`
                  ${index === 0 
                    ? 'bg-amber-400 text-amber-800' 
                    : index === 1 
                      ? 'bg-gray-300 text-gray-700'
                      : 'bg-orange-500 text-orange-800'}
                `}>
                  {index === 0 ? '1st' : index === 1 ? '2nd' : '3rd'}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicsLeaderboard;
