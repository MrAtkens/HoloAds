import React from "react";
import {AnimationRevealPage} from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Header from "components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm";
import ProductGrid from "components/cards/TabCardGrid"

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
        <ProductGrid />
      <Footer />
    </AnimationRevealPage>
  );
};
