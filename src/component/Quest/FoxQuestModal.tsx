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
import { useNavigate } from "react-router";

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
  background-image: url("/assets/말풍선/여우말풍선.svg");
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
  & > span:nth-of-type(2) {
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    color: #ff007a;
  }
`;

export const FoxQuestModal = () => {
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

  return (
    <>
      {questGather.foxQuestModal && (
        <ModalBackground
          onClick={() =>
            setQuestGather({ ...questGatherState, foxQuestModal: false })
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
                    foxQuestModal: false,
                  });
                }}
              />

              <FoxWord />
            </CatQuestBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const FoxWord = () => {
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const nav = useNavigate();
  return (
    <>
      {findObjectGather.keyFind ? (
        <>
          {/* 열쇠 찾았을때 */}
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`오 열쇠를 가져왔네?
              집 벽면에서`}

              {<span> 포트폴리오 3개</span>}
              {`를 볼 수 있으니 잘 보고오라구.
              기억을 찾는데 도움이 될거야.`}
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
                q2Key: "finish",
                q3Port: "ing",
              });
              setTimeout(() => nav("/houseinmap"), 200);
            }}
          >
            집 안으로 이동!
          </EvBtnAble>
        </>
      ) : (
        <>
          {" "}
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`잠깐!`}

              {<span> 집 열쇠</span>}
              {`가 있어야 들어갈 수 있어.
              저기 앞에 있는 `}
              {<span>해적 기둥</span>}
              {` 보이지? 기둥 뒤를 잘 보라고~
              열쇠를 가져오면 문을 열어줄게.`}
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
                q2Key: "ing",
              });
              setTimeout(
                () => setmodalGather({ ...modalGather, questModal: true }),
                200
              );
            }}
          >
            알겠어!
          </EvBtnAble>
        </>
      )}
    </>
  );
};
