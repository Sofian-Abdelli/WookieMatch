import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadHyperspacePreset(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  const options = {
    preset: "hyperspace",
    particles: {
      color: { value: "#fefefeff" },
      opacity: 0.1,
      move: 1.5,
      number: 100,
    },
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}
export default Background;
