"use client";

export default function NewsletterBox() {
  return (
    <section className="bg-gradient-to-br from-[#1A1B26] to-[#4C1D95] rounded-[16px] p-8 text-white text-center">
      <h2 className="text-2xl font-medium mb-2 font-[family-name:var(--font-inter)]">Werde besser &ndash; Woche f&uuml;r Woche</h2>
      <p className="text-slate-300 mb-6 max-w-md mx-auto text-sm leading-relaxed">
        Jeden Freitag: Ein neuer Kartentrick, eine Technik, ein Tipp. Kostenlos, kein Spam.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="deine@email.de"
          className="flex-1 h-[44px] px-4 rounded-[8px] text-slate-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#A78BFA] placeholder:text-slate-400"
          required
        />
        <button
          type="submit"
          className="bg-[#F97316] text-white font-medium h-[44px] px-6 rounded-[8px] text-sm hover:bg-[#EA580C] transition-colors whitespace-nowrap font-[family-name:var(--font-inter)]"
        >
          Anmelden
        </button>
      </form>
      <p className="text-slate-400 text-xs mt-3">
        Bereits über 500 Kartentrick-Fans dabei. Jederzeit abmeldbar.
      </p>
    </section>
  );
}
