"use client";

import Script from "next/script";

export default function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // This ensures it doesn't run in development or if the ID is missing
  if (!clarityId || process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}