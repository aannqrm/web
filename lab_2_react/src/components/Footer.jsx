import { useEffect, useState } from 'react'

function Footer() {
  const [sysInfo, setSysInfo] = useState(null)

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    }
    localStorage.setItem('react_sys_info', JSON.stringify(info))
    setSysInfo(info)
  }, [])

  return (
    <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-800/60 mt-8 space-y-2">
      <p>© 2026 Земська Анна-Марія. Усі права захищені.</p>
      {sysInfo && (
        <p className="text-slate-600">
          Система: {sysInfo.platform} | Браузер: {sysInfo.userAgent}
        </p>
      )}
    </footer>
  )
}

export default Footer;