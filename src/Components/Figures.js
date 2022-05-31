import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";


const Box = ({position, color, args})=>{
    const mesh = useRef(null);

    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return(
        <mesh castShadow ref={mesh} position={position}>
            <boxBufferGeometry attach='geometry' args={args}/>
            <meshStandardMaterial attach='material' color={color}/>
        </mesh>
    )

}
function Figures(){

    return(
        <Canvas camera={{position: [-5, 2,10], fov:60}}>
            <ambientLight intensity={.4}/>
            <directionalLight
                castShadow
                position={[0,10,0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10,0,-20]} intensity={0.5}/>
            <pointLight position={[0,-10,0]} intensity={1.5}/>

            <group>
                <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position={[0,-3,0]}>
                    <planeBufferGeometry attach='geometry' args ={[100,100]}/>
                    <shadowMaterial attach='material' opacity={0.2}/>
                </mesh>
            </group>

            <Box position={[2,1,0]} color='#201992' args={[2,2,2]}/>
            <Box position={[-2,4.5,-5]} color='#F4F6F6' args={[1.5,1.5,1.5]}/>
            <Box position={[-2,-2.5,-2]} color='#333333'args={[1,1,1]}/>
        </Canvas>
    )
}

export default Figures