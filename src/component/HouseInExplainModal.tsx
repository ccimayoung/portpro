import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
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
  width: 800px;
  height: 800px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("/assets/집안맵 설명.png");
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
  top: 140px;
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

export const HouseInExplainModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.houseInExplainModal && (
        <ModalBackground
          onClick={() =>
            setmodalGather({ ...modalGather, houseInExplainModal: false })
          }
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
                  setmodalGather({
                    ...modalGather,
                    houseInExplainModal: false,
                  });
                }}
              />
            </QuitBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
