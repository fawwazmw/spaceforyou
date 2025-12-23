import { useState } from 'react';
import './ComfortCorner.css';


const quotes = [
  {
    text: "Grief is the price we pay for love.",
    author: "Queen Elizabeth II",
  },
  {
    text: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
    author: "Helen Keller",
  },
  {
    text: "Those we love don't go away, they walk beside us every day.",
    author: "Unknown",
  },
  {
    text: "The reality is that you will grieve forever. You will not 'get over' the loss of a loved one; you will learn to live with it. You will heal and you will rebuild yourself around the loss you have suffered.",
    author: "Elisabeth Kübler-Ross",
  },
  {
    text: "Tears are the silent language of grief.",
    author: "Voltaire",
  },
  {
    text: "When someone you love becomes a memory, the memory becomes a treasure.",
    author: "Unknown",
  },
  {
    text: "Perhaps they are not stars in the sky, but rather openings where our loved ones shine down to let us know they are happy.",
    author: "Eskimo Legend",
  },
  {
    text: "Life is eternal, and love is immortal, and death is only a horizon; and a horizon is nothing save the limit of our sight.",
    author: "Rossiter W. Raymond",
  },
];

const breathingExercises = [
  {
    name: "4-7-8 Breathing",
    description: "A calming technique to reduce anxiety",
    steps: [
      "Exhale completely through your mouth",
      "Close your mouth and inhale through your nose for 4 counts",
      "Hold your breath for 7 counts",
      "Exhale completely through your mouth for 8 counts",
      "Repeat 3-4 times",
    ],
  },
  {
    name: "Box Breathing",
    description: "Used by navy seals to stay calm",
    steps: [
      "Breathe in for 4 counts",
      "Hold your breath for 4 counts",
      "Breathe out for 4 counts",
      "Hold your breath for 4 counts",
      "Repeat as needed",
    ],
  },
];

export const ComfortCorner = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showBreathing, setShowBreathing] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-5xl font-serif text-[#2c2c2c] mb-4">Comfort Corner</h1>
        <p>A peaceful space for reflection and calm</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💭</span>
            <h2 className="text-3xl font-semibold text-[#2c2c2c]">Words of Wisdom</h2>
          </div>

          <div className="relative bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 md:p-12 mb-6">
            <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white hover:bg-[#ffe5d9] text-xl md:text-2xl flex items-center justify-center transition-all z-10" onClick={prevQuote}>
              ‹
            </button>

            <div className="max-w-2xl mx-auto text-center px-4 md:px-16">
              <p className="text-xl md:text-2xl font-serif text-[#2c2c2c] leading-relaxed mb-4">"{quotes[currentQuote].text}"</p>
              <p className="text-base md:text-lg text-[#666666] italic">— {quotes[currentQuote].author}</p>
            </div>

            <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white hover:bg-[#ffe5d9] text-xl md:text-2xl flex items-center justify-center transition-all z-10" onClick={nextQuote}>
              ›
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${index === currentQuote ? 'bg-[#FFB6C1] w-8' : 'bg-[#e5e5e5]'}`}
                onClick={() => setCurrentQuote(index)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌬️</span>
            <h2 className="text-3xl font-semibold text-[#2c2c2c]">Breathing Exercises</h2>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            {breathingExercises.map((exercise, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg transition-all ${selectedExercise === index ? 'bg-gradient-to-r from-[#b8c5b4] to-[#d4e9d4] text-white' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5] text-[#666666]'}`}
                onClick={() => setSelectedExercise(index)}
              >
                {exercise.name}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-3">{breathingExercises[selectedExercise].name}</h3>
            <p className="text-[#666666] mb-6">
              {breathingExercises[selectedExercise].description}
            </p>

            <ol className="space-y-3 mb-6 list-decimal list-inside text-[#666666]">
              {breathingExercises[selectedExercise].steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <button
              className="w-full p-4 bg-gradient-to-r from-[#b8c5b4] to-[#d4e9d4] text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all"
              onClick={() => setShowBreathing(!showBreathing)}
            >
              {showBreathing ? 'Stop Exercise' : 'Start Exercise'}
            </button>

            {showBreathing && (
              <div className="mt-8 text-center">
                <div className="h-48 flex items-center justify-center">
                  <div 
                    className={`w-32 h-32 bg-[#b8c5b4] rounded-full breathing-circle ${selectedExercise === 0 ? 'breathing-478' : 'breathing-box'}`}
                  />
                </div>
                <p className="mt-2 text-[#666666] font-medium">Breathe with the circle</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">✨</span>
            <h2 className="text-3xl font-semibold text-[#2c2c2c]">Daily Affirmations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>I am allowed to take my time with healing</p>
            </div>
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>My feelings are valid and important</p>
            </div>
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>I carry love with me always</p>
            </div>
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>I am stronger than I know</p>
            </div>
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>It's okay to ask for help</p>
            </div>
            <div className="bg-gradient-to-br from-[#fff8f0] to-[#ffe5d9] rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <p>I honor my emotions without judgment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
