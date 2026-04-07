"use client";

export default function NewsletterBox() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 p-8 text-center text-white ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D2A63C]/20 blur-3xl" aria-hidden />
      <div className="relative text-4xl mb-3">✉️</div>
      <h2 className="relative text-2xl font-bold mb-2">Werde besser - Woche für Woche</h2>
      <p className="relative text-neutral-300 mb-6 max-w-md mx-auto text-sm leading-relaxed">
        Jeden Freitag: Ein neuer Kartentrick, eine Technik, ein Tipp. Kostenlos, kein Spam.
      </p>
      <form
        className="relative flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="deine@email.de"
          className="flex-1 px-4 py-2.5 rounded-full text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#EECD5C]"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#D2A63C] to-[#EECD5C] text-neutral-900 font-bold px-6 py-2.5 rounded-full text-sm hover:brightness-110 transition-all whitespace-nowrap"
        >
          Anmelden
        </button>
      </form>
      <p className="relative text-neutral-400 text-xs mt-3">
        Bereits über 500 Kartentrick-Fans dabei. Jederzeit abmeldbar.
      </p>
    </section>
  );
}
