import Particles from "react-tsparticles";
import particlesconfig from "./config/particles-config";
import { loadFull } from "react-tsparticles";

const ParticlesBackground = () => {
      
      return (
        <div>
          <Particles
            params={particlesconfig}
          
          ></Particles>
        </div>
      );
};

export default ParticlesBackground;