import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}>
      <color attach="background" args={["#000000"]} />
      <Experience/>
    </Canvas>
  );
}

export default App;
