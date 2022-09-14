import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { modalGatherState } from "../recoil/store";

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
  width: 20.9375rem;
  height: 70%;
  top: 25%;
  border-radius: 12px;
  background-color: #ffffff;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

export const QuestModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.questModal && (
        <ModalBackground
          onClick={() => setmodalGather({ ...modalGather, questModal: false })}
        >
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
