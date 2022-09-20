import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState, useRef } from "react";
import {
  modalGatherState,
  playerPositionState,
  questProgressGatherState,
} from "../recoil/store";
import Keycontroller from "../function/Keycontroller";
import { EvColumnBox, EvFontBox, EvKoreanFont } from "../style/EvStyle";
import { ProfileTextFont } from "./MemoriesModal";

const Slide = keyframes`
    0% {
        transform: translateY(-10%);
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
  background-image: url("/assets/QuestModal.png");
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

const QuestStateTitleBox = styled(EvColumnBox)`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  z-index: 10;
`;

const QuestStateTextBox = styled(EvColumnBox)`
  width: 350px;
  min-height: 100px;
  border-radius: 30px;
  margin: -25px 0 0 0;
`;

export const QuestTextFont = styled(EvKoreanFont)`
  white-space: pre-line;
  align-content: left;
  padding-left: 13px;
  text-indent: -13px;
  /* line-height: 35px; */
  margin-bottom: 5px;
  /* font-size: 20px; */
`;

export const QuestModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [playerPosition, setPlayerPosition] =
    useRecoilState(playerPositionState);
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
          >
            <QuitImg
              src="/assets/reject.png"
              alt="닫음"
              onClick={() => {
                setmodalGather({ ...modalGather, questModal: false });
              }}
            />
            <EvColumnBox
              className="right wrap"
              width={350}
              height={520}
              margin="170px auto auto 390px"
              isContentSide={true}
            >
              <QuestStateTitleBox
                className="진행중"
                margin="0 auto"
                backgroundColor="#FF8E8E"
              >
                <EvKoreanFont size={25} isBold={true}>
                  진행중
                </EvKoreanFont>
              </QuestStateTitleBox>
              <QuestStateTextBox
                isContentSide={true}
                isAlignSide={true}
                rowGap={10}
                style={{
                  padding: "30px 10px",
                  minHeight: "100px",
                  border: "4px solid #FF8E8E",
                }}
              >
                <QuestIng />
              </QuestStateTextBox>
              <QuestStateTitleBox
                className="완료"
                margin="30px auto 0 auto"
                backgroundColor="#004257"
              >
                <EvKoreanFont size={25} isBold={true} color="white">
                  완료
                </EvKoreanFont>
              </QuestStateTitleBox>
              <QuestStateTextBox
                isContentSide={true}
                isAlignSide={true}
                rowGap={10}
                style={{
                  padding: "30px 10px",
                  minHeight: "100px",
                  border: "4px solid #004257",
                }}
              >
                <QuestFinish />
              </QuestStateTextBox>
              나중에 쓸 포지션 : {playerPosition}
            </EvColumnBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const QuestIng = () => {
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );

  return (
    <>
      {questProgressGather.q1TunaCan === "ing" && (
        <QuestTextFont>
          - 집에서 참치캔 2개를 찾아 고양이에게 가져다 주기
        </QuestTextFont>
      )}
      {questProgressGather.q2Key === "ing" && (
        <QuestTextFont>
          - 길에서 열쇠를 주워서 여우에게 가져다 주기
        </QuestTextFont>
      )}
      {questProgressGather.q3Port === "ing" && (
        <QuestTextFont>- 집 벽면의 포트폴리오 3개 확인하기</QuestTextFont>
      )}
      {questProgressGather.q4Photo === "ing" && (
        <QuestTextFont>- 앵무새에게 내 사진 확인하기</QuestTextFont>
      )}
      {questProgressGather.q5Memory === "ing" && (
        <QuestTextFont>
          - 길 끝 펭귄에게 기억을 다 찾았다고 말하기
        </QuestTextFont>
      )}
    </>
  );
};

export const QuestFinish = () => {
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  return (
    <>
      {questProgressGather.q1TunaCan === "finish" && (
        <QuestTextFont>
          - 집에서 참치캔 2개를 찾아 고양이에게 가져다 주기
        </QuestTextFont>
      )}
      {questProgressGather.q2Key === "finish" && (
        <QuestTextFont>
          - 길에서 열쇠를 주워서 여우에게 가져다 주기
        </QuestTextFont>
      )}
      {questProgressGather.q3Port === "finish" && (
        <QuestTextFont>- 집 벽면의 포트폴리오 3개 확인하기</QuestTextFont>
      )}
      {questProgressGather.q4Photo === "finish" && (
        <QuestTextFont>- 앵무새에게 내 사진 확인하기</QuestTextFont>
      )}
      {questProgressGather.q5Memory === "finish" && (
        <QuestTextFont>
          - 길 끝 펭귄에게 기억을 다 찾았다고 말하기
        </QuestTextFont>
      )}
    </>
  );
};
