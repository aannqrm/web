function Experience() {
  return (
    <section className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 p-6 sm:p-8 rounded-3xl shadow-xl transition-all hover:shadow-2xl hover:scale-[1.01] duration-300">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <span className="text-2xl">💼</span>
        <h2 className="text-2xl font-bold tracking-wide text-white">Досвід та проєкти</h2>
      </div>
      <div className="space-y-4">
        <div className="p-5 bg-slate-900/60 border border-slate-700/40 rounded-2xl hover:border-indigo-500/40 transition">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
            <h3 className="text-xl font-semibold text-cyan-300">
              Лабораторні роботи у НУ «Львівська політехніка»
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg">
              2025 – now
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Практичний захист інформації, аналіз мережевої безпеки, налаштування веботочення та розробка програмного забезпечення на Python, C# та React.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience