import React, {useEffect, useState} from "react";
import {useTransform, useViewportScroll} from "framer-motion";
import ScrollToTop from 'react-scroll-up';
import tw from "twin.macro";

import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import MainAdvantages from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground"
import {AnimationRevealPage} from "helpers/AnimationRevealPage";
import Footer from "components/footers/FiveColumnWithInputForm";
import Features from "components/features/ThreeColSimple";
import Blog from "components/gallery/GridWithFeaturedPost";
import {ContentLoader} from 'components/ContentLoader'
import Hero from "components/hero/BackgroundAsImage";
import DownloadApp from "components/cta/DownloadApp";
import FAQ from "components/faqs/SingleCol";
import SEO from "components/Seo";


const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
const imageCss = tw`rounded-4xl`;

export default () => {

    const [color, setColor] = useState("#6415ff")
    const {scrollYProgress} = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ["#6415ff", "#7616e4", "#9418b7",
            "#b71a84", "#de1c4b", "#fd1d1d",
            "#fd3523", "#dd6b20", "#ed8936",
            "#f6ad55", "#ecc94b"]);
    useEffect(() => yRange.onChange((v) => setColor(v)), [yRange]);

    return (
        <>
            <SEO
                title="Купить качественные голографические вентиляторы в Нур-Султан | Holo-Ads"
                description="Качественные и недорогие голограммы в Нур-Султан! Бесплатная доставка по Астане. 1 года гарантии от производителя. Звоните ☎ 8-(707)-722-75-89"
                metaDescription="Голографические ветиляторы в Нур-Султан"
            />
            <ScrollToTop
                showUnder={300}
                duration={700}
                easing="easeInOutCubic"
                style={{bottom: 30, right: 30, zIndex: 100}}
            >
                <ContentLoader/>
            </ScrollToTop>
            <AnimationRevealPage>
                <Hero/>
                <Features
                    cards={[
                        {
                            imageSrc: shopIconImageSrc,
                            title: "Бизнесе",
                            description: "Привлекайте новых потенциальных клиентов за счет внедрения 3D рекламы",
                            url: "https://google.com"
                        },
                        {
                            imageSrc: chefIconImageSrc,
                            title: "Рекламе",
                            description: "3D голограмма – эффективный способ привлечь внимание обширной аудитории к продукту",
                            url: "https://timerse.com"
                        },
                        {
                            imageSrc: celebrationIconImageSrc,
                            title: "EVENT’ах",
                            description: "3D реклама сделает ваше событие запоминающимся, о нем будут говорить",
                            url: "https://reddit.com"
                        }
                    ]}
                    imageContainerCss={tw`p-2!`}
                    imageCss={tw`w-20! h-20!`}
                    color={color}
                />
                <Blog/>
                <MainFeature2
                    statistics={[
                        {
                            key: "Заказов",
                            value: "94000+",
                        },
                        {
                            key: "Клиентов",
                            value: "11000+"
                        },
                        {
                            key: "Бизнесов",
                            value: "1500+"
                        }
                    ]}
                    primaryButtonText="Заказать сейчас"
                    description="Внедрение уникальной технологии 3D голограммы для продвижения своих товаров и услуг — позволяет создавать настоящие шедевры из обычных рекламных роликов"
                    primaryButtonUrl="https://order.now.com"
                    imageInsideDiv={false}
                    imageCss={Object.assign(tw`bg-cover`, imageCss)}
                    imageContainerCss={tw`md:w-1/2 h-auto`}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
                    textOnLeft={true}
                    color={color}
                />
                <MainAdvantages
                    imageSrc={prototypeIllustrationImageSrc}
                    showDecoratorBlob={false}
                    textOnLeft={false}
                    color={color}
                />
                <Pricing color={color}/>
                <FAQ
                    description="Здесь вы можете прочитать самые частые запросы"
                    color={color}
                    faqs={[
                        {
                            question: "Насколько качественно выглядит голограмма?",
                            answer:
                                "Отлично здесь вы можете увидеть качество, при покупке обязательно идёт демонстрация."
                        },
                        {
                            question: "Дешевле брать в Китае?",
                            answer:
                                "Не совсем, дело в том что найти качественные голограммы с хорошой ценой очень сложно и они часто не продают меньше 10 штук."
                        },
                        {
                            question: "Как работает гарантия?",
                            answer:
                                "Гарантия идёт от производителя, если ваша голограмма сломалась без видемых внешних физических повреждений мы заменим вашу голограмму новой."
                        },
                        {
                            question: "Насколько долго держит батарея переносной голографический вентелятор в сумке?",
                            answer:
                                "Примерно от 6 до 8 часов без прерывной работы."
                        },
                        {
                            question: "Сдаём ли мы в аренду голограммы?",
                            answer:
                                "Да, вы можете написать нам или позвонить мы доставим вам голограмму и подпишем договор на аренду."
                        }
                    ]}
                />
                <DownloadApp
                    subheading={"Скачать"}
                    text={<>Для управление вашеми голограммами у нас есть специальное мобильное приложение
                        <HighlightedTextInverse style={{marginLeft: 20, color: color}}>Holo
                            ads.</HighlightedTextInverse></>}
                />
                <Footer/>
            </AnimationRevealPage>
        </>
    );
}
