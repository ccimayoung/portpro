import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
import {
  modalGatherState,
  playerPositionState,
  questProgressGatherState,
} from "../recoil/store";
import { EvColumnBox, EvKoreanFont } from "../style/EvStyle";

import "../style/a-tag.css";

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

export const StarImg = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
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
              alt="??????"
              onClick={() => {
                setmodalGather({ ...modalGather, questModal: false });
              }}
            />
            <StarImg
              src="/assets/star.png"
              alt="??? ??????"
              style={{
                top: playerPosition[2] * 4.1 + 582,
                left: playerPosition[0] * 10 + 146,
              }}
            />
            <EvColumnBox<any>
              className="right wrap"
              width={350}
              height={520}
              margin="170px auto auto 390px"
              isContentSide={true}
            >
              <QuestStateTitleBox
                className="?????????"
                margin="0 auto"
                backgroundColor="#FF8E8E"
              >
                <EvKoreanFont size={25} isBold={true}>
                  ?????????
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
                className="??????"
                margin="30px auto 0 auto"
                backgroundColor="#004257"
              >
                <EvKoreanFont size={25} isBold={true} color="white">
                  ??????
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
          - ????????? ????????? 2?????? ?????? ??????????????? ????????? ??????
        </QuestTextFont>
      )}
      {questProgressGather.q2Key === "ing" && (
        <QuestTextFont>
          - ????????? ????????? ????????? ???????????? ????????? ??????
        </QuestTextFont>
      )}
      {questProgressGather.q3Port === "ing" && (
        <QuestTextFont>- ??? ????????? ??????????????? 3??? ????????????</QuestTextFont>
      )}
      {questProgressGather.q4Photo === "ing" && (
        <QuestTextFont>- ??????????????? ??? ?????? ????????????</QuestTextFont>
      )}
      {questProgressGather.q5Memory === "ing" && (
        <QuestTextFont>
          - ??? ??? ???????????? ????????? ??? ???????????? ?????????
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
          - ????????? ????????? 2?????? ?????? ??????????????? ????????? ??????
        </QuestTextFont>
      )}
      {questProgressGather.q2Key === "finish" && (
        <QuestTextFont>
          - ????????? ????????? ????????? ???????????? ????????? ??????
        </QuestTextFont>
      )}
      {questProgressGather.q3Port === "finish" && (
        <QuestTextFont>- ??? ????????? ??????????????? 3??? ????????????</QuestTextFont>
      )}
      {questProgressGather.q4Photo === "finish" && (
        <QuestTextFont>- ??????????????? ??? ?????? ????????????</QuestTextFont>
      )}
      {questProgressGather.q5Memory === "finish" && (
        <QuestTextFont>
          - ??? ??? ???????????? ????????? ??? ???????????? ?????????
        </QuestTextFont>
      )}
    </>
  );
};
