import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState, useRef } from "react";
import { modalGatherState } from "../recoil/store";
import Keycontroller from "../function/Keycontroller";

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
  width: 900px;
  height: 900px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("/assets/탐험일기 설명서.png");
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

export const QuitImg = styled.img`
  width: 50px;
  height: 50px;
  top: 55px;
  right: 50px;
  position: absolute;
  cursor: pointer;
`;

export const QuestionModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.questionModal && (
        <ModalBackground
          onClick={() =>
            setmodalGather({ ...modalGather, questionModal: false })
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
                setmodalGather({ ...modalGather, questionModal: false });
              }}
            />
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
