"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "https://cleancutstrees.com";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://cleancutstrees.com";
  };

  return (
    <div className="min-h-screen w-full pt-2 bg-linear-to-br from-primary to-black">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mx-auto max-w-2xl">
            <p className="text-sm text-yellow-700">
              🕒 Redirecting to cleancutstrees.com in{" "}
              <strong>{countdown}</strong> seconds...
            </p>
          </div>
      <div className="w-full mx-auto px-4 py-4">
        {/* Header */}
        <header className="text-center w-full mb-12 pt-8">
          <div className="bg-white w-full rounded-lg shadow-lg p-6 inline-block mb-6">
            <h1 className="text-4xl font-bold text-tree-green mb-2">
              Urban Arborist Is Now Part of
            </h1>
            <div className="flex items-center justify-center gap-4 mb-2">
              <h2 className="text-5xl font-bold text-clean-green">
                Clean Cuts Trees
              </h2>
            </div>
            <div className="flex justify-center mt-4">
              <Image
                src="/cleancutslogo.avif"
                alt="Clean Cuts Trees Logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
          
        </header>

        <main className="max-w-4xl mx-auto">
          {/* Main announcement */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We&apos;re excited to announce that Urban Arborist has joined
              forces with Clean Cuts Trees!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              After years of serving the community with expert tree care, Mike
              and the team at Urban Arborists have entrusted Clean Cuts Trees to
              continue providing the same high-quality service and care that
              you&apos;ve come to expect.
            </p>
          </section>

          {/* What this means section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-tree-green mb-6">
              What This Means for You
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  
                </h4>
                <p className="text-gray-700">
                  The team at Clean Cuts Trees shares Urban Arborist&apos;s
                  commitment to professionalism, safety, and exceptional
                  results.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Expanded resources
                </h4>
                <p className="text-gray-700">
                  With our crews and state-of-the-art equipment, we&apos;re able
                  to serve you even faster and more efficiently.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-clean-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Same local roots
                </h4>
                <p className="text-gray-700">
                  We&apos;ll continue to provide expert tree trimming, removals,
                  and care in your area—just under the Clean Cuts Trees name.
                </p>
              </div>
            </div>
          </section>

          {/* About Clean Cuts Trees */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-tree-green mb-4">
              About Clean Cuts Trees
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Clean Cuts Trees is a trusted, locally owned tree care company
              offering professional trimming, removals, stump grinding, and
              emergency services. Our licensed and insured crews are dedicated
              to keeping your property safe, beautiful, and well-maintained.
            </p>
          </section>

          {/* We're here to help */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-tree-green mb-4">
              We&apos;re Here to Help
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you were an Urban Arborist customer, you don&apos;t need to do
              a thing — we have your service history and are ready to assist
              whenever you need us.
            </p>
            <p className="text-lg font-semibold text-clean-green mb-6">
              We&apos;ll even answer the phone if you call the old number!
            </p>

            {/* Contact information */}
            <div className="bg-primary text-white rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📞</div>
                  <div className="font-bold mb-1">Call us:</div>
                  <a
                    href="tel:801-473-7548"
                    className="text-lg hover:underline"
                  >
                    801-473-7548
                  </a>
                </div>
                <div>
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="font-bold mb-1">Visit:</div>
                  <a
                    href="https://cleancutstrees.com"
                    className="text-lg hover:underline"
                  >
                    cleancutstrees.com
                  </a>
                </div>
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-bold mb-1">Email:</div>
                  <a
                    href="mailto:support@cleancutstrees.com"
                    className="text-lg hover:underline"
                  >
                    support@cleancutstrees.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Button */}
          <section className="text-center">
            <button
              onClick={handleRedirect}
              className="btn btn-primary text-xl px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Visit Clean Cuts Trees Now →
            </button>
            <p className="text-white/80 mt-4">
              Or wait {countdown} seconds for automatic redirect
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <div className="bg-white/10 rounded-lg p-4 inline-block">
            <p className="text-white/80 text-sm">
              Urban Arborist LLC • Now serving you as Clean Cuts Trees
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
