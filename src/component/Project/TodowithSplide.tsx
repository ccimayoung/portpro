import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

import styled from "styled-components";
import { EvColumnBox, EvFontBox, EvKoreanFont } from "../../style/EvStyle";
import "../../style/on-boarding.css";

const OnBoardingImgBox = styled(EvColumnBox)`
  width: 100%;
  height: 485px;
  overflow-x: hidden;
  margin: 0 auto 35px auto;
`;

const OnBoardingImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
`;

export const TodowithSplide = () => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          arrows: false,
          width: 190,
          gap: "10px",
          perMove: 1,
        }}
      >
        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗1.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>

        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗2.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>

        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗3.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>

        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗4.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>
        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗5.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>
        <SplideSlide>
          <OnBoardingImgBox>
            <OnBoardingImg src="/assets/투두윗/투두윗6.png" alt="" />
          </OnBoardingImgBox>
        </SplideSlide>
      </Splide>
    </>
  );
};
