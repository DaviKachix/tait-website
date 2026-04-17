"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    type: "hero",
    title: "Technology at the Heart of the Mission",
    text: "TAIT empowers the Church through digital systems, media, and innovation.",
    subtext:
      "We design, develop, and integrate solutions that strengthen institutions and extend mission reach.",
    cta1: "/strategic-areas",
    cta2: "/work-with-us",
    ctaLabel1: "Explore Our Work",
    ctaLabel2: "Join the Mission",
    image: "/images/team.webp",
  },
  {
    type: "image",
    title: "Media for Mission & Evangelism",
    image: "/images/team.webp",
  },
  {
    type: "image",
    title: "Research, Systems & Innovation",
    image: "/images/research.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* ================= BACKGROUND LAYER ================= */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${
            i === index
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-110 -translate-x-10"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* DARK + SOFT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">

        {index === 0 ? (
          <div className="max-w-4xl text-white animate-fadeUp">

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              {slides[0].title}
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/90 font-medium">
              {slides[0].text}
            </p>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-white/80">
              {slides[0].subtext}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                href={slides[0].cta1}
                className="px-6 py-3 bg-[#7f264a] text-white font-semibold rounded-md shadow-lg hover:scale-105 transition"
              >
                {slides[0].ctaLabel1}
              </Link>

              <Link
                href={slides[0].cta2}
                className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#7f264a] transition"
              >
                {slides[0].ctaLabel2}
              </Link>

            </div>

          </div>
        ) : (
          <div className="text-white max-w-3xl animate-fadeUp">

            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              {slides[index].title}
            </h2>

          </div>
        )}
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#7f264a] scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}