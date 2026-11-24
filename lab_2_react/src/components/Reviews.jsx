import { useState, useEffect } from 'react'

function Reviews() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const variant = 1
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 p-6 sm:p-8 rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">💬 Відгуки роботодавців</h2>
      <div className="space-y-3">
        {comments.map(c => (
          <div key={c.id} className="p-4 bg-slate-900/60 border border-slate-700/40 rounded-2xl">
            <h4 className="text-cyan-400 font-semibold">{c.name}</h4>
            <p className="text-xs text-slate-400 mb-2">{c.email}</p>
            <p className="text-sm text-slate-300">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews