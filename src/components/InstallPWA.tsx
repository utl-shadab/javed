// 'use client';
// import { useEffect, useState } from 'react';

// export default function InstallPWA(){
//   const [deferred, setDeferred] = useState<any>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     function handler(e: any){
//       e.preventDefault();
//       setDeferred(e);
//       setVisible(true);
//     }
//     window.addEventListener('beforeinstallprompt', handler as EventListener);
//     return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
//   }, []);

//   async function install(){
//     if (!deferred) return;
//     deferred.prompt();
//     const choice = await deferred.userChoice;
//     setVisible(false);
//   }

//   if (!visible) return null;
//   return (
//     <div className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
//       <div className="mb-2">Install TILA for quick access</div>
//       <div className="flex gap-2">
//         <button onClick={install} className="px-4 py-2 bg-tila-primary text-white rounded">Install</button>
//         <button onClick={()=>setVisible(false)} className="px-4 py-2 border rounded">Close</button>
//       </div>
//     </div>
//   )
// }

// 'use client';
// import { useEffect, useState } from 'react';

// export default function InstallPWA() {
//   const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handler = (e: Event) => {
//       e.preventDefault();
//       // @ts-ignore — Chrome provides this event dynamically
//       setDeferred(e);
//       setVisible(true);
//     };

//     window.addEventListener('beforeinstallprompt', handler);
//     return () => window.removeEventListener('beforeinstallprompt', handler);
//   }, []);

//   const install = async () => {
//     if (!deferred) return;

//     // @ts-ignore — Chrome only
//     deferred.prompt();
//     // optional: await user choice if needed
//     // const { outcome } = await deferred.userChoice;
//     setVisible(false);
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg z-50">
//       <div className="mb-2 text-tila-text font-medium">Install TILA for quick access</div>
//       <div className="flex gap-2">
//         <button
//           onClick={install}
//           className="px-4 py-2 bg-tila-primary text-white rounded hover:scale-[1.03] transition-transform"
//         >
//           Install
//         </button>
//         <button
//           onClick={() => setVisible(false)}
//           className="px-4 py-2 border border-tila-outline text-tila-text rounded hover:bg-tila-secondary/10 transition-colors"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// // Add this custom type for TypeScript safety
// interface BeforeInstallPromptEvent extends Event {
//   readonly platforms: string[];
//   readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
//   prompt(): Promise<void>;
// }

import { Share2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function InstallPWA() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect PWA install event or iOS device
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      // @ts-ignore — Chrome provides this dynamically
      setDeferred(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect iOS (Safari)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice =
      /iphone|ipad|ipod/.test(userAgent) &&
      !("standalone" in window.navigator && (window.navigator as any).standalone);
    if (isIOSDevice) setIsIOS(true);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!deferred) return;
    // @ts-ignore
    deferred.prompt();
    setVisible(false);
  };

  // iOS users see this guide once
  const showPopup = visible || isIOS;

  if (!showPopup) return null;

  return (
    <div className="fixed font-tila inset-0 flex items-center justify-center bg-black/40 z-[99999999999] px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-5 animate-fadeIn">
        {/* Header */}
        <div className="flex items-start gap-3">
          <Image
            width={56}
            height={56}
            src="/icons/icon-192.png"
            alt="App icon"
            className="md:w-14 md:h-14 h-10 w-10 rounded-md"
          />
          <div>
            <h2 className="text-xl md:text-2xl  font-semibold text-gray-900">
              {isIOS ? "Add to Home Screen" : "Install app?"}
            </h2>
            <p className="text-xs md:text-base  text-gray-600 leading-snug">
              TILA Progressive Web App
              <br />
              app.tila.com
            </p>
          </div>
        </div>

        {/* iOS instructions */}
        {isIOS ? (
          <div className="mt-5 text-sm md:text-base  text-gray-600 leading-snug space-y-3">
            <p>
              Tap <span className="font-semibold">Share</span> <span className="text-lg"><Share2 /></span>{" "}
              then select <span className="font-semibold">Add to Home Screen</span> to install the
              app on your iPhone.
            </p>
          </div>
        ) : null}

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={() => setVisible(false)}
            className="px-4 py-1.5 text-tila-primary font-medium text-sm hover:bg-gray-100 rounded transition-colors"
          >
            {isIOS ? "Close" : "Cancel"}
          </button>

          {!isIOS && (
            <button
              onClick={install}
              className="px-7 py-2 md:py-2.5 bg-tila-primary text-tila-surface font-medium text-sm rounded hover:bg-[#1765c1] transition-colors"
            >
              Install
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

