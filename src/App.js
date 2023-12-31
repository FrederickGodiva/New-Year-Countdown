import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function App() {
  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
    </>
  );
}

export default App;
