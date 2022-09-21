import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import {
  EvFontBox,
  EvKoreanFont,
  EvProjectBtnAble,
  EvRowBox,
} from "../style/EvStyle";
import { modalGatherState } from "../recoil/store";

const Slide = keyframes`
    0% {
        transform: translateY(-5%);
    }

    100% {
        transform: translateY(0);
    }
`;

const ModalBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1334px;
  height: 800px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 50px;
  background-image: url("/assets/끄읏.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

const WordBox = styled.div`
  margin: 100px 80px 0px 220px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 180px;
  /* background-color: blue; */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

export const QuitImg = styled.img`
  width: 40px;
  height: 40px;
  top: 70px;
  right: 20px;
  position: absolute;
  cursor: pointer;
`;

export const QuestFont = styled(EvKoreanFont)`
  & > span:nth-of-type(1) {
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    color: #ff007a;
  }
  & > span:nth-of-type(2) {
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    color: #ff007a;
  }
`;

export const FinishModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.finishModal && (
        <ModalBackground>
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <EvFontBox margin="200px auto 0 auto ">
              <EvKoreanFont size={80} isBold={true} color={"white"}>
                플레이해주셔서 감사합니다.
              </EvKoreanFont>
            </EvFontBox>
            <EvFontBox margin="70px auto 0 auto ">
              <EvKoreanFont size={50} isBold={true} color={"white"}>
                심아영 010-2935-1666
              </EvKoreanFont>
              <EvKoreanFont size={50} isBold={true} color={"white"}>
                <a className="mailtag" href="mailto:ccimayoung@gmail.com">
                  ccimayoung@gmail.com
                </a>
              </EvKoreanFont>
            </EvFontBox>

            <EvRowBox
              className="bottom botton wrap"
              width={600}
              height={50}
              margin="70px auto auto auto"
              // backgroundColor="green"
              columnGap={40}
            >
              <EvProjectBtnAble
                className="머무르기"
                width={270}
                style={{ height: "70px", fontSize: "25px" }}
                onClick={() =>
                  setmodalGather({ ...modalGather, finishModal: false })
                }
              >
                머무르기
              </EvProjectBtnAble>

              <EvProjectBtnAble
                className="github btn"
                width={270}
                style={{ height: "70px", fontSize: "25px" }}
                onClick={() =>
                  window.open("https://github.com/ccimayoung", "_blank")
                }
              >
                👉 GitHub 보러가기
              </EvProjectBtnAble>
            </EvRowBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
