export const Home = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center fade-in">
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-serif text-[#2c2c2c] mb-6">
            A Space for You
          </h1>
          <p className="text-2xl text-[#666666] font-serif italic">
            In loving memory, in gentle healing, in your own time
          </p>

          {/* Floating Flowers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[10%] text-5xl animate-bounce opacity-20" style={{ animationDuration: '3s', animationDelay: '0s' }}>
              🌸
            </div>
            <div className="absolute top-[20%] right-[15%] text-5xl animate-bounce opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              🌺
            </div>
            <div className="absolute bottom-[10%] left-[20%] text-5xl animate-bounce opacity-20" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
              🌼
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Welcome Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 fade-in">
          <h2 className="text-3xl font-semibold text-[#2c2c2c] mb-6">Welcome</h2>
          <div className="space-y-4">
            <p className="text-[#666666] leading-relaxed">
              This space was created with love and care, just for you. A place where you can:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💌</span>
                <span className="text-[#666666] leading-relaxed">Read words of comfort whenever you need them</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📖</span>
                <span className="text-[#666666] leading-relaxed">Write your thoughts and memories in your private journal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">☁️</span>
                <span className="text-[#666666] leading-relaxed">Find peace in moments of reflection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🌸</span>
                <span className="text-[#666666] leading-relaxed">Create a beautiful garden of memories</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Opening Letter */}
        <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-2xl p-8 shadow-lg border border-white/30 fade-in">
          <div className="mb-6">
            <h3 className="text-2xl font-serif text-[#2c2c2c]">A Message for You</h3>
          </div>
          <div className="space-y-4 font-serif text-[#666666] leading-relaxed">
            <p>
              Sometimes missing someone is a reminder that we can always cherish what we have now.
              Those who are no longer with us have not disappeared from our lives. There is so much
              we can learn, understand, and carry forward that helps us move ahead to where we are today.
            </p>
            <p>
              I can't fully know what you feel right now, but your mom is always proud of you and loves you.
              Keep your spirit strong, always be grateful for what you have, and take your time.
              Hopefully, you will feel better soon.
            </p>
            <p className="text-right italic text-[#2c2c2c] mt-6">
              With love and support ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
