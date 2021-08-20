import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

import {VolumeX, Volume2, Wifi, Bluetooth, RefreshCcw} from "react-feather"
import {css} from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import {motion} from "framer-motion";
import tw from "twin.macro";

import {Container, ContentWithPaddingXl} from "components/misc/Layouts.js";
import {SectionHeading} from "components/misc/Headings.js";


import {PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.js";
import {ReactComponent as SvgDecoratorBlob1} from "images/svg-decorator-blob-5.svg";
import {ReactComponent as SvgDecoratorBlob2} from "images/svg-decorator-blob-7.svg";

import {data} from './products';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-full md:w-1/2 lg:w-1/2 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-96 xl:h-96 bg-center bg-cover relative rounded-t flex flex-col-reverse`}
`;
const CardAdvantageContainer = tw.div`leading-6 flex relative w-1/4 bg-gray-100 mb-4 rounded-r-lg px-2 py-1`;
const CardAdvantageText = tw.div`ml-1 sm:text-xs md:text-base lg:text-base`;
const CardAdvantage = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`text-gray-600 mr-1 w-6 h-6`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h2`text-lg font-bold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 grid`;
const CardLine = tw.div`inline-flex text-lg leading-8 mt-2 justify-between items-center`
const CardDescription = tw.p`font-normal`;
const CardPrice = tw.p`mt-4 text-xl font-bold text-red-500`;
const CardDescriptionParameter = tw.span`font-semibold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({heading = "Товары"}) => {
    let query = useQuery();
    const [activeTab, setActiveTab] = useState(data[0].name);

    useEffect(() => {
        const category = query.get("category")
        data.map(branch => {
            if(branch.category === category)
                setActiveTab(branch.name)
        })
    },[])

    console.log(data)
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderRow>
                    <Header>{heading}</Header>
                    <TabsControl>
                        {data.map((item, index) => (
                            <TabControl key={index} active={activeTab === item.name}
                                        onClick={() => setActiveTab(item.name)}>
                                {item.name}
                            </TabControl>
                        ))}
                    </TabsControl>
                </HeaderRow>

                {data.map((item, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            }
                        }}
                        transition={{duration: 0.4}}
                        initial={activeTab === item.name ? "current" : "hidden"}
                        animate={activeTab === item.name ? "current" : "hidden"}
                    >
                        {item.products.map((card, index) => (
                            <CardContainer key={index}>
                                <Card className="group" href={card.url} initial="rest" whileHover="hover"
                                      animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        {card.noNoise === true ? (
                                            <CardAdvantageContainer>
                                                <CardAdvantage>
                                                    <VolumeX/>
                                                    <CardAdvantageText>Без шума</CardAdvantageText>
                                                </CardAdvantage>
                                            </CardAdvantageContainer>
                                        ) : null}
                                        {card.sound === true ? (
                                            <CardAdvantageContainer>
                                                <CardAdvantage>
                                                    <Volume2/>
                                                    <CardAdvantageText>Звук</CardAdvantageText>
                                                </CardAdvantage>
                                            </CardAdvantageContainer>
                                        ) : null}
                                        {card.wifi === true ? (
                                            <CardAdvantageContainer>
                                                <CardAdvantage>
                                                    <Wifi/>
                                                    Wifi
                                                </CardAdvantage>
                                            </CardAdvantageContainer>
                                        ) : null}
                                        {card.bluetooh === true ? (
                                            <CardAdvantageContainer>
                                                <CardAdvantage>
                                                    <Bluetooth/>
                                                    Bluetooth
                                                </CardAdvantage>
                                            </CardAdvantageContainer>
                                        ) : null}
                                        {card.sync === true ? (
                                            <CardAdvantageContainer>
                                                <CardAdvantage>
                                                    <RefreshCcw/>
                                                    Синхронизация
                                                </CardAdvantage>
                                            </CardAdvantageContainer>
                                        ) : null}
                                        <CardHoverOverlay
                                            variants={{
                                                hover: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                rest: {
                                                    opacity: 0,
                                                    height: 0
                                                }
                                            }}
                                            transition={{duration: 0.3}}
                                        >
                                            <CardButton>Купить</CardButton>
                                        </CardHoverOverlay>
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardContent>
                                            <CardLine>
                                                <CardDescription>Разрешение </CardDescription>
                                                <CardDescriptionParameter>{card.resolution}px</CardDescriptionParameter>
                                            </CardLine>
                                            <CardLine>
                                                <CardDescription>Яркость </CardDescription>
                                                <CardDescriptionParameter>{card.brightness}</CardDescriptionParameter>
                                            </CardLine>
                                            <CardLine>
                                                <CardDescription>LED качество </CardDescription>
                                                <CardDescriptionParameter>{card.ledQuality}</CardDescriptionParameter>
                                            </CardLine>
                                            <CardLine>
                                                <CardDescription>Диаметр </CardDescription>
                                                <CardDescriptionParameter>{card.diameter}</CardDescriptionParameter>
                                            </CardLine>
                                            <CardLine>
                                                <CardDescription>Память </CardDescription><CardDescriptionParameter>{card.memory}</CardDescriptionParameter>
                                            </CardLine>
                                            <CardLine>
                                                <CardDescription>Поддерживаемые
                                                    форматы</CardDescription><CardDescriptionParameter>{card.extensions}</CardDescriptionParameter>
                                            </CardLine>
                                        </CardContent>
                                        <CardPrice>{card.price}</CardPrice>
                                    </CardText>
                                </Card>
                            </CardContainer>
                        ))}
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
            <DecoratorBlob1/>
            <DecoratorBlob2/>
        </Container>
    );
};
