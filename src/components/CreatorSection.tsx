"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  icon: string;
  title: string;
  text: string;
}

const CreatorSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // 🖥 Desktop Animation
    mm.add("(min-width: 768px)", () => {
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 60 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      });

      // Pin left image
      if (leftRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftRef.current,
          pinSpacing: false,
          scrub: true,
        });
      }
    });

    // 📱 Mobile Animation
    mm.add("(max-width: 767px)", () => {
      const container = sectionRef.current?.querySelector(".cards-wrapper") as HTMLDivElement;
      if (!container) return;

      const totalWidth = container.scrollWidth - container.clientWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const cards: CardItem[] = [
    {
      icon: "🎙️",
      title: "Your expertise, amplified",
      text: "Share your insights through videos, threads, and live events in a space where financial knowledge thrives. Stand out as one of the platform’s founding voices.",
    },
    {
      icon: "🔑",
      title: "Unlock new opportunities",
      text: "Discover tools to help you monetize your content, from sharing investment strategies to market analysis and breaking down emerging trends.",
    },
    {
      icon: "🌱",
      title: "Grow with us",
      text: "Collaborate with other creators, grow your audience, and become a part of the next-generation financial ecosystem.",
    },
  ];

  return (
    <section
      id="creators"
      ref={sectionRef}
      className="relative bg-[#E9E9FB] min-h-screen flex flex-col lg:flex-row overflow-hidden px-6 lg:px-16 py-20"
    >
      {/* LEFT SIDE (Pinned Image) */}
      <div
        ref={leftRef}
        className="relative flex flex-col items-center justify-center lg:w-1/2 mb-10 lg:mb-0"
      >
        <div className="relative w-[280px] sm:w-[360px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://assets-global.website-files.com/655d5d6b07a0a257e6e7f648/6569c3919dc92602a5e98754_creator.webp"
            alt="creator"
            className="w-full h-full object-cover"
          />
          {/* Floating Card */}
          <div className="absolute -left-10 top-10 bg-white rounded-2xl shadow-md p-3 flex items-center space-x-2">
            <div className="text-xl">📡</div>
            <div className="h-8 w-6 bg-green-900 rounded"></div>
          </div>
          <div className="absolute -bottom-6 right-4 bg-[#FFA800] text-black font-semibold px-4 py-2 rounded-lg shadow-md">
            $10293,67
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Animated Cards) */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6 cards-wrapper">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-all duration-500"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreatorSection;
