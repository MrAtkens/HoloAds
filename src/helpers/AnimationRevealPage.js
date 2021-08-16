import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const StyledDiv = styled.div`
  ${tw`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`}
`;

const StyledDivNoPadding = styled.div`
  ${tw`font-display min-h-screen text-secondary-500 overflow-hidden`}
`;

export const AnimationRevealPage = ({children}) => (
    <StyledDiv className="App">
        {children}
    </StyledDiv>
);

export const AnimationRevealPageNoPadding = ({children}) => (
    <StyledDivNoPadding className="App">
        {children}
    </StyledDivNoPadding>
);
