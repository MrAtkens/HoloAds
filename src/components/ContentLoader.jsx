import React, {useEffect, useState} from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";
import styled from 'styled-components';

const ScrollUpButtonWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.15s ease-in-out;
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    background-color: #8344ff};
  }
`;


export const ContentLoader = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [color, setColor] = useState("#6415ff")
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const yRangeColor = useTransform(scrollYProgress , [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ["#6415ff", "#7616e4", "#9418b7", "#b71a84", "#de1c4b", "#fd1d1d", "#fd3523", "#fd4728", "#fd602f", "#fd8038", "#fcb045"]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() =>{
        yRange.onChange((v) => setIsComplete(v >= 1))
        yRangeColor.onChange((v) => setColor(v))
    }, [yRange]);
    return (
        <ScrollUpButtonWrapper style={{backgroundColor: color}}>
            <svg className="progress-icon" viewBox="0 0 50 50">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="#ffffff"
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="#ffffff"
                    d="M14,26 L 22,33 L 35,16"
                    initial={false}
                    strokeDasharray="0 1"
                    animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </svg>
        </ScrollUpButtonWrapper>
    );
}
