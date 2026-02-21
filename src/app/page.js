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
              <p className="text-sm text-gray-500 mt-2">
                Voice-only. One person at a time.
              </p>
            </h2>

            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              Anonymous, interest-based 1-on-1 voice conversations.
              No video. No profiles. Just real conversations.
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
              title="No Personal Labels"
              desc="We don’t ask for gender, photos, or personal details. Conversations start with shared interests — nothing else."
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
              title="Secure Sign-In"
              desc="Google sign-in is used only to prevent bots and abuse. Your name, email, and identity are never visible to other users."
            />
            <Feature
              title="Voice Changing"
              desc="Your voice is personal information. To protect your identity, we apply a slight voice change before matching, keeping you anonymous while still sounding natural."
            />
            <Feature
              title="Instant Leave & Report"
              desc="End any conversation immediately with one tap. Report inappropriate behavior instantly — no explanations required."
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