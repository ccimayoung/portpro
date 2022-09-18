import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { modalGatherState } from "../recoil/store";
import {
  EvColumnBox,
  EvFontBox,
  EvKoreanFont,
  EvProjectBtnAble,
  EvRowBox,
  MemoryTitleBox,
  TitleBox,
  TitleFont,
} from "../style/EvStyle";
import { TodowithSplide } from "./Project/TodowithSplide";
import { TodowithExplainText } from "./Project/TodowithModal";
import { UtExplainText } from "./Project/UtModal";
import { UtSplide } from "./Project/UtSplide";
import { SgExplainText } from "./Project/SgModal";

const Slide = keyframes`
    0% {
        transform: translateY(10%);
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
  width: 845px;
  height: 830px;
  animation: ${Slide} 0.6s ease;
  background-image: url("/assets/종이.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 5;
`;

export const QuitImg = styled.img`
  width: 50px;
  height: 50px;
  top: 55px;
  right: 20px;
  position: absolute;
  cursor: pointer;
`;

const MemoriesContentWrap = styled(EvColumnBox)`
  overflow-y: scroll;
  overflow-x: hidden;

  width: 720px;
  /* height: 680px; */
  /* margin: 110px auto 0px 100px; */
  background-color: green;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MemoryPartWrap = styled(EvColumnBox)`
  /* border: 1px solid black; */
  display: flex;
  width: 675px;
  background-color: beige;
  margin: 0 auto 70px 0;
