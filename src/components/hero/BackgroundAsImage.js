import React, {useRef, useMemo, Suspense} from "react";
import * as THREE from "three";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import image from "./porgs.jpg";
import Effects from "./Effects";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 text-2xl px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;


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

function Porg() {
  const plane = useRef()
  const eyes = useRef()
  const thing = useRef()
  const { viewport, aspect } = useThree()
  const texture = useLoader(THREE.TextureLoader, image)
  useMemo(() => (texture.minFilter = THREE.LinearFilter), [])
  const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const scale = adaptedWidth / 25
  useFrame((state) => {
    plane.current.rotation.x = Math.sin(state.clock.getElapsedTime()) / 15
    thing.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2
    eyes.current.position.y = Math.sin(state.clock.getElapsedTime()) / 12
  })
  return (
      <>
        <mesh ref={plane} scale={[adaptedWidth + viewport.width - 9, adaptedHeight + 0.5, 1]}>
          <planeBufferGeometry attach="geometry" args={[1, 1]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
        <group ref={eyes}>
          <Thing scale={[scale / 2, scale / 2, scale / 2]} position={[adaptedWidth / 8.5, adaptedHeight / 10.3, 1]} amount={10} opacity={0.1} />
          <Thing scale={[scale / 2, scale / 2, scale / 2]} position={[adaptedWidth / 2.1, adaptedHeight / 10.1, 1]} amount={10} opacity={0.1} />
        </group>
        <Thing ref={thing} scale={[scale * 3, scale * 3, scale * 3]} position={[-adaptedWidth / 5, adaptedHeight / 10, 0]} amount={30} opacity={1} />
      </>
  )
}

export default () => {
  return (
    <Container>
      <div style={{ position: "relative", width: '100%', height: 800 }}>
        <Canvas>
          <Suspense fallback={null}>
            <Porg />
            <Effects />
          </Suspense>
        </Canvas>
      </div>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader/>
        <TwoColumn>
          <LeftColumn>
            <Notification>Доставка по всему Казахстану.</Notification>
            <Heading>
              <span>Качественные голограммы</span>
              <br />
              <SlantedBackground>Покупка и аренда 3D голографических вентиляторов.</SlantedBackground>
            </Heading>
            <PrimaryAction>Заказать голограмму вашего товара</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
