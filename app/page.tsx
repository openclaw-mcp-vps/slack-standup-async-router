export default function Home() {
  const faqs = [
    {
      q: 'How does the AI routing work?',
      a: 'StandupRouter reads each standup message, classifies content into blockers, updates, and wins, then cross-posts to the channels you configure — no manual copy-paste needed.'
    },
    {
      q: 'Do you store our Slack messages?',
      a: 'Messages are processed in real-time and never persisted. Only your routing configuration is stored.'
    },
    {
      q: 'Can I customize which channels receive which content?',
      a: 'Yes. The dashboard lets you map each category (blockers, updates, wins) to any public or private channel in your workspace.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Slack Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route async standup updates<br />
          <span className="text-[#58a6ff]">to the right channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          StandupRouter connects to Slack, analyzes standup messages with AI, and automatically cross-posts blockers, updates, and wins to the channels that need them — in real-time.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For engineering managers &amp; scrum masters at 10–100 person teams.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { emoji: '🚧', label: 'Blockers', desc: 'Routed to your #blockers or on-call channel instantly.' },
            { emoji: '📋', label: 'Updates', desc: 'Forwarded to stakeholder channels so no one misses context.' },
            { emoji: '🎉', label: 'Wins', desc: 'Celebrated in #wins to keep morale high automatically.' }
          ].map(({ emoji, label, desc }) => (
            <div key={label} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <div className="text-2xl mb-2">{emoji}</div>
              <div className="font-semibold text-white mb-1">{label}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              'Unlimited standup messages',
              'AI-powered category routing',
              'Custom channel mapping',
              'Real-time Slack webhooks',
              'Routing analytics dashboard'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} StandupRouter. All rights reserved.
      </footer>
    </main>
  )
}
