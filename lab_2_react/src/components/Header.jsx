// Крок 3.1: ІМПОРТ ФОТОГРАФІЇ
// Змініть './../assets/my_photo.jpg' на шлях до ВАШОГО файлу в папці assets
import MyPhoto from '/Users/a55555/Downloads/photo_2026-10-15 12.10.37.jpeg' // Імпорт фото

function Header() {
  return (
    <header className="relative overflow-hidden bg-slate-800/80 backdrop-blur-md border border-slate-700/60 p-8 rounded-3xl shadow-2xl transition hover:border-indigo-500/50">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        
        {/* Крок 3.2: ВИКОРИСТАННЯ ФОТОГРАФІЇ ЗАМІСТЬ ТЕКСТОВОГО АВАТАРА */}
        {/* Ми прибираємо старий текстовий блок і додаємо тег <img> із стилями */}
        <div className="w-24 h-24 rounded-full bg-slate-700 overflow-hidden border-2 border-slate-600 ring-4 ring-indigo-500/30 flex items-center justify-center shadow-lg transition duration-300 hover:scale-110">
          <img 
            src={MyPhoto} 
            alt="Земська Анна-Марія" // Атрибут alt обов'язковий!
            className="w-full h-full object-cover" // Класи object-cover та object-center забезпечать гарне відображення фото будь-якої пропорції
          />
        </div>

        <div className="text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
            Земська Анна-Марія
          </h1>
          <p className="text-lg font-medium text-cyan-400 tracking-wide">
            Фахівчиня з інформаційної безпеки (Cybersecurity Specialist)
          </p>
          <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-300">
            <a 
              href="mailto:zemska.anna-mariia.kb.2025@lpnu.com" 
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-600 rounded-xl transition duration-200"
            >
              ✉️ zemska.anna-mariia.kb.2025@lpnu.com
            </a>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 border border-slate-600 rounded-xl">
              🎓 НУ «Львівська політехніка»
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header