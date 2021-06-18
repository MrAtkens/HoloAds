import React from "react";
import tw from "twin.macro";

import {domAnimation, LazyMotion, motion} from "framer-motion";
import styled from "styled-components";
const StyledDiv = styled.div`
  ${tw`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`}
`;

const StyledDivNoPadding = styled.div`
  ${tw`font-display min-h-screen text-secondary-500 overflow-hidden`}
`;

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
        <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
          {child}
        </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const x = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
      <LazyMotion features={domAnimation}>
        <motion.section initial={{ x: x.initial }}
                        animate={{
                          x: 30 && x.target,
                          transitionEnd:{
                            x: 30 && 0
                          }
                        }}
                        transition={{ type: "spring", damping: 19 }}>
          {children}
        </motion.section>
      </LazyMotion>
  );
}

export const AnimationRevealPage = props => (
    <StyledDiv className="App">
      <AnimationReveal {...props} />
    </StyledDiv>
);


export const AnimationRevealPageNoPadding = props => (
    <StyledDivNoPadding className="App">
      <AnimationReveal {...props} />
    </StyledDivNoPadding>
);
