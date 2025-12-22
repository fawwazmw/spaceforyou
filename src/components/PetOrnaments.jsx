export const PetOrnaments = () => {
  const pets = ['🐱', '🐶', '🐈', '🐕', '😺', '🐾'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pets.map((pet, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-10 animate-pulse"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {pet}
        </div>
      ))}
    </div>
  );
};
