function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C4E9EF] to-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src="/hop-logo.svg"
            alt="Hooked on Phonics"
            className="h-20 md:h-24 w-auto"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Game Publishing CMS
          </h1>

          <div className="inline-block">
            <div className="bg-brand-yellow text-foreground px-6 py-3 rounded-full font-bold text-lg md:text-xl">
              Under Construction
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We're building something amazing! The educational game management system
            will be available soon.
          </p>

          {/* Fun animation dots */}
          <div className="flex justify-center gap-3 pt-8">
            <div className="w-4 h-4 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-4 h-4 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-brand-yellow rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-4 h-4 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-sm text-muted-foreground">
          <p>© 2026 Hooked on Phonics. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App
