import { useState } from 'react';
import './Letters.css';

const letters = [
  {
    id: 1,
    title: 'On Strength',
    content: `Sometimes missing someone is a reminder that we can always cherish what we have now. Those who are no longer with us have not disappeared from our lives. There is so much we can learn, understand, and carry forward that helps us move ahead to where we are today.

Your mom is always proud of you and loves you. Keep your spirit strong, always be grateful for what you have, and take your time. Hopefully, you will feel better soon.`,
    icon: '💪',
  },
  {
    id: 2,
    title: 'On Memories',
    content: `Memories are the treasures we keep in our hearts forever. They remind us of the love we've experienced, the laughter we've shared, and the moments that shaped who we are today.

Your mom lives on in every kind word you speak, every loving gesture you make, and every moment of joy you experience. She is part of you, always.`,
    icon: '💝',
  },
  {
    id: 3,
    title: 'On Hope',
    content: `Even on the hardest days, there is hope. Hope that tomorrow will be a little easier. Hope that the pain will soften with time. Hope that you will find moments of peace and even happiness again.

You are stronger than you know, and you don't have to face this alone. Take it one day at a time, one moment at a time.`,
    icon: '🌟',
  },
  {
    id: 4,
    title: 'On Love',
    content: `The love between a mother and child is eternal. It doesn't end with goodbye. It continues in the way you live your life, in the values she taught you, in the person you've become.

That love is still with you, surrounding you, supporting you. Feel it when you need comfort, when you need strength, when you need to remember that you are never truly alone.`,
    icon: '💕',
  },
  {
    id: 5,
    title: 'On Healing',
    content: `Healing isn't linear. Some days will be harder than others, and that's okay. There's no right way to grieve, no timeline you need to follow.

Be gentle with yourself. Allow yourself to feel whatever you're feeling. Cry when you need to cry, smile when you remember happy moments, rest when you're tired. You're doing better than you think.`,
    icon: '🌱',
  },
  {
    id: 6,
    title: 'On Being Present',
    content: `While we honor the past and those we've lost, we also need to be present in our lives today. Your mom would want you to live fully, to find joy, to pursue your dreams, to love and be loved.

Living well is not forgetting her. It's honoring her by embracing all that life has to offer, knowing that she would be cheering you on every step of the way.`,
    icon: '🌈',
  },
];

export const Letters = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="letters-page">
      <div className="letters-header fade-in">
        <h1>Letters of Comfort</h1>
        <p>Words to hold close when you need them most</p>
      </div>

      <div className="letters-grid">
        {letters.map((letter, index) => (
          <div
            key={letter.id}
            className="letter-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedLetter(letter)}
          >
            <div className="letter-icon">{letter.icon}</div>
            <h3>{letter.title}</h3>
            <p className="letter-preview">Click to read</p>
          </div>
        ))}
      </div>

      {selectedLetter && (
        <div className="letter-modal" onClick={() => setSelectedLetter(null)}>
          <div className="letter-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedLetter(null)}>
              ✕
            </button>
            <div className="letter-modal-header">
              <div className="letter-modal-icon">{selectedLetter.icon}</div>
              <h2>{selectedLetter.title}</h2>
            </div>
            <div className="letter-modal-body">
              {selectedLetter.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
