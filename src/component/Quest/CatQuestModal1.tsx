import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import {
  findObjectGatherState,
  modalGatherState,
  questGatherState,
  questProgressGatherState,
} from "../../recoil/store";
import Keycontroller from "../../function/Keycontroller";
import { EvBtnAble, EvKoreanFont } from "../../style/EvStyle";
import { QuestModal } from "../QuestModal";

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

export const QuestFont = styled(EvKoreanFont)`
  & > span:nth-of-type(1) {
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    color: #ff007a;
  }
`;

export const CatQuestModal1 = () => {
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

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

              <CatWord />
            </CatQuestBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const CatWord = () => {
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  return (
    <>
      {findObjectGather.tonaCan1Find && findObjectGather.tonaCan2Find ? (
        <>
          {/* 둘다 찾았을때 */}
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`얼마만의 참치캔이냥!!!!!!!!! 고맙다냥😻😻😻
              이제 너는 내 친구다냥`}
            </QuestFont>
          </WordBox>
          <EvBtnAble
            width={300}
            height={50}
            margin={"10px 320px auto 380px"}
            onClick={() => {
              setQuestGather({
                ...questGatherState,
                catQuestModal1: false,
              });
              setQuestProgressGather({
                ...questProgressGather,
                q1TunaCan: "finish",
                q4Photo: "ing",
              });
              const questTimeOut = setTimeout(() => {
                setmodalGather({ ...modalGather, questModal: true });
                clearTimeout(questTimeOut);
              }, 200);
            }}
          >
            퀘스트 완료!
          </EvBtnAble>
        </>
      ) : !findObjectGather.tonaCan1Find && !findObjectGather.tonaCan2Find ? (
        // 둘다 못찾은 상태. 초기
        <>
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`야옹. 기억을 잃었냥? \n 퀘스트를 다 완료하면 기억을 되찾을 수 있다냥.\n 내가 너한테 도움이 될 수 있을 것 같다냥..! 애옹...🐱\n 저기 앞 집에서`}
              {<span> 참치캔 2개</span>}
              {`를 가져오면 함께 하겠다냥.`}
            </QuestFont>
          </WordBox>
          <EvBtnAble
            width={300}
            height={50}
            margin={"10px 320px auto 380px"}
            onClick={() => {
              setQuestGather({
                ...questGatherState,
                catQuestModal1: false,
              });
              setQuestProgressGather({
                ...questProgressGather,
                q1TunaCan: "ing",
              });
              const questTimeOut = setTimeout(() => {
                setmodalGather({ ...modalGather, questModal: true });
                clearTimeout(questTimeOut);
              }, 200);
            }}
          >
            알겠어!
          </EvBtnAble>
        </>
      ) : (
        <>
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`1개로는 부족하다냥!!
              `}
              {<span> 참치캔 2개</span>}
              {`를 가져와야 한다냥. 2개 모두 집에 있다냥!`}
            </QuestFont>
          </WordBox>
          <EvBtnAble
            width={300}
            height={50}
            margin={"10px 320px auto 380px"}
            onClick={() => {
              setQuestGather({
                ...questGatherState,
                catQuestModal1: false,
              });
            }}
          >
            다시 올게!
          </EvBtnAble>
        </>
      )}
    </>
  );
};
