"use client"

import { useMemo, useState } from "react"

const nav = ["Command Center", "Idea Vault", "Content Pipeline", "Daily Kits", "Publishing", "Insights", "Affiliate OS"]
const metrics = [
  { label: "Signals captured", value: "184", delta: "+28.4%", tone: "cyan" },
  { label: "Content in orbit", value: "27", delta: "+6 this week", tone: "violet" },
  { label: "Revenue influenced", value: "$8,420", delta: "+18.7%", tone: "lime" },
]
const pipeline = [
  { title: "The quiet power of a one-person media lab", type: "ESSAY", status: "Drafting", color: "violet" },
  { title: "5 tools that make your content feel inevitable", type: "THREAD", status: "Ready to publish", color: "cyan" },
  { title: "Affiliate stack teardown: September edition", type: "VIDEO", status: "Needs review", color: "lime" },
  { title: "What I learned from 30 days of shipping daily", type: "NEWSLETTER", status: "Idea", color: "violet" },
]

export default function Home() {
  const [active, setActive] = useState("Command Center")
  const [range, setRange] = useState("7D")
  const [running, setRunning] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const visiblePipeline = useMemo(() => showAll ? pipeline : pipeline.slice(0, 3), [showAll])

  function runJarvis() {
    setRunning(true)
    window.setTimeout(() => setRunning(false), 1800)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px]">
        <aside className="hidden w-64 shrink-0 border-r border-[var(--line)] px-5 py-7 lg:flex lg:flex-col">
          <div className="mb-12 flex items-center gap-3"><span className="flex size-9 items-center justify-center border border-[var(--cyan)] text-sm font-bold text-[var(--cyan)]">GB</span><div><p className="font-mono text-xs tracking-[.24em] text-[var(--cyan)]">LAB HQ</p><p className="text-xs text-[var(--muted)]">geekerboogin</p></div></div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[.22em] text-[var(--muted)]">Workspace</p>
          <nav className="flex flex-col gap-1" aria-label="Primary navigation">{nav.map((item, index) => <button key={item} onClick={() => setActive(item)} className={`flex items-center gap-3 px-3 py-3 text-left text-sm transition ${active === item ? "border-l-2 border-[var(--cyan)] bg-[var(--panel-2)] text-[var(--cyan)]" : "border-l-2 border-transparent text-[var(--muted)] hover:text-foreground"}`}><span className="font-mono text-[10px] opacity-60">0{index + 1}</span>{item}</button>)}</nav>
          <div className="mt-auto border-t border-[var(--line)] pt-5"><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[var(--muted)]">System status</p><div className="mt-3 flex items-center gap-2 text-xs"><span className="size-2 rounded-full bg-[var(--lime)] shadow-[0_0_10px_var(--lime)]" />All systems nominal</div><p className="mt-2 font-mono text-[10px] text-[var(--muted)]">SYNCED 09:42:18 UTC</p></div>
        </aside>
        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-5 border-b border-[var(--line)] pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-[11px] uppercase tracking-[.25em] text-[var(--cyan)]">/ {active}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Good morning, Jordan<span className="text-[var(--cyan)]">.</span></h1><p className="mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">Your creative signal is clean. Here&apos;s what is moving through the lab today.</p></div><button onClick={runJarvis} disabled={running} className="border border-[var(--cyan)] bg-[var(--cyan)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:shadow-[0_0_24px_rgba(71,230,211,.28)] disabled:cursor-wait disabled:opacity-70">{running ? "JARVIS IS RUNNING..." : "RUN JARVIS"}</button></header>
          <div className="grid gap-3 py-7 md:grid-cols-3">{metrics.map((metric) => <article key={metric.label} className="panel panel-hover scanline p-5"><div className="flex items-start justify-between"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">{metric.label}</p><span className="size-2 rounded-full" style={{ backgroundColor: `var(--${metric.tone})` }} /></div><p className="mt-5 text-3xl font-semibold tracking-tight">{metric.value}</p><p className="mt-2 font-mono text-xs text-[var(--${metric.tone})]">{metric.delta}</p></article>)}</div>
          <div className="grid gap-5 xl:grid-cols-[1.55fr_1fr]"><section className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--muted)]">Content orbit</p><h2 className="mt-2 text-xl font-semibold">Pipeline momentum</h2></div><div className="flex border border-[var(--line)] p-1">{["7D", "30D", "90D"].map((item) => <button key={item} onClick={() => setRange(item)} className={`px-3 py-1 font-mono text-[10px] ${range === item ? "bg-[var(--cyan)] text-[var(--background)]" : "text-[var(--muted)]"}`}>{item}</button>)}</div></div><div className="mt-7 flex h-32 items-end gap-2 border-b border-[var(--line)] pb-0">{[38,52,45,70,61,84,76,94,72,88,98,83,100,91,96,100,86,100,95,100].map((height, i) => <div key={i} className="group flex flex-1 flex-col justify-end gap-2"><div className="w-full bg-[var(--cyan)] opacity-70 transition group-hover:opacity-100" style={{ height: `${height}%` }} /></div>)}</div><div className="mt-7 flex flex-col gap-1">{visiblePipeline.map((item) => <div key={item.title} className="panel-hover flex flex-col gap-3 border-b border-[var(--line)] py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: `var(--${item.color})` }} /><p className="truncate text-sm">{item.title}</p></div><div className="flex items-center gap-3 pl-5 sm:pl-0"><span className="font-mono text-[10px] text-[var(--muted)]">{item.type}</span><span className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted)]">{item.status}</span></div></div>)}</div><button onClick={() => setShowAll(!showAll)} className="mt-5 font-mono text-[10px] uppercase tracking-[.16em] text-[var(--cyan)]">{showAll ? "Collapse pipeline ←" : "View all pipeline →"}</button></section>
            <section className="flex flex-col gap-5"><article className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--muted)]">Daily signal</p><h2 className="mt-2 text-xl font-semibold">Today&apos;s kit</h2></div><span className="font-mono text-xs text-[var(--lime)]">09 / 03 / 26</span></div><div className="mt-6 border-l border-[var(--violet)] pl-4"><p className="text-sm leading-6">The best content systems don&apos;t create more noise. They create a repeatable way to notice what matters.</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[.14em] text-[var(--violet)]">Signal of the day</p></div><div className="mt-6 flex gap-2"><span className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted)]">#systems</span><span className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted)]">#creative-work</span></div></article><article className="panel p-5 sm:p-6"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--muted)]">Automation pulse</p><div className="mt-5 flex flex-col gap-4"><div className="flex items-center justify-between"><div><p className="text-sm">Morning intelligence scan</p><p className="mt-1 font-mono text-[10px] text-[var(--muted)]">Completed 08:15</p></div><span className="font-mono text-[10px] text-[var(--lime)]">DONE</span></div><div className="flex items-center justify-between"><div><p className="text-sm">Affiliate link audit</p><p className="mt-1 font-mono text-[10px] text-[var(--muted)]">Next run in 2h 14m</p></div><span className="font-mono text-[10px] text-[var(--cyan)]">QUEUED</span></div></div></article></section></div>
          <footer className="flex flex-col gap-3 py-8 font-mono text-[10px] uppercase tracking-[.15em] text-[var(--muted)] sm:flex-row sm:justify-between"><span>GB-LAB / CORE-01</span><span>Built for signal, not noise.</span></footer>
        </section>
      </div>
    </main>
  )
}
