import React, {useEffect, useState} from "react";
import {AnimationRevealPageNoPadding} from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import ContactDetails from "components/ContactDetails";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useTransform, useViewportScroll} from "framer-motion";
import {Container} from "components/misc/Layouts.js";
import {PhoneCall, Mail, MapPin} from 'react-feather';
import ScrollToTop from "react-scroll-up";
import {ContentLoader} from "../components/ContentLoader";
import SEO from "../components/Seo";

export default () => {
    const [color, setColor] = useState("#6415ff")
    const {scrollYProgress} = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ["#6415ff", "#7616e4", "#9418b7",
            "#b71a84", "#de1c4b", "#fd1d1d",
            "#fd3523", "#fd4728", "#fd602f",
            "#fd8038", "#fcb045"]);
    useEffect(() => yRange.onChange((v) => setColor(v)), [yRange]);
    return (
        <>
            <SEO
                title="Купить качественные голографические вентиляторы в Нур-Султан | Holo-Ads"
                description="Качественные и недорогие голограммы в Нур-Султан! Бесплатная доставка по Астане. 1 года гарантии от производителя. Звоните ☎ 8-(707)-722-75-89"
            />
            <ScrollToTop
                showUnder={300}
                duration={700}
                easing="easeInOutCubic"
                style={{bottom: 30, right: 30, zIndex: 100}}
            >
                <ContentLoader/>
            </ScrollToTop>
            <AnimationRevealPageNoPadding>
                <Header color={color} className={"header-contact"}/>
                <ContactDetails
                    heading={"Наши контакты"}
                    subheading={"Наш телефон, Наш адресс, Наша почта"}
                    description={"Здесь вы можете найти прямые контакты для того чтобы связаться с нами."}
                    linkText=""
                    cards={[
                        {
                            icon: <PhoneCall color={color} size={48}/>,
                            title: "Телефон",
                            description: "+7-707-722-75-89",
                            url: "https://google.com"
                        },
                        {
                            icon: <MapPin color={color} size={48}/>,
                            title: "Адресс",
                            description: "Сакен Сейфулина 40",
                            url: "https://timerse.com"
                        },
                        {
                            icon: <Mail color={color} size={48}/>,
                            title: "Почта",
                            description: "r.kaliaskar@mail.ru",
                            url: "https://timerse.com"
                        },
                    ]}
                    color={color}
                />
                <Container>
                    <YMaps>
                        <Map
                            width="100%"
                            height={520}
                            defaultState={{
                                center: [51.17165477669397, 71.42999123084935],
                                zoom: 17,
                                controls: ['zoomControl', 'fullscreenControl'],
                            }}
                            modules={['control.ZoomControl', 'control.FullscreenControl']}
                        >
                            <Placemark properties={{iconCaption: "Офис HoloAds"}} options={{iconColor: color}}
                                       defaultGeometry={[51.17165477669397, 71.42999123084935]}/>
                        </Map>
                    </YMaps>
                </Container>
                <ContactUsForm color={color}/>
                <Footer/>
            </AnimationRevealPageNoPadding>
        </>
    );
};
