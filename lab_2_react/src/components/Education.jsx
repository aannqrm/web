function Education() {
  const skills = ['Python', 'C#', 'HTML5 / CSS3', 'React', 'Git / GitHub', 'Cybersecurity', 'Vite', 'Tailwind CSS'];

  return (
    <section className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 p-6 sm:p-8 rounded-3xl shadow-xl transition-all hover:shadow-2xl hover:scale-[1.01] duration-300">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <span className="text-2xl">🎓</span>
        <h2 className="text-2xl font-bold tracking-wide text-white">Освіта та навички</h2>
      </div>
      
      <div className="mb-6 space-y-2 text-slate-300">
        <p><strong className="text-white">Університет:</strong> НУ «Львівська політехніка»</p>
        <p><strong className="text-white">Спеціальність:</strong> Кібербезпека та захист інформації</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Ключові технології:</h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3.5 py-1.5 bg-indigo-950/80 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-indigo-500/30 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md cursor-default hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education