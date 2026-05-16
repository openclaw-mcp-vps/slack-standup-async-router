import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupRouter — Route async standup updates to right channels',
  description: 'Analyzes standup messages and automatically routes blockers to relevant team channels, updates to stakeholders, wins to celebration channels.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d44fe1cc-8308-45d9-95ab-52c4190ff148"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
