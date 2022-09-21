import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React, { useState, useRef } from "react";
import {
  findObjectGatherState,
  memoriesGatherState,
  modalGatherState,
  questProgressGatherState,
} from "../../recoil/store";
import {
  EvColumnBox,
  EvFontBox,
  EvKoreanFont,
  EvProjectBtnAble,
  EvRowBox,
  TitleBox,
  TitleFont,
} from "../../style/EvStyle";
import { TodowithSplide } from "./TodowithSplide";
import "../../style/a-tag.css";
import { UtSplide } from "./UtSplide";

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
  width: 800px;
  height: 800px;
  animation: ${Slide} 0.6s ease;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("/assets/종이 압축.png");
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

export const UtModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);

  return (
    <>
      {modalGather.utModal && (
        <ModalBackground
          onClick={() => {
            setMemoriesGather({ ...memoriesGather, utMemory: true });

            const projectTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, utModal: false });
              const memoryTimer = setTimeout(() => {
                setFindObjectGather({
                  ...findObjectGather,
                  projectUt: true,
                  projectModal: true,
                });
                clearTimeout(memoryTimer);
              }, 300);

              clearTimeout(projectTimer);
            }, 200);
          }}
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
                setMemoriesGather({ ...memoriesGather, utMemory: true });

                const projectTimer = setTimeout(() => {
                  setmodalGather({ ...modalGather, utModal: false });
                  const memoryTimer = setTimeout(() => {
                    setFindObjectGather({
                      ...findObjectGather,
                      projectUt: true,
                      projectModal: true,
                    });
                    clearTimeout(memoryTimer);
                  }, 300);

                  clearTimeout(projectTimer);
                }, 200);
              }}
            />
            <TitleBox>
              <TitleFont>우당탕탕 탐험일기</TitleFont>
            </TitleBox>
            <EvFontBox
              className="subtitle"
              //   backgroundColor="blue"
              width={500}
              height={20}
              margin="5px auto 0px auto"
            >
              <EvKoreanFont size={15} color="#4F4F4F">
                2022.09 1인 개인 프로젝트
              </EvKoreanFont>
            </EvFontBox>
            <EvColumnBox className="center wrap" margin="15px auto 0 auto">
              <EvColumnBox
                className="video"
                width={550}
                height={200}
                margin="20px auto 0 auto"
              >
                <UtSplide />
              </EvColumnBox>
              <EvFontBox
                className="right text"
                width={650}
                height={230}
                margin="50px auto 20px auto"
                // backgroundColor="blue"
                isAlignSide={true}
                isContentSide={true}
              >
                <UtExplainText />
              </EvFontBox>
            </EvColumnBox>
            <EvRowBox
              className="bottom botton wrap"
              width={550}
              height={50}
              margin="0px auto auto auto"
              // backgroundColor="green"
              columnGap={15}
            >
              <EvProjectBtnAble
                className="github btn"
                width={170}
                onClick={() =>
                  window.open("https://github.com/ccimayoung/portpro", "_blank")
                }
              >
                👉 GitHub 보러가기
              </EvProjectBtnAble>
              <EvProjectBtnAble
                className="github btn"
                width={170}
                onClick={() =>
                  window.open(
                    "https://www.figma.com/file/VatAYk9Dyzgtxw1Ci7nbcg/%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-%ED%83%90%ED%97%98%EC%9D%BC%EA%B8%B0?node-id=0%3A1",
                    "_blank"
                  )
                }
              >
                👉 Figma 보러가기
              </EvProjectBtnAble>
            </EvRowBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

type boardFont = {
  margin?: string;
};

export const BoardFontA = styled(EvKoreanFont)`
  white-space: pre-line;
  align-content: left;
  padding-left: 13px;
  text-indent: -13px;
  line-height: 23px;
  margin-bottom: 3px;
  margin: ${(props: boardFont) => props.margin};
  & > span:nth-of-type(1) {
    font-weight: 600;
    color: #ff007a;
  }
`;

export const BoardFontB = styled(EvKoreanFont)`
  white-space: pre-line;
  align-content: left;
  padding-left: 25px;
  text-indent: -13px;
  line-height: 18px;
  margin-bottom: 2px;
  font-size: 14px;
  margin: ${(props: boardFont) => props.margin};
  & > span:nth-of-type(1) {
    font-size: 14px;
    font-weight: 600;
    color: #ff007a;
  }
`;

export const UtExplainText = () => {
  return (
    <EvFontBox
      isAlignSide={true}
      isContentSide={true}
      style={{ overflowY: "scroll" }}
    >
      <BoardFontA>
        {`- 기억을 잃은 심아영씨가 퀘스트를 수행하고 탐험하며 기억을 찾아가는 게임 `}
      </BoardFontA>
      <BoardFontA>
        {`- three.js, cannon.js, Blender, React를 이용한 `}
        {<span>웹 게임 형식 포트폴리오</span>}
      </BoardFontA>

      <BoardFontA margin="10px 0 3px 0">{`- 의의`}</BoardFontA>
      <BoardFontB>
        {`◾ `} {<span>살아있는 서비스</span>}
        {`를 만들기 위해 three.js를 독학하고 만든 첫 프로젝트 `}
      </BoardFontB>
      <BoardFontB>
        {`◾ 바닐라 JS로 공부했던 three.js를`} {<span>리액트</span>}
        {`로 구현할 수 있게 됨`}
      </BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 스토리를 구상하며 게임 형식으로 재밌게 만든 포트폴리오`}</BoardFontB>

      <BoardFontA margin="10px 0 3px 0">{`- 주요 기능`}</BoardFontA>
      <BoardFontB>{`◾ 정글 맵 : PointerLockControls + keyController 사용. 마인크래프트 느낌의 캐릭터 이동, 시점 이동 방식`}</BoardFontB>
      <BoardFontB>{`◾ 실내 맵 : OrbitControls 사용. 마우스 시점 이동 방식`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 물리엔진 : 정글 맵의 통나무와 캐릭터의 물체 충돌에 따른 마찰력, 반발력 설정. 점프를 해서 넘도록 설정 `}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ Particle : 랜덤 상수를 이용하여 랜덤 이미지 패널 구현 및 시점 변경`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 고양이 position : 고양이 퀘스트 완료 시 고양이 mesh가 플레이어 mesh 위치를 따라가게 설정`}</BoardFontB>

      <BoardFontB margin="2px 0 0 0">{`◾ 포트폴리오 : 퀘스트 완성도에 따라 포트폴리오 모달이 점차 완성됨`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 가방 : 아이템 습득 시 가방에 넣음`}</BoardFontB>
    </EvFontBox>
  );
};
