"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaBolt, FaHome, FaPhone, FaGlobeAmericas, FaEnvelope, FaClock } from "react-icons/fa";

export default function Home() {
  const [countdown, setCountdown] = useState(30);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const visibilityTimer = setTimeout(() => setIsVisible(true), 10);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleRedirect()
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearInterval(timer);
    };
  }, []);

  const handleRedirect = () => {
    // window.location.href = "https://cleancutstrees.com";
    window.location.href = "https://cleancutstrees.com";
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Modern countdown banner */}
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-4 max-w-2xl mt-4 mx-4 rounded-r-xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <FaClock className="text-amber-600 text-xl shrink-0 animate-pulse" />
              <p className="text-sm md:text-base text-amber-900 font-medium">
                Redirecting to <span className="font-bold">cleancutstrees.com</span> in{" "}
                <span className="inline-flex items-center justify-center bg-amber-400 text-amber-900 font-bold px-3 py-1 rounded-full min-w-12">
                  {countdown}s
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <header className="text-center w-full mb-16 pt-4">
            <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} max-w-5xl mx-auto`}>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-100">
                <div className="mb-6">
                  <p className="text-sm md:text-base font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                    Important Announcement
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-4 leading-tight">
                    Urban Arborist
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
                    Is Now Part of
                  </p>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent leading-tight">
                    Clean Cuts Trees
                  </h2>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-2xl">
                      <Image
                        src="/cleancutslogo.avif"
                        alt="Clean Cuts Trees Logo"
                        width={240}
                        height={120}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-6xl mx-auto">
          {/* Main announcement */}
          <section className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-emerald-50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Exciting News!
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    We&apos;re excited to announce that <span className="font-semibold text-emerald-700">Urban Arborist</span> has joined
                    forces with <span className="font-semibold text-emerald-700">Clean Cuts Trees!</span>
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    After years of serving the community with expert tree care, Mike
                    and the team at Urban Arborists have entrusted Clean Cuts Trees to
                    continue providing the same high-quality service and care that
                    you&apos;ve come to expect.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What this means section */}
          <section className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-emerald-50">
              <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-10 text-center">
                What This Means for You
              </h3>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="group text-center p-8 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-white text-4xl" />
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Same Quality Commitment
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    The team at Clean Cuts Trees shares Urban Arborist&apos;s
                    commitment to professionalism, safety, and exceptional
                    results.
                  </p>
                </div>

                <div className="group text-center p-8 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaBolt className="text-white text-4xl" />
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Expanded Resources
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    With our crews and state-of-the-art equipment, we&apos;re able
                    to serve you even faster and more efficiently.
                  </p>
                </div>

                <div className="group text-center p-8 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaHome className="text-white text-4xl" />
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">
                    Same Local Roots
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We&apos;ll continue to provide expert tree trimming, removals,
                    and care in your area—just under the Clean Cuts Trees name.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Clean Cuts Trees */}
          <section className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  About Clean Cuts Trees
                </h3>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Clean Cuts Trees is a trusted, locally owned tree care company
                  offering professional trimming, removals, stump grinding, and
                  emergency services. Our licensed and insured crews are dedicated
                  to keeping your property safe, beautiful, and well-maintained.
                </p>
              </div>
            </div>
          </section>

          {/* We're here to help */}
          <section className={`transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-emerald-50">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                We&apos;re Here to Help
              </h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
                  If you were an Urban Arborist customer, you don&apos;t need to do
                  a thing — we have your service history and are ready to assist
                  whenever you need us.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-6 mb-8">
                  <p className="text-lg md:text-xl font-semibold text-emerald-800 text-center">
                    💚 We&apos;ll even answer the phone if you call the old number!
                  </p>
                </div>

                {/* Contact information */}
                <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-10 shadow-2xl">
                  <h4 className="text-2xl font-bold text-center mb-8">Get in Touch</h4>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="group">
                      <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaPhone className="text-2xl" />
                      </div>
                      <div className="font-bold mb-2 text-emerald-300">Call us</div>
                      <a
                        href="tel:801-473-7548"
                        className="text-lg hover:text-emerald-300 transition-colors duration-300 block"
                      >
                        801-473-7548
                      </a>
                    </div>
                    <div className="group">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaGlobeAmericas className="text-2xl" />
                      </div>
                      <div className="font-bold mb-2 text-blue-300">Visit</div>
                      <a
                        href="https://cleancutstrees.com"
                        className="text-lg hover:text-blue-300 transition-colors duration-300 block wrap-break-word"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cleancutstrees.com
                      </a>
                    </div>
                    <div className="group">
                      <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaEnvelope className="text-2xl" />
                      </div>
                      <div className="font-bold mb-2 text-purple-300">Email</div>
                      <a
                        href="mailto:support@cleancutstrees.com"
                        className="text-lg hover:text-purple-300 transition-colors duration-300 block wrap-break-word"
                      >
                        support@cleancutstrees.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Button */}
          <section className={`text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              <button
                onClick={handleRedirect}
                className="relative bg-linear-to-r from-emerald-600 to-teal-600 text-white text-xl font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
              >
                <span className="flex items-center gap-3">
                  Visit Clean Cuts Trees Now
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
            <p className="text-gray-600 mt-6 text-lg font-medium">
              Or wait <span className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full min-w-12">{countdown}s</span> for automatic redirect
            </p>
          </section>
          </main>

          {/* Footer */}
          <footer className="text-center mt-20 pb-12">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 inline-block shadow-lg border border-emerald-100">
              <p className="text-gray-700 font-medium">
                Urban Arborist LLC
              </p>
              <p className="text-emerald-600 font-semibold mt-1">
                Now serving you as Clean Cuts Trees
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
