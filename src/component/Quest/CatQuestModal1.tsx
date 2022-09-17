import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { questGatherState } from "../../recoil/store";
import Keycontroller from "../../function/Keycontroller";
import { EvBtnAble, EvKoreanFont } from "../../style/EvStyle";

const Slide = keyframes`
    0% {
        transform: translateY(-5%);
    }

    100% {
        transform: translateY(0);
    }
`;

const ModalBackground = styled.div`
  /* align-items: center; */
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
  margin-top: 30px;
  width: 900px;
  height: 370px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  /* background-color: red; */
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

const CatQuestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: 370px;
  animation: ${Slide} 0.6s ease;
  background-image: url("/assets/말풍선/고양이말풍선.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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

export const CatQuestModal1 = () => {
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const keyController = new Keycontroller();

  if (keyController.keys["KeyG"]) {
    setQuestGather({ ...questGatherState, catQuestModal1: true });
    console.log("g누른ㄱ");
  }

  return (
    <>
      {questGather.catQuestModal1 && (
        <ModalBackground
          onClick={() =>
            setQuestGather({ ...questGatherState, catQuestModal1: false })
          }
        >
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CatQuestBox>
              <QuitImg
                src="/assets/reject.png"
                alt="닫음"
                onClick={() => {
                  setQuestGather({
                    ...questGatherState,
                    catQuestModal1: false,
                  });
                }}
              />
              <WordBox>
                <EvKoreanFont
                  size={25}
                  weight={500}
                  style={{ whiteSpace: "pre-line" }}
                  lineHeight={"30px"}
                >
                  {`야옹. 기억을 잃었냥? \n 퀘스트를 다 완료하면 기억을 되찾을 수 있다냥.\n 내가 너한테 도움이 될 수 있을 것 같다냥..! 애옹...🐱\n 저기 앞 집에서 통조림 캔 2개를 가져오면 함께 하겠다냥.`}
                </EvKoreanFont>
              </WordBox>
              <EvBtnAble
                width={200}
                height={50}
                margin={"10px 320px auto 380px"}
                onClick={() =>
                  setQuestGather({ ...questGatherState, catQuestModal1: false })
                }
              >
                알겠어!
              </EvBtnAble>
            </CatQuestBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
