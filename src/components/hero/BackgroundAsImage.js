import React, {useRef, useMemo, Suspense} from "react";
import * as THREE from "three";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

import image from "./porgs.jpg";
import Effects from "./Effects";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;


const rpi = () => Math.random() * Math.PI
const Thing = React.forwardRef(({ amount = 100, opacity, ...props }, ref) => {
  const mesh = useRef()
  const dummy = new THREE.Object3D()
  const coords = useMemo(() => new Array(amount).fill().map(() => [rpi(), rpi(), rpi()]), [amount])
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    coords.forEach(([x, y, z], i) => {
      dummy.updateMatrix(void dummy.rotation.set(x + t, y + t, z + t))
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
      <group ref={ref} {...props}>
        <instancedMesh ref={mesh} args={[null, null, amount]} renderOrder={2}>
          <boxBufferGeometry attach="geometry" />
          <meshNormalMaterial attach="material" transparent opacity={opacity} />
        </instancedMesh>
      </group>
  )
})

function Yoda() {
  const plane = useRef()
  const eyes = useRef()
  const thing = useRef()
  const { viewport, aspect } = useThree()
  const texture = useLoader(THREE.TextureLoader, image)
  useMemo(() => (texture.minFilter = THREE.LinearFilter), [])
  const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth = 8000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const scale = adaptedWidth / 25
  useFrame((state) => {
    plane.current.rotation.x = Math.sin(state.clock.getElapsedTime()) / 15
    thing.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2
    eyes.current.position.y = Math.sin(state.clock.getElapsedTime()) / 12
  })
  return (
      <>
        <mesh ref={plane} scale={[adaptedWidth + 1, adaptedHeight + 0.5, 1]}>
          <planeBufferGeometry attach="geometry" args={[1, 1]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
        <group ref={eyes}>
          <Thing scale={[scale / 2.5, scale / 2.5, scale / 2.5]} position={[adaptedWidth / 15.2, adaptedHeight / 10.5, 1]} amount={10} opacity={0.1} />
          <Thing scale={[scale / 2.5, scale / 2.5, scale / 2.5]} position={[adaptedWidth / 3.9, adaptedHeight / 10.1, 1]} amount={10} opacity={0.1} />
        </group>
        <Thing ref={thing} scale={[scale * 3, scale * 3, scale * 3]} position={[-adaptedWidth / 5, adaptedHeight / 10, 0]} amount={30} opacity={1} />
      </>
  )
}


export default () => {

  return (
      <Container>
        <OpacityOverlay>
          <Canvas>
            <Suspense fallback={null}>
              <Yoda />
              <Effects />
            </Suspense>
          </Canvas>
        </OpacityOverlay>
        <HeroContainer>
          <StyledHeader/>
          <Content>
            <Heading>
              Голографические вентеляторы с доставкой
              <br />
              по всему Казахстану
            </Heading>
            <PrimaryAction>Посмотреть ассортимент</PrimaryAction>
          </Content>
        </HeroContainer>
      </Container>
  );
};
