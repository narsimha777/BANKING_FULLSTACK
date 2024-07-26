import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import { useSpring } from '@react-spring/three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/bank_m.gltf');
  const step_duration = 5000
  const logged = props.logged;
  const trans = props.trans;
  const talk = props.talk;
  const AtoP = props.AtoP;
  const carouselPosition = useSpring({
    scale: logged?(trans? [0.048, 0.048, 0.048]:[0.048, 0.048, 0.048]):[0.006, 0.006, 0.006], 
    // scale: trans? [0.08, 0.08, 0.08]:[0.048, 0.048, 0.048],
    rotation: trans? [AtoP(20), AtoP(0), 0]: (talk?[AtoP(20), AtoP(-180), 0]:[AtoP(20), AtoP(-90), 0]),
    // rotation: trans? [AtoP(20), AtoP(-180), 0]: [AtoP(20), AtoP(-90), 0],
    // from: { scale: [0.006, 0.006, 0.006] },
    // to: [{ scale: [0.048, 0.048, 0.048], delay: step_duration }],
    config: { mass: 5, tension: 800, friction: 260 },
    loop: { reverse: true }
  });
  return (
    <animated.group {...props} scale={carouselPosition.scale} rotation={carouselPosition.rotation} dispose={null}>
      <group position={[76.254, -0.936, -241.374]} rotation={[-Math.PI, 1.447, -Math.PI]}>
        <mesh geometry={nodes.polySurface717_lambert9_0.geometry} material={materials.lambert9} />
        <mesh geometry={nodes.polySurface717_lambert8_0.geometry} material={materials.lambert8} />
      </group>
      <group position={[50.672, -1.645, -15.087]} rotation={[0, 0.188, 0]}>
        <mesh geometry={nodes.polySurface719_lambert9_0.geometry} material={materials.lambert9} />
        <mesh geometry={nodes.polySurface719_lambert8_0.geometry} material={materials.lambert8} />
      </group>
      <group position={[-37.93, -1.645, 52.065]} rotation={[0, -0.392, 0]}>
        <mesh geometry={nodes.polySurface720_lambert9_0.geometry} material={materials.lambert9} />
        <mesh geometry={nodes.polySurface720_lambert8_0.geometry} material={materials.lambert8} />
      </group>
      <group position={[54.892, 33.699, -245.767]} rotation={[-2.614, 1.046, 2.549]}>
        <mesh geometry={nodes.polySurface721_lambert9_0.geometry} material={materials.lambert9} />
        <mesh geometry={nodes.polySurface721_lambert8_0.geometry} material={materials.lambert8} />
      </group>
      <mesh geometry={nodes.pCube5_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCube34_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCube59_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.typeMesh2_lambert13_0.geometry} material={materials.lambert13} />
      <mesh geometry={nodes.typeMesh3_lambert13_0.geometry} material={materials.lambert13} />
      <mesh geometry={nodes.typeMesh4_lambert13_0.geometry} material={materials.lambert13} />
      <mesh geometry={nodes.polySurface52_lambert21_0.geometry} material={materials.lambert21} />
      <mesh geometry={nodes.polySurface52_lambert22_0.geometry} material={materials.lambert22} />
      <mesh geometry={nodes.pCube128_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 8.071, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube129_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 15.392, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube130_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 8.071, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube131_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 15.392, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube132_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 22.696, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube133_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 30.018, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube134_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 30.018, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube135_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 22.696, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube136_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 37.321, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube137_lambert1_0.geometry} material={materials.lambert1} position={[-140.991, 44.643, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube138_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 44.643, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube139_lambert1_0.geometry} material={materials.lambert1} position={[-153.785, 37.321, -134.684]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube193_lambert1_0.geometry} material={materials.lambert1} position={[-165.757, 44.643, -281.527]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube194_lambert1_0.geometry} material={materials.lambert1} position={[-165.757, 37.321, -281.527]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube195_lambert1_0.geometry} material={materials.lambert1} position={[-152.683, 37.321, -281.527]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube196_lambert1_0.geometry} material={materials.lambert1} position={[-152.683, 44.643, -281.527]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube197_lambert1_0.geometry} material={materials.lambert1} position={[-139.89, 44.643, -281.527]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.pCube198_lambert1_0.geometry} material={materials.lambert1} position={[-139.89, 37.321, -278.592]} scale={[12.485, 6.95, 8.224]} />
      <mesh geometry={nodes.typeMesh5_typeBlinn2_0.geometry} material={materials.typeBlinn2} />
      <mesh geometry={nodes.pCylinder59_lambert22_0.geometry} material={materials.lambert22} />
      <mesh geometry={nodes.pCylinder59_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCylinder59_lambert21_0.geometry} material={materials.lambert21} />
      <mesh geometry={nodes.pCube909_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.pCube910_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.pCube910_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.pCube910_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.pCube910_lambert12_0.geometry} material={materials.lambert12} />
      <mesh geometry={nodes.pCube910_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.pCylinder99_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCube911_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.pCube911_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.pCube911_lambert12_0.geometry} material={materials.lambert12} />
      <mesh geometry={nodes.pCube911_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.pCube911_lambert21_0.geometry} material={materials.lambert21} />
      <mesh geometry={nodes.pCube911_lambert23_0.geometry} material={materials.lambert23} />
      <mesh geometry={nodes.pCube912_lambert23_0.geometry} material={materials.lambert23} />
      <mesh geometry={nodes.pCube912_lambert25_0.geometry} material={materials.lambert25} />
      <mesh geometry={nodes.pCube912_lambert28_0.geometry} material={materials.lambert28} />
      <mesh geometry={nodes.pCube912_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.pCube912_lambert26_0.geometry} material={materials.lambert26} />
      <mesh geometry={nodes.pCube912_lambert27_0.geometry} material={materials.lambert27} />
      <mesh geometry={nodes.pCylinder100_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.pCube913_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.pCube914_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.pCube914_lambert24_0.geometry} material={materials.lambert24} />
      <mesh geometry={nodes.pCube915_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.pCube915_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.pCube915_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.pCube915_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.pCube915_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.pCube915_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCube915_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.pCube915_lambert15_0.geometry} material={materials.lambert15} />
      <mesh geometry={nodes.polySurface3_lambert10_0.geometry} material={materials.lambert10} />
      <mesh geometry={nodes.polySurface3_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface3_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCube916_lambert12_0.geometry} material={materials.lambert12} />
      <mesh geometry={nodes.pCube1428_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pPlane9_lambert11_0.geometry} material={materials.lambert11} position={[-1.712, 0, 0]} />
      <mesh geometry={nodes.pHelix39_lambert6_0.geometry} material={materials.lambert6} />
      <mesh geometry={nodes.pHelix39_lambert6_0_1.geometry} material={materials.lambert6} />
      <mesh geometry={nodes.pHelix39_lambert6_0_2.geometry} material={materials.lambert6} />
      <mesh geometry={nodes.polySurface72_lambert22_0.geometry} material={materials.lambert22} />
      <mesh geometry={nodes.pCylinder101_lambert17_0.geometry} material={materials.lambert17} />
      <mesh geometry={nodes.pCube1429_lambert18_0.geometry} material={materials.lambert18} />
      <mesh geometry={nodes.polySurface127_lambert3_0.geometry} material={materials.lambert3} />
      <mesh geometry={nodes.polySurface127_lambert5_0.geometry} material={materials.lambert5} />
      <mesh geometry={nodes.polySurface127_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.polySurface196_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.polySurface196_lambert3_0.geometry} material={materials.lambert3} />
      <mesh geometry={nodes.polySurface196_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.polySurface714_lambert9_0.geometry} material={materials.lambert9} />
      <mesh geometry={nodes.polySurface714_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.polySurface714_lambert8_0.geometry} material={materials.lambert8} />
      <mesh geometry={nodes.pCylinder104_lambert7_0.geometry} material={materials.lambert7} />
      <mesh geometry={nodes.pCylinder104_lambert19_0.geometry} material={materials.lambert19} />
      <mesh geometry={nodes.pCylinder104_lambert20_0.geometry} material={materials.lambert20} />
      <mesh geometry={nodes.pCylinder104_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface228_lambert3_0.geometry} material={materials.lambert3} />
      <mesh geometry={nodes.polySurface228_lambert5_0.geometry} material={materials.lambert5} />
      <mesh geometry={nodes.polySurface228_lambert4_0.geometry} material={materials.lambert4} />
      <mesh geometry={nodes.polySurface723_lambert12_0.geometry} material={materials.lambert12} />
      <mesh geometry={nodes.polySurface723_lambert10_0.geometry} material={materials.lambert10} />
    </animated.group>
  )
}

useGLTF.preload('/bank_m.gltf')
