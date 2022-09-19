import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { bagGatherState, findObjectGatherState } from "../../recoil/store";
import { EvFontBox, EvKoreanFont } from "../../style/EvStyle";

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
  width: 600px;
  height: 600px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  border-radius: 30px;
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
  top: 20px;
  right: 20px;
  border: 3px solid black;
  border-radius: 50px;
  background-color: #ffffff;
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

export const FindFont = styled(EvKoreanFont)`
  white-space: pre-line;
  line-height: 40px;
  margin-bottom: 2px;
  font-size: 30px;
  & > span:nth-of-type(1) {
    font-size: 30px;
    font-weight: 600;
    color: #ff007a;
  }
`;

export const FindTuna2Modal = () => {
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );

  return (
    <>
      {findObjectGather.tonaCan2 && (
        <ModalBackground
          onClick={() =>
            setFindObjectGather({ ...findObjectGather, tonaCan2: false })
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
                  setFindObjectGather({ ...findObjectGather, tonaCan2: false });
                }}
              />
            </QuitBox>
            <img
              style={{
                width: "450px",
                margin: "70px auto 0 60px ",
              }}
              src="/assets/가방/참치캔 배경없음.png"
              alt="참치캔1"
            ></img>
            {!findObjectGather.tonaCan1 || !findObjectGather.tonaCan2 ? (
              <EvFontBox margin="10px auto auto auto">
                <FindFont>{<span>참치캔 2개</span>}를 모두 찾았다!</FindFont>
                <FindFont>고양이에게 참치캔을 주면 좋아하겠지?</FindFont>
                <EvKoreanFont size={25} style={{ marginTop: "5px" }}>
                  (오른쪽 아래 가방에서 볼 수 있어요)
                </EvKoreanFont>
              </EvFontBox>
            ) : (
              <EvFontBox margin="10px auto auto auto">
                <FindFont>{<span>참치캔 1개</span>}를 찾았다!</FindFont>
                <EvKoreanFont size={25} style={{ marginTop: "5px" }}>
                  (오른쪽 아래 가방에서 볼 수 있어요)
                </EvKoreanFont>
              </EvFontBox>
            )}
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
