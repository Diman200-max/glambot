
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ja");
  const t = {
    ja: {
      nav: { features: "特長", cases: "導入事例", pricing: "料金", register: "無料で試す" },
      hero: {
        badge: "新規予約 × リピートを自動化",
        title: "AIがサロン予約を24時間365日で受付",
        subtitle:
          "東京のサロンで実証済み。電話・LINE・Webからの予約を自動化し、売上と予約率を平均30%向上。",
        cta1: "7日間 無料トライアル",
        cta2: "1分デモを見る"
      },
      problemTitle: "こんなお悩みありませんか？",
      problems: [
        "営業時間外に予約できない",
        "スタッフが電話対応で疲弊",
        "着信を逃して機会損失"
      ],
      solutionTitle: "私たちの解決策",
      solutions: [
        "24/7 自動予約（音声/LINE/Web）",
        "Googleカレンダー連携でダブルブッキング防止",
        "LINE・SMSで自動リマインド",
        "日本語 / 英語 / ロシア語対応"
      ],
      casesTitle: "導入事例",
      cases: [
        { h: "表参道・カラー特化", p: "夜間予約が28%。電話対応を週6時間削減。" },
        { h: "横浜・メンズカット", p: "新規予約 +33%。同じ広告費で売上 +18%。" },
        { h: "渋谷・ネイル", p: "無断キャンセル -41%。再来率が改善。" }
      ],
      pricingTitle: "料金プラン",
      plan1: { name: "Starter", price: "¥9,800/月", features: ["音声/LINE/Web 予約", "Googleカレンダー連携", "リマインド 300通/月", "メールサポート"] },
      plan2: { name: "Pro", price: "¥19,800/月", most: "おすすめ", features: ["Starterの全機能", "通話録音/要約レポート", "リマインド 1,000通/月", "優先サポート"] },
      formTitle: "無料トライアル登録",
      name: "お名前",
      salon: "サロン名",
      phone: "電話番号",
      email: "メールアドレス",
      submit: "登録してはじめる",
      foot: "日本のサロンのために設計"
    },
    en: {
      nav: { features: "Features", cases: "Case Studies", pricing: "Pricing", register: "Start Free" },
      hero: {
        badge: "Automate new & repeat bookings",
        title: "AI takes your salon bookings 24/7",
        subtitle:
          "Proven in Tokyo salons. Turn Calls + LINE + Web into confirmed bookings. Average +30% conversion uplift.",
        cta1: "Start 7‑day Free Trial",
        cta2: "Watch 1‑min Demo"
      },
      problemTitle: "Do you face these issues?",
      problems: [
        "No bookings outside business hours",
        "Staff time burned on phone calls",
        "Missed calls = lost customers"
      ],
      solutionTitle: "Our Solution",
      solutions: [
        "24/7 automated booking (Voice/LINE/Web)",
        "Google Calendar sync — no double-booking",
        "Auto reminders via LINE/SMS",
        "Japanese / English / Russian support"
      ],
      casesTitle: "Case Studies",
      cases: [
        { h: "Omotesando – Color-first", p: "28% bookings at night. ~6h/week phone time saved." },
        { h: "Yokohama – Men’s cuts", p: "+33% new bookings. +18% MoM revenue, same ad spend." },
        { h: "Shibuya – Nail studio", p: "No‑shows down 41%. Better repeat rates." }
      ],
      pricingTitle: "Pricing",
      plan1: { name: "Starter", price: "¥9,800/mo", features: ["Bookings (Voice/LINE/Web)", "Google Calendar sync", "Reminders 300/mo", "Email support"] },
      plan2: { name: "Pro", price: "¥19,800/mo", most: "Most popular", features: ["All Starter features", "Call recording & summaries", "Reminders 1,000/mo", "Priority support"] },
      formTitle: "Register for Free Trial",
      name: "Your name",
      salon: "Salon name",
      phone: "Phone",
      email: "Email",
      submit: "Create my trial",
      foot: "Designed for salons in Japan"
    }
  }[lang];

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
  const formAction = formspreeId ? `https://formspree.io/f/${formspreeId}` : "#";

  return (
    <div className="min-h-screen bg-hero-gradient text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="SalonAI" className="h-8 w-8" />
            <span className="font-semibold tracking-tight">SalonAI</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">{t.nav.features}</a>
            <a href="#cases" className="hover:text-white">{t.nav.cases}</a>
            <a href="#pricing" className="hover:text-white">{t.nav.pricing}</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "ja" ? "en" : "ja")} className="text-xs px-3 py-1 rounded-full border border-white/20 hover:bg-white/10">
              {lang === "ja" ? "EN" : "日本語"}
            </button>
            <a href="#signup" className="hidden md:inline-flex text-sm px-4 py-2 rounded-full bg-brand-400 text-black hover:bg-brand-300">
              {t.nav.register}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-7xl px-4 pt-16 pb-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-white/20 bg-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> {t.hero.badge}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#signup" className="px-5 py-3 rounded-xl bg-brand-400 text-black hover:bg-brand-300 shadow-soft">{t.hero.cta1}</a>
            <a href="#signup" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">{t.hero.cta2}</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[["+30%","Conv."],["-60%","Phone time"],["24h","Go‑live"]].map((s,i)=>(
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-semibold">{s[0]}</div>
                <div className="text-xs text-white/60">{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl blur-2xl bg-[radial-gradient(40%_60%_at_70%_30%,rgba(0,208,255,0.25),transparent),radial-gradient(30%_40%_at_30%_70%,rgba(155,81,224,0.25),transparent)]" />
          <div className="relative rounded-3xl border border-white/15 bg-white/5 shadow-soft p-6">
            <div className="aspect-[10/16] rounded-2xl bg-gradient-to-br from-[#0f1220] to-[#121735] grid place-items-center">
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-white/60">AI Voice • LINE • Web</div>
                <div className="text-2xl font-semibold mt-2">Demo Preview</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-black/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">{lang==="ja"?"サロン運営の“手間”をゼロへ":"Zero admin, more bookings"}</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {t.solutions.map((f,i)=>(
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-xl bg-white/20 mb-4" />
                <h3 className="font-semibold text-lg">{f.split(" ")[0]}{f.startsWith("24/7")?"":" "}</h3>
                <p className="mt-2 text-sm text-white/70">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">{t.casesTitle}</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {t.cases.map((c,i)=>(
              <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/30 to-cyan-400/20 p-6">
                <div className="aspect-[16/10] rounded-xl bg-white/10 mb-4" />
                <h3 className="font-semibold">{c.h}</h3>
                <p className="mt-2 text-sm text-white/80">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-black/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">{t.pricingTitle}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.plan1.name}</h3>
                <div className="text-2xl font-semibold">{t.plan1.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {t.plan1.features.map((f,i)=>(<li key={i} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/70" />{f}</li>))}
              </ul>
              <a href="#signup" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-brand-400 text-black hover:bg-brand-300">{
                lang==="ja"?"無料で試す":"Start Free"
              }</a>
            </div>
            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-8 shadow-soft">
              <div className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-white text-black border border-black/10">{t.plan2.most}</div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.plan2.name}</h3>
                <div className="text-2xl font-semibold">{t.plan2.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white">
                {t.plan2.features.map((f,i)=>(<li key={i} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white" />{f}</li>))}
              </ul>
              <a href="#signup" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-white text-black hover:bg-white/90">{lang==="ja"?"無料で試す":"Start Free"}</a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 md:p-12 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{t.formTitle}</h3>
                <p className="mt-3 text-sm text-white/80">{lang==="ja"?"登録は1分。クレカ不要。":"Takes 1 minute. No credit card required."}</p>
                <form className="mt-6 grid gap-3" action={formAction} method="POST">
                  <input name="name" placeholder={t.name} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="salon" placeholder={t.salon} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="phone" placeholder={t.phone} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="email" type="email" placeholder={t.email} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <button className="mt-2 rounded-xl bg-brand-400 text-black px-5 py-3 hover:bg-brand-300">{t.submit}</button>
                </form>
              </div>
              <div className="border border-dashed border-white/20 rounded-2xl p-6">
                <div className="text-sm text-white/70">{lang==="ja"?"店内POP/名刺から即登録":"Register from in‑store POP/cards"}</div>
                <div className="mt-2 aspect-square rounded-xl bg-white/5 grid place-items-center">
                  <div className="text-xs text-white/60 text-center px-4">QR code placeholder\n(配布用フライヤー/名刺に最適)</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  <li>• {lang==="ja"?"LINEやメールでURL共有":"Share URL via LINE or email"}</li>
                  <li>• Vercel-ready</li>
                  <li>• Formspree / Sheets 連携可</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm text-white/70">{t.foot}</div>
          <div className="text-sm text-right text-white/60">© 2025 SalonAI</div>
        </div>
      </footer>
    </div>
  );
}