`;

export const MemoriesModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.memoriesModal && (
        <ModalBackground
          onClick={() =>
            setmodalGather({ ...modalGather, memoriesModal: false })
          }
        >
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <QuitImg
              src="/assets/reject.png"
              alt="닫음"
              onClick={() => {
                setmodalGather({ ...modalGather, memoriesModal: false });
              }}
            />
            <MemoriesContentWrap
              className="Content Wrap"
              // backgroundColor="skyblue"
            >
              {/* <MemoryPartWrap className="UT">
                <MemoryTitleBox>
                  <TitleFont>aaaa</TitleFont>
                </MemoryTitleBox>
              </MemoryPartWrap>

              <MemoryPartWrap className="UT">
                <MemoryTitleBox>
                  <TitleFont>우당탕탕 탐험일기</TitleFont>
                </MemoryTitleBox>
                <EvFontBox
                  className="subtitle"
                  //   backgroundColor="blue"
                  width={500}
                  height={20}
                  margin="5px auto 0px auto"
                >
                  <EvKoreanFont size={15} color="#4F4F4F">
                    2022.09 1인 개인 프로젝트
                  </EvKoreanFont>
                </EvFontBox>
                <EvColumnBox className="center wrap" margin="15px auto 0 auto">
                  <EvColumnBox
                    className="up photo"
                    width={550}
                    height={200}
                    margin="20px auto 0 auto"
                    backgroundColor="pink"
                  >
                    <UtSplide />
                  </EvColumnBox>
                  <EvFontBox
                    className="under text"
                    width={675}
                    height={230}
                    margin="50px auto 20px auto"
                    // backgroundColor="blue"
                    isAlignSide={true}
                    isContentSide={true}
                  >
                    <UtExplainText />
                  </EvFontBox>
                </EvColumnBox>
                <EvRowBox
                  className="bottom botton wrap"
                  width={550}
                  height={50}
                  margin="0px auto auto auto"
                  // backgroundColor="green"
                  columnGap={15}
                >
                  <EvProjectBtnAble
                    className="github btn"
                    width={170}
                    onClick={() =>
                      window.open(
                        "https://github.com/ccimayoung/portpro",
                        "_blank"
                      )
                    }
                  >
                    👉 GitHub 보러가기
                  </EvProjectBtnAble>
                </EvRowBox>
              </MemoryPartWrap> */}

              {/* 투두윗 */}
              {/* <MemoryPartWrap className="todowith">
                <MemoryTitleBox margin="10px auto 0 auto ">
                  <TitleFont>TODOWITH (투두윗)</TitleFont>
                </MemoryTitleBox>
                <EvFontBox
                  className="subtitle"
                  //   backgroundColor="blue"
                  width={500}
                  height={20}
                  margin="5px auto 0px auto"
                >
                  <EvKoreanFont size={15} color="#4F4F4F">
                    2022.06 ~ 2022.08 협업 프로젝트(FE 2명, BE 3명, 디자이너
                    2명)
                  </EvKoreanFont>
                </EvFontBox>
                <EvRowBox className="center wrap" margin="15px auto 0 auto">
                  <EvColumnBox
                    className="left photo"
                    width={190}
                    height={520}
                    margin="0 0 0 auto"
                    // backgroundColor="pink"
                  >
                    <TodowithSplide />
                  </EvColumnBox>
                  <EvFontBox
                    className="right text"
                    width={475}
                    height={480}
                    margin="0 auto 40px 10px"
                    // backgroundColor="blue"
                    isAlignSide={true}
                    isContentSide={true}
                  >
                    <TodowithExplainText />
                  </EvFontBox>
                </EvRowBox>
                <EvRowBox
                  className="bottom botton wrap"
                  width={550}
                  height={50}
                  margin="0px auto auto auto"
                  // backgroundColor="green"
                  columnGap={15}
                >
                  <EvProjectBtnAble
                    className="readme btn"
                    width={170}
                    onClick={() =>
                      window.open(
                        "https://www.notion.so/Shim-A-Young-1dc0c70d78764f309d9829499d4bb53c#6ef578200aad4d73a0939e85d40cdf32",
                        "_blank"
                      )
                    }
                  >
                    👉 상세 Readme 보기
                  </EvProjectBtnAble>
                  <EvProjectBtnAble
                    className="link btn"
                    width={170}
                    onClick={() =>
                      window.open("https://todowith.co.kr", "_blank")
                    }
                  >
                    👉 서비스 링크
                  </EvProjectBtnAble>
                  <EvProjectBtnAble
                    className="github btn"
                    width={170}
                    onClick={() =>
                      window.open(
                        "https://github.com/HanghaeE5/Front-end",
                        "_blank"
                      )
                    }
                  >
                    👉 GitHub 보러가기
                  </EvProjectBtnAble>
                </EvRowBox>
              </MemoryPartWrap> */}

              {/* SG
              {/* <MemoryPartWrap className="sg">
                <MemoryTitleBox>
                  <TitleFont>브릿지 게임</TitleFont>
                </MemoryTitleBox>
                <EvFontBox
                  className="subtitle"
                  //   backgroundColor="blue"
                  width={500}
                  height={20}
                  margin="5px auto 0px auto"
                >
                  <EvKoreanFont size={15} color="#4F4F4F">
                    2022.07 클론 코딩
                  </EvKoreanFont>
                </EvFontBox>
                <EvColumnBox className="center wrap" margin="15px auto 0 auto">
                  <EvColumnBox
                    className="video"
                    width={550}
                    height={200}
                    margin="20px auto 0 auto"
                    backgroundColor="pink"
                  >
                    <video controls style={{ width: "550px" }}>
                      <source src="/assets/브릿지게임/브릿지게임.mp4" />
                    </video>
                  </EvColumnBox>
                  <EvFontBox
                    className="right text"
                    width={650}
                    height={230}
                    margin="50px auto 20px auto"
                    // backgroundColor="blue"
                    isAlignSide={true}
                    isContentSide={true}
                  >
                    <SgExplainText />
                  </EvFontBox>
                </EvColumnBox>
                <EvRowBox
                  className="bottom botton wrap"
                  width={550}
                  height={50}
                  margin="0px auto auto auto"
                  // backgroundColor="green"
                  columnGap={15}
                >
                  <EvProjectBtnAble
                    className="link btn"
                    width={170}
                    onClick={() =>
                      window.open(
                        "https://ccimayoung.github.io/bridgegame/",
                        "_blank"
                      )
                    }
                  >
                    👉 서비스 링크
                  </EvProjectBtnAble>
                  <EvProjectBtnAble
                    className="github btn"
                    width={170}
                    onClick={() =>
                      window.open(
                        "https://github.com/ccimayoung/bridgegame",
                        "_blank"
                      )
                    }
                  >
                    👉 GitHub 보러가기
                  </EvProjectBtnAble>
                </EvRowBox>
              </MemoryPartWrap>  */}
            </MemoriesContentWrap>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
