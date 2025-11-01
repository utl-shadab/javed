"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ✅ Sync ScrollTrigger with Lenis if available
        const handleLenis = () => {
            const lenis = (window as any).lenis;
            if (!lenis) return;

            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        };
        handleLenis();

        // ✅ Parallax movement
        const wrap = wrapRef.current;
        if (wrap) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 90%",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });
            tl.to(wrap, { yPercent: -20, ease: "none" });
        }
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            const videoContainer = videoContainerRef.current;
            if (!videoContainer) return;

            gsap.fromTo(
                videoContainer,
                { scale: 1 },
                {
                    scale: 1.25,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            mm.revert();
        };
    }, []);
    return (
        <section ref={sectionRef} id="video" className="py-0 relative">
            <div ref={videoContainerRef} className="mx-auto max-w-5xl px-6">
                <div
                    ref={wrapRef}
                    className="rounded-3xl overflow-hidden h-[420px] md:h-[520px] relative bg-black"
                    style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                >

                    <video
                        src="/video.mp4"
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover will-change-transform"
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white text-5xl md:text-7xl font-extrabold text-center">
                            <span>Connect.</span>
                            <br />
                            <span>Share. Invest.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoSection;
