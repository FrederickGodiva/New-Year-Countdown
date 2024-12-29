import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2024👋"]);

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <span className="z-50 px-4 text-4xl font-bold text-center text-white md:text-7xl">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={"|"}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="z-50 text-5xl font-bold text-white md:text-9xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["Happy", "New", "Year", "✨2025✨"])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
