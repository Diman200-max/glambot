
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ja");

  const t = {
    ja: {
      nav: { features: "特長", pricing: "料金", cases: "導入事例", signup: "無料で試す" },
      hero: {
        badge: "新規予約 × リピートを自動化",
        title: "サロン予約、AIが24時間365日で受付",
        subtitle:
          "東京のサロンで実証済み。着信・LINE・Webからの予約を自動化し、売上と予約率を平均30%向上。",
        ctaPrimary: "7日間 無料トライアル",
        ctaSecondary: "1分でデモを見る",
        trust: "すでに複数のサロンに導入済み"
      },
      stats: {
        a: { label: "予約率アップ", value: "+30%" },
        b: { label: "電話対応の削減", value: "-60%" },
        c: { label: "導入まで", value: "24時間" }
      },
      features: {
        title: "サロン運営の“手間”をゼロへ",
        items: [
          { h: "24/7 自動受付", p: "営業時間外も逃さない。AI音声＆Web/LINEで予約を受付。" },
          { h: "Googleカレンダー連携", p: "ダブルブッキング防止、既存の運用をそのまま。" },
          { h: "多言語対応", p: "日本語 / 英語 / ロシア語。インバウンドにも対応。" },
          { h: "自動リマインド", p: "LINE・SMS・メールで来店前にリマインド、ドタキャンを軽減。" },
          { h: "通話→予約化", p: "AIが電話内容を解析し、空き枠へ即時アサイン。" },
          { h: "レポート", p: "日次/週次で予約数・新規率・離脱率を可視化。" }
        ]
      },
      cases: {
        title: "導入事例",
        cards: [
          { h: "表参道・カラー特化サロン", p: "夜間予約が全体の28%に。スタッフの電話対応は週あたり6時間削減。" },
          { h: "横浜・メンズカット", p: "新規予約率 +33%。広告費は据え置きで売上が前月比+18%。" },
          { h: "渋谷・ネイルサロン", p: "リマインド導入で無断キャンセル-41%。再来率が改善。" }
        ]
      },
      pricing: {
        title: "料金プラン",
        note: "まずは7日間の無料トライアルから",
        basic: {
          name: "Starter",
          price: "¥9,800/月",
          features: ["予約受付（音声/LINE/Web）", "Googleカレンダー連携", "自動リマインド 300通/月", "メールサポート"]
        },
        pro: {
          name: "Pro",
          price: "¥19,800/月",
          features: ["すべてのStarter機能", "通話録音/要約レポート", "自動リマインド 1,000通/月", "優先サポート"],
          badge: "おすすめ"
        }
      },
      form: {
        title: "無料トライアルに登録",
        name: "お名前",
        salon: "サロン名",
        phone: "電話番号",
        email: "メールアドレス",
        submit: "登録してはじめる",
        small: "登録は1分。クレジットカード不要。"
      },
      footer: { made: "日本のサロンのために設計", rights: "© 2025 SalonAI" }
    },
    en: {
      nav: { features: "Features", pricing: "Pricing", cases: "Case Studies", signup: "Start Free" },
      hero: {
        badge: "Automate new & repeat bookings",
        title: "AI takes your salon bookings 24/7",
        subtitle:
          "Proven in Tokyo salons. Turn calls, LINE and Web into confirmed bookings, boosting revenue and conversion by 30% on average.",
        ctaPrimary: "Start 7‑day free trial",
        ctaSecondary: "Watch 1‑min demo",
        trust: "Already live in multiple salons"
      },
      stats: {
        a: { label: "Conversion lift", value: "+30%" },
        b: { label: "Less phone time", value: "-60%" },
        c: { label: "Go‑live in", value: "24h" }
      },
      features: {
        title: "Zero admin, more bookings",
        items: [
          { h: "24/7 intake", p: "Don’t miss after‑hours. Voice, Web & LINE auto‑booking." },
          { h: "Google Calendar", p: "No double‑booking. Keep your current workflow." },
          { h: "Multilingual", p: "Japanese / English / Russian. Great for inbound guests." },
          { h: "Auto‑reminders", p: "LINE/SMS/Email to cut no‑shows." },
          { h: "Calls → bookings", p: "AI parses calls and assigns to free slots instantly." },
          { h: "Reports", p: "Daily/weekly metrics: bookings, new ratio, drop‑offs." }
        ]
      },
      cases: {
        title: "Case Studies",
        cards: [
          { h: "Omotesando – Color‑first salon", p: "28% of bookings now at night. ~6h/week phone time saved." },
          { h: "Yokohama – Men’s cuts", p: "+33% new bookings. +18% MoM revenue with same ad spend." },
          { h: "Shibuya – Nail studio", p: "No‑shows down 41% via reminders. Better repeat rates." }
        ]
      },
      pricing: {
        title: "Pricing",
        note: "Start with a 7‑day free trial",
        basic: {
          name: "Starter",
          price: "¥9,800/mo",
          features: ["Bookings (Voice/LINE/Web)", "Google Calendar sync", "Auto reminders 300/mo", "Email support"]
        },
        pro: {
          name: "Pro",
          price: "¥19,800/mo",
          features: ["All Starter features", "Call recording & summaries", "Auto reminders 1,000/mo", "Priority support"],
          badge: "Most popular"
        }
      },
      form: {
        title: "Register for free trial",
        name: "Your name",
        salon: "Salon name",
        phone: "Phone",
        email: "Email",
        submit: "Create my trial",
        small: "Takes 1 minute. No credit card required."
      },
      footer: { made: "Designed for salons in Japan", rights: "© 2025 SalonAI" }
    }
  }[lang];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            <button onClick={() => scrollTo('features')} className="hover:text-white">{t.nav.features}</button>
            <button onClick={() => scrollTo('cases')} className="hover:text-white">{t.nav.cases}</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-white">{t.nav.pricing}</button>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')} className="text-xs px-3 py-1 rounded-full border border-white/20 hover:bg-white/10">
              {lang === 'ja' ? 'EN' : '日本語'}
            </button>
            <button onClick={() => scrollTo('signup')} className="hidden md:inline-flex text-sm px-4 py-2 rounded-full bg-brand-400 text-black hover:opacity-90">
              {t.nav.signup}
            </button>
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
            <a href="#signup" className="px-5 py-3 rounded-xl bg-brand-400 text-black hover:opacity-90 shadow-soft">{t.hero.ctaPrimary}</a>
            <a href="#signup" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">{t.hero.ctaSecondary}</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[ [t.stats.a.value, t.stats.a.label], [t.stats.b.value, t.stats.b.label], [t.stats.c.value, t.stats.c.label] ].map((s,i)=>(
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl font-semibold">{s[0]}</div>
                <div className="text-xs text-white/60">{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
  <div className="absolute -inset-4 rounded-3xl blur-xl bg-[radial-gradient(40%_60%_at_70%_30%,rgba(0,208,255,0.18),transparent),radial-gradient(30%_40%_at_30%_70%,rgba(155,81,224,0.18),transparent)]" />
  <div className="relative rounded-3xl border border-white/15 bg-white/5 shadow-soft p-4 md:p-5">
    <div className="mx-auto max-w-[260px] md:max-w-[300px] aspect-[10/16] rounded-2xl bg-gradient-to-br from-[#0f1220] to-[#121735] grid place-items-center">
      <div className="text-center">
        <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60">AI Voice • LINE • Web</div>
        <div className="text-lg md:text-xl font-semibold mt-2">Demo Preview</div>
      </div>
    </div>
  </div>
</div>
      </header>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-black/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">{t.features.title}</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {t.features.items.map((f, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-xl bg-white/20 mb-4" />
                <h3 className="font-semibold text-lg">{f.h}</h3>
                <p className="mt-2 text-sm text-white/70">{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">{t.cases.title}</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {t.cases.cards.map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/30 to-cyan-400/20 p-6">
                <div className="aspect-[16/10] rounded-xl bg-white/10" />
                <h3 className="mt-4 font-semibold">{c.h}</h3>
                <p className="mt-2 text-sm text-white/80">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-black/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t.pricing.title}</h2>
            <p className="mt-3 text-white/70">{t.pricing.note}</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Basic */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.pricing.basic.name}</h3>
                <div className="text-2xl font-semibold">{t.pricing.basic.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {t.pricing.basic.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />{f}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-brand-400 text-black hover:opacity-90">{t.nav.signup}</a>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl border border-white/20 bg-white/10 p-8 shadow-soft">
              <div className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-white text-black border border-black/10">{t.pricing.pro.badge}</div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.pricing.pro.name}</h3>
                <div className="text-2xl font-semibold">{t.pricing.pro.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white">
                {t.pricing.pro.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />{f}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-white text-black hover:bg-white/90">{t.nav.signup}</a>
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
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{t.form.title}</h3>
                <p className="mt-3 text-sm text-white/80">{t.form.small}</p>
                <form className="mt-6 grid gap-3" action="#" method="POST">
                  <input name="name" placeholder={t.form.name} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="salon" placeholder={t.form.salon} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="phone" placeholder={t.form.phone} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <input name="email" type="email" placeholder={t.form.email} className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <button className="mt-2 rounded-xl bg-brand-400 text-black px-5 py-3 hover:opacity-90">{t.form.submit}</button>
                </form>
              </div>
              <div className="border border-dashed border-white/20 rounded-2xl p-6">
                <div className="text-sm text-white/70">{lang==="ja"?"店内POP/名刺から即登録":"Register instantly from in‑store POP/cards"}</div>
                <div className="mt-2 aspect-square rounded-xl bg-white/5 grid place-items-center">
                  <div className="text-xs text-white/60 text-center px-4">QR code placeholder{"\\n"}(配布用フライヤー/名刺に最適)</div>
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
          <div className="text-sm text-white/70">{t.footer.made}</div>
          <div className="text-sm text-right text-white/60">{t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
