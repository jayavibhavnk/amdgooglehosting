import React, { useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/dumbbell.glb");
    const controlsRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        controlsRef.current.update();
    });

    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <primitive object={gltf.scene} />
            <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
        </>
    );
};

const Scene = () => {
    return (
        <Canvas>
            <Model />
        </Canvas>
    );
};

export default Scene;
