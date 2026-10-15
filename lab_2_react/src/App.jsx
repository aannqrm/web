import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-100 p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <main className="space-y-6">
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App