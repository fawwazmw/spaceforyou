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
    <div className="comfort-page">
      <div className="comfort-header fade-in">
        <h1>Comfort Corner</h1>
        <p>A peaceful space for reflection and calm</p>
      </div>

      <div className="comfort-content">
        <div className="quotes-section fade-in">
          <div className="section-title">
            <span className="title-icon">💭</span>
            <h2>Words of Wisdom</h2>
          </div>

          <div className="quote-card">
            <button className="quote-nav prev" onClick={prevQuote}>
              ‹
            </button>

            <div className="quote-content">
              <p className="quote-text">"{quotes[currentQuote].text}"</p>
              <p className="quote-author">— {quotes[currentQuote].author}</p>
            </div>

            <button className="quote-nav next" onClick={nextQuote}>
              ›
            </button>
          </div>

          <div className="quote-dots">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentQuote ? 'active' : ''}`}
                onClick={() => setCurrentQuote(index)}
              />
            ))}
          </div>
        </div>

        <div className="breathing-section fade-in">
          <div className="section-title">
            <span className="title-icon">🌬️</span>
            <h2>Breathing Exercises</h2>
          </div>

          <div className="breathing-selector">
            {breathingExercises.map((exercise, index) => (
              <button
                key={index}
                className={`exercise-tab ${selectedExercise === index ? 'active' : ''}`}
                onClick={() => setSelectedExercise(index)}
              >
                {exercise.name}
              </button>
            ))}
          </div>

          <div className="exercise-card">
            <h3>{breathingExercises[selectedExercise].name}</h3>
            <p className="exercise-description">
              {breathingExercises[selectedExercise].description}
            </p>

            <ol className="exercise-steps">
              {breathingExercises[selectedExercise].steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <button
              className="start-breathing-button"
              onClick={() => setShowBreathing(!showBreathing)}
            >
              {showBreathing ? 'Stop Exercise' : 'Start Exercise'}
            </button>

            {showBreathing && (
              <div className="breathing-visual">
                <div className="breathing-circle" />
                <p className="breathing-instruction">Breathe with the circle</p>
              </div>
            )}
          </div>
        </div>

        <div className="affirmations-section fade-in">
          <div className="section-title">
            <span className="title-icon">✨</span>
            <h2>Daily Affirmations</h2>
          </div>

          <div className="affirmations-grid">
            <div className="affirmation-card">
              <p>I am allowed to take my time with healing</p>
            </div>
            <div className="affirmation-card">
              <p>My feelings are valid and important</p>
            </div>
            <div className="affirmation-card">
              <p>I carry love with me always</p>
            </div>
            <div className="affirmation-card">
              <p>I am stronger than I know</p>
            </div>
            <div className="affirmation-card">
              <p>It's okay to ask for help</p>
            </div>
            <div className="affirmation-card">
              <p>I honor my emotions without judgment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
