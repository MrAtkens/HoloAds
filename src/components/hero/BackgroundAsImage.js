import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, {NavLink, LogoLink, NavToggle, DesktopNavLinks} from "../headers/light.js";

import {useWindowSize} from "helpers/useWindowSize";
import videoBackground from "images/background.webm"
import imageBackground from "images/header.webp"

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
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144 md:mb-4 lg:mb-32`}
`;

const ContainerMobile = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${imageBackground});
`;


const OpacityOverlay = tw.div`z-10 absolute`;
const OpacityOverlayImage = tw.div`z-10 absolute inset-0 opacity-50`;

const Video = tw.video`max-w-none`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
    const {width} = useWindowSize();
    return (
        <>
            {width > 1080 ? (
                <Container>
                    <OpacityOverlay>
                        <Video loop autoPlay muted>
                            <source src={videoBackground} type="video/webm"/>
                        </Video>
                    </OpacityOverlay>
                    <HeroContainer>
                        <StyledHeader/>
                        <Content>
                            <Heading>
                                Голографические вентеляторы с доставкой
                                <br/>
                                по всему Казахстану
                            </Heading>
                            <PrimaryAction>Посмотреть ассортимент</PrimaryAction>
                        </Content>
                    </HeroContainer>
                </Container>) : (
                <ContainerMobile>
                    <OpacityOverlayImage/>
                    <HeroContainer>
                        <StyledHeader/>
                        <Content>
                            <Heading>
                                Голографическая 3D реклама
                                <br/>
                                с доставкой по Казахстану
                            </Heading>
                            <PrimaryAction>Посмотреть ассортимент</PrimaryAction>
                        </Content>
                    </HeroContainer>
                </ContainerMobile>
            )}
        </>
    );
};
