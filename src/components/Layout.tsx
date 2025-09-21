import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The Vale
              </h1>
              <div className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Introduction
                </a>
                <a
                  href="/lessons"
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Lessons
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {title && (
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 backdrop-blur-md bg-white/80 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-600">
            &copy; 2025 The Vale. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  )
}
