import React from "react";
import tw from "twin.macro";
import ScrollToTop from 'react-scroll-up';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ContentLoader } from 'components/ContentLoader'
import Hero from "components/hero/BackgroundAsImage.js";
import SEO from "components/Seo"

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import FAQ from "../components/faqs/SingleCol";

export default () => {
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;

    return (
        <>
            <SEO
                title="Гланая страница"
                description="Holo ads, магазин голограмм"
            />
            <ScrollToTop
                showUnder={300}
                duration={700}
                easing="easeInOutCubic"
                style={{ bottom: 30, right: 30, zIndex: 100 }}
            >
                <ContentLoader/>
            </ScrollToTop>
            <AnimationRevealPage>
                <Hero/>
                <MainFeature
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Купить"
                    imageSrc={
                        "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Features
                    cards={[
                        {
                            imageSrc: shopIconImageSrc,
                            title: "Любые магазины, киоски и лавочки",
                            description: "Благодаря голограмма можно очень хорошо увеличить превликательность вашей торговой точки",
                            url: "https://google.com"
                        },
                        {
                            imageSrc: chefIconImageSrc,
                            title: "Маркетинг и реклама",
                            description: "Вы можете установить голограмму на любую поверхность с вашем логотипом",
                            url: "https://timerse.com"
                        },
                        {
                            imageSrc: celebrationIconImageSrc,
                            title: "События и мероприятие",
                            description: "Вау эффект от голограмм и тех предстовлений которые вы можете сделать будет обязательно",
                            url: "https://reddit.com"
                        }
                    ]}
                    imageContainerCss={tw`p-2!`}
                    imageCss={tw`w-20! h-20!`}
                />
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
                    primaryButtonUrl="https://order.now.com"
                    imageInsideDiv={false}
                    imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
                    imageCss={Object.assign(tw`bg-cover`, imageCss)}
                    imageContainerCss={tw`md:w-1/2 h-auto`}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
                    textOnLeft={true}
                />
                <FAQ
                    description="Здесь вы можете прочитать самые частые запросы"
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
                <Testimonial
                    subheading=""
                />
                <DownloadApp
                    subheading={"Скачать"}
                    text={<>Для управление вашеми голограммами у нас есть специальное мобильное приложение<HighlightedTextInverse style={{marginLeft: 20}}>Holo ads.</HighlightedTextInverse></>}
                />
                <Footer />
            </AnimationRevealPage>
        </>
    );
}
