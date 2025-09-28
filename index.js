
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ja");
  const t = {
    ja: {
      nav:{features:"特長",cases:"事例",pricing:"料金",signup:"無料で試す"},
      hero:{title:"AIがサロン予約を24時間で自動受付", sub:"東京のサロンで実証済み。平均+30%の予約率アップ。", cta:"7日間無料"},
      problems:["営業時間外に予約できない","電話対応で時間が奪われる","着信を逃して機会損失"],
      solutions:["24/7 自動予約","Googleカレンダー連携","LINE/SMS自動リマインド"],
      cases:[
        "+33% 新規予約（横浜メンズ）",
        "夜間予約28%に（表参道カラー）",
        "無断キャンセル-41%（渋谷ネイル）"
      ],
      pricingTitle:"料金",
      starter:["Starter","¥9,800/月"],
      pro:["Pro","¥19,800/月","おすすめ"],
      form:{title:"無料トライアル", email:"メール", salon:"サロン名", submit:"登録"}
    },
    en: {
      nav:{features:"Features",cases:"Cases",pricing:"Pricing",signup:"Start Free"},
      hero:{title:"AI takes salon bookings 24/7", sub:"Proven in Tokyo. +30% average conversion uplift.", cta:"Start Free"},
      problems:["No after‑hours booking","Staff time lost on calls","Missed calls = lost clients"],
      solutions:["24/7 auto booking","Google Calendar sync","LINE/SMS reminders"],
      cases:[
        "+33% new bookings (Yokohama)",
        "28% night bookings (Omotesando)",
        "No‑shows −41% (Shibuya)"
      ],
      pricingTitle:"Pricing",
      starter:["Starter","¥9,800/mo"],
      pro:["Pro","¥19,800/mo","Most popular"],
      form:{title:"Free Trial", email:"Email", salon:"Salon", submit:"Sign up"}
    }
  }[lang];

  const formAction = "#"; // replace with Formspree if needed

  return (
    <div className="min-h-screen bg-hero-gradient text-white">
      {/* NAV (compact) */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" className="h-6 w-6" alt="SalonAI" />
            <span className="font-semibold">SalonAI</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm text-white/80">
            <a href="#features" className="hover:text-white">{t.nav.features}</a>
            <a href="#cases" className="hover:text-white">{t.nav.cases}</a>
            <a href="#pricing" className="hover:text-white">{t.nav.pricing}</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>setLang(lang==="ja"?"en":"ja")} className="text-xs px-2 py-1 rounded-full border border-white/20 hover:bg-white/10">
              {lang==="ja"?"EN":"日本語"}
            </button>
            <a href="#signup" className="hidden md:inline-flex text-xs px-3 py-2 rounded-full bg-[#0ecfff] text-black hover:opacity-90">{t.nav.signup}</a>
          </div>
        </div>
      </nav>

      {/* HERO (tighter) */}
      <header className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">{t.hero.title}</h1>
        <p className="mt-2 text-base md:text-lg text-white/70">{t.hero.sub}</p>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">+30% Conv.</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">24h Go‑live</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">−60% Phone time</span>
          <a href="#signup" className="ml-auto px-4 py-2 rounded-xl bg-[#0ecfff] text-black hover:opacity-90">{t.hero.cta}</a>
        </div>
      </header>

      {/* FEATURES (merged Problems→Solutions as single row) */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <h3 className="font-semibold mb-2">{lang==="ja"?"課題":"Problems"}</h3>
            <ul className="text-sm text-white/80 space-y-1">
              {t.problems.map((p,i)=>(<li key={i}>• {p}</li>))}
            </ul>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <h3 className="font-semibold mb-2">{lang==="ja"?"解決策":"Solutions"}</h3>
            <ul className="text-sm text-white/80 space-y-1">
              {t.solutions.map((s,i)=>(<li key={i}>• {s}</li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* CASES (compact list) */}
      <section id="cases" className="mx-auto max-w-6xl px-4 py-8 border-t border-white/10">
        <h3 className="font-semibold mb-3">{lang==="ja"?"導入事例":"Case Studies"}</h3>
        <ul className="grid md:grid-cols-3 gap-3 text-sm text-white/85">
          {t.cases.map((c,i)=>(
            <li key={i} className="rounded-lg bg-white/5 border border-white/10 p-3">{c}</li>
          ))}
        </ul>
      </section>

      {/* PRICING (very compact) */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 border-t border-white/10">
        <h3 className="font-semibold mb-3">{t.pricingTitle}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{t.starter[0]}</div>
              <div className="text-xl font-semibold">{t.starter[1]}</div>
            </div>
            <a href="#signup" className="mt-3 inline-flex px-4 py-2 rounded-lg bg-white text-black hover:opacity-90 text-sm">
              {lang==="ja"?"今すぐ":"Choose"}
            </a>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/20 p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{t.pro[0]} <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white text-black">{t.pro[2]}</span></div>
              <div className="text-xl font-semibold">{t.pro[1]}</div>
            </div>
            <a href="#signup" className="mt-3 inline-flex px-4 py-2 rounded-lg bg-[#0ecfff] text-black hover:opacity-90 text-sm">
              {lang==="ja"?"今すぐ":"Choose"}
            </a>
          </div>
        </div>
      </section>

      {/* SIGNUP (compact form: only email + salon) */}
      <section id="signup" className="mx-auto max-w-3xl px-4 py-10 border-t border-white/10">
        <div className="rounded-2xl bg-white/10 border border-white/20 p-6">
          <h3 className="text-xl font-semibold">{t.form.title}</h3>
          <form className="mt-4 grid md:grid-cols-3 gap-3" action={formAction} method="POST">
            <input name="email" type="email" placeholder={t.form.email} className="rounded-lg bg-white/5 border border-white/20 px-3 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0ecfff]" />
            <input name="salon" placeholder={t.form.salon} className="rounded-lg bg-white/5 border border-white/20 px-3 py-2 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0ecfff]" />
            <button className="rounded-lg bg-[#0ecfff] text-black px-4 py-2 hover:opacity-90">{t.form.submit}</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-white/60 text-xs py-6 border-t border-white/10">© 2025 SalonAI</footer>
    </div>
  );
}
