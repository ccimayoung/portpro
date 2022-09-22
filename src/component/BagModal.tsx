import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { bagGatherState, modalGatherState } from "../recoil/store";
import TunaCan1 from "./Mesh/TunaCan1";

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
  width: 800px;
  height: 800px;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("/assets/suitcase.png");
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

export const QuitBox = styled.div`
  width: 60px;
  height: 60px;
  top: 55px;
  right: 50px;
  border: 3px solid black;
  border-radius: 50px;
  background-color: white;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuitImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const BagModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [bagGather, setBagGather] = useRecoilState(bagGatherState);

  return (
    <>
      {modalGather.bagModal && (
        <ModalBackground
          onClick={() => setmodalGather({ ...modalGather, bagModal: false })}
        >
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <QuitBox>
              <QuitImg
                src="/assets/reject.png"
                alt="닫음"
                onClick={() => {
                  setmodalGather({ ...modalGather, bagModal: false });
                }}
              />
            </QuitBox>
            {bagGather.tonaCan1 && (
              <img
                style={{
                  width: "160px",
                  position: "absolute",
                  right: "190px",
                  top: "390px",
                }}
                src="/assets/가방/참치캔 배경없음.png"
                alt="참치캔1"
              ></img>
            )}

            {bagGather.tonaCan2 && (
              <img
                style={{
                  width: "160px",
                  position: "absolute",
                  right: "320px",
                  top: "490px",
                }}
                src="/assets/가방/참치캔 배경없음.png"
                alt="참치캔1"
              ></img>
            )}

            {bagGather.key1 && (
              <img
                style={{
                  width: "100px",
                  position: "absolute",
                  transform: "rotate(35deg)",
                  right: "190px",
                  top: "450px",
                }}
                src="/assets/가방/열쇠.png"
                alt="열쇠"
              ></img>
            )}
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
