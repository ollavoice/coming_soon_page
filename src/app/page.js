export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col">

        {/* Navbar */}
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="max-w-lg  flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-[#ff5200]">
              ollavoice
            </h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 pt-12 pb-10 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Talk Freely.
              <span className="text-[#ff5200]"> Stay Safe.</span>
            </h2>

            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              Anonymous, interest-based voice conversations designed for people
              who want meaningful and judgement-free interactions.
            </p>

          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-10">
          <div className="max-w-lg mx-auto space-y-6">

            <Feature
              title="Anonymous by design"
              desc="Talk without revealing identity. Your voice and words matter — not your profile."
            />
            <Feature
              title="Voice Changing"
              desc="Your voice is treated as personal information, so we lightly modify it before matching to protect your identity."
            />

            <Feature
              title="Interest-based Matching"
              desc="Join conversations based on hobbies, passions, thoughts — not looks or profiles."
            />

            <Feature
              title="Judgement-free experience"
              desc="Built to reduce pressure, fear, and hesitation — creating space to talk openly."
            />

            <Feature
              title="Live Global Activity"
              desc="Real-time world map showing where people are connecting from, based on their IP location."
            />






          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} ollavoice. All rights reserved.
        </footer>

      </main>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-5 rounded-xl border border-gray-100 shadow-sm bg-white">
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}