import { useState, useEffect } from 'react'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

 useEffect(() => {
  const timer = setTimeout(() => {
    setIsOpen(true)
  }, 60000) // 1000 мс замість 60000
  return () => clearTimeout(timer)
}, [])
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-3xl w-full max-w-md relative text-slate-100 shadow-2xl">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Зворотний зв'язок</h3>
        <form action="https://formspree.io/f/xvgokpqw" method="POST" className="space-y-3">
          <input type="text" name="name" placeholder="Ваше ім'я" required className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white" />
          <input type="tel" name="phone" placeholder="Телефон" required className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white" />
          <textarea name="message" placeholder="Повідомлення" required className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white h-24"></textarea>
          <button type="submit" className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm