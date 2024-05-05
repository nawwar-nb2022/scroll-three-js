import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Office from "./Office"

const Modal = () => {
    return (
        <Canvas 
        style={{width:"100vw" , height:"100vh"}} 
            camera={{
                fov :64,
                position: [2.3 , 1.5 , 2.3]
            }}
        >
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={false}/>
            <ScrollControls pages={3} damping={0.25}>
                <Office/>
            </ScrollControls>

        </Canvas>
    )
}

export default Modal
