import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

import styled from "styled-components";
import { EvColumnBox } from "../../style/EvStyle";
import "../../style/on-boarding.css";

const OnBoardingImgBox = styled(EvColumnBox)`
  width: 100%;
  height: 240px;
  overflow-x: hidden;
  margin: 10px auto 30px auto;
`;

const OnBoardingImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
`;

export const UtSplide = () => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          arrows: false,
          width: 550,
          gap: "10px",
          perMove: 1,
        }}
      >
        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/탐험일기/우탐1.png" alt="우탐1" />
          </OnBoardingImgBox>
        </SplideSlide>

        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/탐험일기/우탐2.png" alt="우탐2" />
          </OnBoardingImgBox>
        </SplideSlide>
      </Splide>
    </>
  );
};
