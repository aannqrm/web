import { useState, useEffect } from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 7 && hour < 21) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 p-4 sm:p-8 font-sans ${
      theme === 'dark' 
        ? 'bg-slate-900 text-slate-100' 
        : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-700 bg-slate-800 text-cyan-400 hover:bg-slate-700 transition cursor-pointer"
          >
            Режим: {theme === 'dark' ? 'Нічний 🌙' : 'Денний ☀️'}
          </button>
        </div>
        <Header />
        <main className="space-y-6">
          <Experience />
          <Education />
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  )
}

export default App