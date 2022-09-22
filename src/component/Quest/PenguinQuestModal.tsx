import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import {
  findObjectGatherState,
  memoriesGatherState,
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
  background-image: url("/assets/말풍선/펭귄말풍선.svg");
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

export const PenguinQuestModal = () => {
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

  return (
    <>
      {questGather.penguinQuestModal && (
        <ModalBackground
          onClick={() =>
            setQuestGather({ ...questGatherState, penguinQuestModal: false })
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
                    penguinQuestModal: false,
                  });
                }}
              />

              <PenguinWord />
            </CatQuestBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const PenguinWord = () => {
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );

  const [questGather, setQuestGather] = useRecoilState(questGatherState);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);

  const nav = useNavigate();
  return (
    <>
      {memoriesGather.photoMemory &&
      memoriesGather.sgMemory &&
      memoriesGather.todowithMemory &&
      memoriesGather.utMemory ? (
        <>
          {/* 기억을 모두 찾았을때 */}
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`후,,, 요즘 조난당한 사람이 많구먼.
보아하니 기억은 다 찾은 것 같군.
`}

              {<span> 게임을 끝내고 UI/UX에 딥다이브할 준비가 됐나?</span>}
            </QuestFont>
          </WordBox>
          <EvBtnAble
            width={300}
            height={50}
            margin={"10px 320px auto 380px"}
            onClick={() => {
              setQuestGather({
                ...questGatherState,
                penguinQuestModal: false,
              });
              setQuestProgressGather({
                ...questProgressGather,
                q5Memory: "finish",
              });
              const finishTimer = setTimeout(() => {
                setmodalGather({ ...modalGather, finishModal: true });
                clearTimeout(finishTimer);
              }, 200);
            }}
          >
            준비됐어!!!!
          </EvBtnAble>
        </>
      ) : (
        <>
          {/* 기억이 다 없을때 */}
          <WordBox>
            <QuestFont
              size={25}
              weight={500}
              style={{ whiteSpace: "pre-line" }}
              lineHeight={"32px"}
            >
              {`아직 못 찾은 기억이 있는 것 같은데..
`}

              {
                <>
                  <span>사진과 프로젝트를 다 못봤다면,</span>
                  {`
                  `}
                  <span>오른쪽 아래 퀘스트에서 위치를 참고하라구</span>
                </>
              }
            </QuestFont>
          </WordBox>
          <EvBtnAble
            width={300}
            height={50}
            margin={"10px 320px auto 380px"}
            onClick={() => {
              setQuestGather({
                ...questGatherState,
                penguinQuestModal: false,
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
