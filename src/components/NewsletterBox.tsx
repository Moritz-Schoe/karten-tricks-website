"use client";

export default function NewsletterBox() {
  return (
    <section className="bg-gradient-to-br from-[#2e4057] to-[#1a6b3a] rounded-2xl p-8 text-white text-center">
      <div className="text-4xl mb-3">✉️</div>
      <h2 className="text-2xl font-bold mb-2">Werde besser – Woche für Woche</h2>
      <p className="text-gray-200 mb-6 max-w-md mx-auto text-sm leading-relaxed">
        Jeden Freitag: Ein neuer Kartentrick, eine Technik, ein Tipp. Kostenlos, kein Spam.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="deine@email.de"
          className="flex-1 px-4 py-2.5 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="bg-white text-[#1a6b3a] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Anmelden
        </button>
      </form>
      <p className="text-gray-300 text-xs mt-3">
        Bereits über 500 Kartentrick-Fans dabei. Jederzeit abmeldbar.
      </p>
    </section>
  );
}
