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

'use client';
import { useEffect, useState } from 'react';

export default function InstallPWA() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      // @ts-ignore — Chrome provides this event dynamically
      setDeferred(e);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!deferred) return;

    // @ts-ignore — Chrome only
    deferred.prompt();
    // optional: await user choice if needed
    // const { outcome } = await deferred.userChoice;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg z-50">
      <div className="mb-2 text-tila-text font-medium">Install TILA for quick access</div>
      <div className="flex gap-2">
        <button
          onClick={install}
          className="px-4 py-2 bg-tila-primary text-white rounded hover:scale-[1.03] transition-transform"
        >
          Install
        </button>
        <button
          onClick={() => setVisible(false)}
          className="px-4 py-2 border border-tila-outline text-tila-text rounded hover:bg-tila-secondary/10 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Add this custom type for TypeScript safety
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}
