
import React from 'react';

const CourseAccreditation = () => {
  const accreditations = [
    {
      name: 'IIT Guwahati',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg',
      description: 'Courses co-certified by Indian Institute of Technology, Guwahati',
    },
    {
      name: 'Ministry of Electronics & IT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Emblem_of_India_%28gold%29.svg',
      description: 'Recognized by Ministry of Electronics & Information Technology (MeitY)',
    },
    {
      name: 'NASSCOM',
      logo: 'https://nasscom.in/sites/all/themes/nasscom/images/nasscom-logo.svg',
      description: 'Aligned with NASSCOM industry standards',
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      description: 'Industry partner for curriculum development',
    }
  ];

  return (
    <>
    </>
    // <section className="py-8 bg-gray-50 border-t border-b border-gray-200">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-8">
    //       <h2 className="text-lg font-medium text-gray-600">Accredited & Recognized By</h2>
    //     </div>
        
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
    //       {accreditations.map((item) => (
    //         <div key={item.name} className="flex flex-col items-center">
    //           <div className="h-16 flex items-center justify-center mb-2">
    //             <img 
    //               src={item.logo} 
    //               alt={`${item.name} logo`}
    //               className="max-h-14 max-w-[120px] object-contain"
    //             />
    //           </div>
    //           <p className="text-xs text-center text-gray-600">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>
        
    //     <div className="mt-8 text-center">
    //       <p className="text-gray-500 text-sm">Our courses meet industry standards and are recognized by leading organizations</p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default CourseAccreditation;
