"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const DEFER_MS = 10_000

export default function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let idleId: number | undefined
    const enable = () => setEnabled(true)
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, { timeout: 3_000 })
      } else {
        enable()
      }
    }

    const timer = window.setTimeout(schedule, DEFER_MS)
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown"]
    events.forEach((event) => window.addEventListener(event, enable, { once: true, passive: true }))

    return () => {
      window.clearTimeout(timer)
      if (idleId !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId)
      events.forEach((event) => window.removeEventListener(event, enable))
    }
  }, [])

  if (!enabled) return null
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-981187918" strategy="afterInteractive" />
      <Script id="google-ads" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-981187918');
      `}</Script>
      <Script id="google-tag-manager" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PZPNXDVD');
      `}</Script>
      <Script id="facebook-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
        (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','1435433223444500');fbq('track','PageView');
      `}</Script>
      <Script id="leadsquared-tracker" strategy="afterInteractive">{`
        (function(){var t=document.createElement('script');t.src='https://web.mxradon.com/t/Tracker.js';
        t.async=true;t.onload=function(){if(typeof pidTracker==='function')pidTracker('18802');};
        document.body.appendChild(t);})();
      `}</Script>
      {clarityId ? <Script id="microsoft-clarity" strategy="afterInteractive">{`
        (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})
        (window,document,'clarity','script','${clarityId}');
      `}</Script> : null}
    </>
  )
}
