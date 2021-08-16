import React from "react";
import {AnimationRevealPage} from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm";
import ProductGrid from "components/cards/TabCardGrid"
import SEO from "../components/Seo";

export default () => {
    return (
        <AnimationRevealPage>
            <SEO
                title="Магазин голографических вентиляторов Holo-Ads"
                description="Качественные и недорогие голограммы в Нур-Султан! Бесплатная доставка по Астане. 1 года гарантии от производителя. Звоните ☎ 8-(707)-722-75-89"
                metaDescription="Голографические ветиляторы в Нур-Султан"
            />
            <Header/>
            <ProductGrid/>
            <Footer/>
        </AnimationRevealPage>
    );
};
