import styled from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
import {
  findObjectGatherState,
  memoriesGatherState,
  modalGatherState,
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
import "../../style/a-tag.css";

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

export const SgModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);

  return (
    <>
      {modalGather.sgModal && (
        <ModalBackground
          onClick={() => {
            const projectTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, sgModal: false });
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
                const projectTimer = setTimeout(() => {
                  setmodalGather({ ...modalGather, sgModal: false });
                  clearTimeout(projectTimer);
                }, 200);
              }}
            />
            <TitleBox>
              <TitleFont>브릿지 게임</TitleFont>
            </TitleBox>
            <EvFontBox
              className="subtitle"
              //   backgroundColor="blue"
              width={500}
              height={20}
              margin="5px auto 0px auto"
            >
              <EvKoreanFont size={15} color="#4F4F4F">
                2022.07 클론 코딩
              </EvKoreanFont>
            </EvFontBox>
            <EvColumnBox className="center wrap" margin="15px auto 0 auto">
              <EvColumnBox
                className="video"
                width={550}
                height={200}
                margin="20px auto 0 auto"
              >
                <video controls style={{ width: "550px" }}>
                  <source src="/assets/브릿지게임/브릿지게임.mp4" />
                </video>
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
                <SgExplainText />
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
                className="link btn"
                width={170}
                onClick={() =>
                  window.open(
                    "https://ccimayoung.github.io/bridgegame/",
                    "_blank"
                  )
                }
              >
                👉 서비스 링크
              </EvProjectBtnAble>
              <EvProjectBtnAble
                className="github btn"
                width={170}
                onClick={() =>
                  window.open(
                    "https://github.com/ccimayoung/bridgegame",
                    "_blank"
                  )
                }
              >
                👉 GitHub 보러가기
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

export const SgExplainText = () => {
  return (
    <EvFontBox
      isAlignSide={true}
      isContentSide={true}
      style={{ overflowY: "scroll" }}
    >
      <BoardFontA>
        {`- 강화유리와 일반유리가 랜덤으로 생성되는 다리를 끝까지 건너는 게임
        (체험을 위해 강화유리와 일반유리의 투명도에 약간의 차이를 설정했습니다🙂)`}
      </BoardFontA>

      <BoardFontA>
        {`- three.js, cannon.js, Blender, 바닐라JS를 이용한 오징어게임 다리건너기 클론 코딩`}
      </BoardFontA>
      <BoardFontA>
        {`- raycaster를 이용하여 클릭한 유리로 캐릭터가 이동.
        강화유리의 경우 성공이지만, 일반유리의 경우 추락하고 다리 조명이 꺼지며 게임 종료`}
      </BoardFontA>

      <BoardFontA margin="10px 0 3px 0">{`- 의의`}</BoardFontA>
      <BoardFontB>
        {`◾ cannon.js 물리엔진을 처음으로 도입. 질량, 중력, 마찰력, 반발력, 충돌에 대해 배움 `}
      </BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ blender에서 캐릭터와 애니메이션을 만드는 방법을 공부하고, 직접 만든 캐릭터를 활용함 `}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 바닐라JS에서 three.js의 mesh, scene, light 등을 사용할 수 있게 됨 `}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">
        {`◾`} {<span>다양한 인터렉티브</span>}
        {`를 활용한 프론트엔드 개발자가 되겠다는 목표를 세우게 됨`}
      </BoardFontB>

      <BoardFontA margin="10px 0 3px 0">{`- 주요 기능`}</BoardFontA>
      <BoardFontB>{`◾ 캐릭터 : blender를 이용해 생성. 애니메이션은 상황 별 3개로 구성 (기본동작, 점프, 추락 후)`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">
        {`◾ 클릭 방식 : raycaster 를 이용하여 유리 감지.`}
        {<span> 드래그 클릭 방지 모듈</span>}
        {`로 일정 범위와 시간을 초과하는 드래그 발생 시 raycaster 실행 방지`}
      </BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 물리엔진 : cannonworld를 생성하고 물체 충돌 상황에 따른 마찰력, 반발력 설정 `}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 질량 : 강화유리 질량 100, 일반유리 질량 1, 캐릭터의 질량 30으로 설정. 일반유리는 깨지는 물리엔진 적용`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 카메라 : 2가지 각도로 설정하여 추락 시 카메라 위치를 변동시켜 리플레이로 보여줌`}</BoardFontB>
    </EvFontBox>
  );
};
