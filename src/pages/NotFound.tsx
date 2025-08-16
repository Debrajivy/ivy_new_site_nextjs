import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const NotFound = () => {
 const location = useLocation();
     const navigate = useNavigate();
 
     useEffect(() => {
         // Get the current path without the leading slash
         const currentPath = location.pathname.substring(1);
         
         // Only redirect if we're not already on a /courses/ path
         if (!currentPath.startsWith('courses/')) {
             navigate(`/courses/${currentPath}`, { replace: true });
         }
     }, [location, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
