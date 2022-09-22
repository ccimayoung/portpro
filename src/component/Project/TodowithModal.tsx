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
import { TodowithSplide } from "./TodowithSplide";
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

export const TodowithModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  return (
    <>
      {modalGather.todowithModal && (
        <ModalBackground
          onClick={() => {
            const projectTimer = setTimeout(() => {
              setmodalGather({ ...modalGather, todowithModal: false });
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
                  setmodalGather({ ...modalGather, todowithModal: false });
                  clearTimeout(projectTimer);
                }, 200);
              }}
            />
            <TitleBox>
              <TitleFont>TODOWITH (투두윗)</TitleFont>
            </TitleBox>
            <EvFontBox
              className="subtitle"
              //   backgroundColor="blue"
              width={500}
              height={20}
              margin="5px auto 0px auto"
            >
              <EvKoreanFont size={15} color="#4F4F4F">
                2022.06 ~ 2022.08 협업 프로젝트(FE 2명, BE 3명, 디자이너 2명)
              </EvKoreanFont>
            </EvFontBox>
            <EvRowBox className="center wrap" margin="15px auto 0 auto">
              <EvColumnBox
                className="left photo"
                width={190}
                height={520}
                margin="0 0 0 auto"
              >
                <TodowithSplide />
              </EvColumnBox>
              <EvFontBox
                className="right text"
                width={475}
                height={480}
                margin="0 auto 40px 10px"
                // backgroundColor="blue"
                isAlignSide={true}
                isContentSide={true}
              >
                <TodowithExplainText />
              </EvFontBox>
            </EvRowBox>
            <EvRowBox
              className="bottom botton wrap"
              width={550}
              height={50}
              margin="0px auto auto auto"
              // backgroundColor="green"
              columnGap={15}
            >
              <EvProjectBtnAble
                className="readme btn"
                width={170}
                onClick={() =>
                  window.open(
                    "https://www.notion.so/Shim-A-Young-1dc0c70d78764f309d9829499d4bb53c#6ef578200aad4d73a0939e85d40cdf32",
                    "_blank"
                  )
                }
              >
                👉 상세 Readme 보기
              </EvProjectBtnAble>
              <EvProjectBtnAble
                className="link btn"
                width={170}
                onClick={() => window.open("https://todowith.co.kr", "_blank")}
              >
                👉 서비스 링크
              </EvProjectBtnAble>
              <EvProjectBtnAble
                className="github btn"
                width={170}
                onClick={() =>
                  window.open(
                    "https://github.com/HanghaeE5/Front-end",
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

export const TodowithExplainText = () => {
  return (
    <EvFontBox
      isAlignSide={true}
      isContentSide={true}
      style={{ overflowY: "scroll" }}
    >
      <BoardFontA>
        {`- Todo를 완료하며 캐릭터와 같이 성장하는 반응형 웹앱`}
      </BoardFontA>
      <BoardFontA>
        {`- 부트캠프 항해99 7기 39개 팀 중 `}
        {<span>1위 최우수 프로젝트 수상</span>}
      </BoardFontA>
      <BoardFontA>
        {`- 배포 8일간 방문유저 500명, 실유저 200명, 유저 TODO 3000개,`}
        {<span> 유저테스트 53개 달성</span>}
      </BoardFontA>
      <BoardFontA>
        {`- UT를 반영한 UI 개선 후 서비스 만족도(6점 만점 중 4.9점)와 가입 유저수 상승 `}
        <a
          className="linktag"
          href="https://www.notion.so/TODOWITH-e2c94553e7c245ef8d411b9aa4a752b3#46c5abd15b434de9ba5e38fd4345068c"
          target="_blank"
        >
          👉 UT 추가&개선 기능 보기
        </a>
      </BoardFontA>

      <BoardFontA margin="10px 0 0 0">
        {`- 주요 기술 : React, Typescript, PWA, SockJs, StompJS, React Query, Recoil, Github Actions, AWS, CloudFront
        `}
        <a
          className="linktag"
          href="https://www.notion.so/TODOWITH-e2c94553e7c245ef8d411b9aa4a752b3#1aff2c7659684ba285ca2e2b3b742c12"
          target="_blank"
        >
          👉 기술적 의사결정 (노션)
        </a>
      </BoardFontA>

      <BoardFontA margin="10px 0 3px 0">{`- 의의`}</BoardFontA>
      <BoardFontB>
        {`◾ 첫 프로젝트로 시작은 미미했으나, 1주일 112시간에 가까운 몰입을 통해 `}
        {<span>가파른 러닝커브</span>}
        {`로 39개팀 중 1위로 끝마친 프로젝트`}
      </BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 프론트 리더로서 디자이너와 백엔드 소통 담당. 프론트 코드의 75% 작성 (CICD/서버설정, Interceptors 로직, 로그인/회원가입/온보딩, 메인페이지, 채팅, 친구목록/친구페이지, 알림)
`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">
        {`◾`} {<span>UI/UX 에 딥다이브</span>}
        {`한 프론트엔드 개발자가 되겠다는 목표를 세우게 됨`}
      </BoardFontB>

      <BoardFontA margin="10px 0 3px 0">
        {`- 트러블슈팅`}
        <a
          className="linktag"
          href="https://github.com/HanghaeE5/Front-end/wiki"
          target="_blank"
        >
          👉 상세한 트러블슈팅 보러가기 (깃허브 위키)
        </a>
      </BoardFontA>
      <BoardFontB>
        {`◾ 마운트 속도, 리렌더링 최적화
        : 코드 리펙토링(useState, useRecoilState 객체화. API 후처리, onClick 공통로직 생성. gif 용량 감소 등) `}{" "}
        {
          <span>
            → 로드타임 38% 향상, LightHouse 테스트 성능 43점, 접근성 26점 향상
          </span>
        }
      </BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 캔버스 함수 브라우저 호환성 문제
      : 모바일 로컬 환경에서 navigator.userAgent로 안드로이드 브라우저 종류 파악 →  브라우저마다 다른 문자열을 이용하여 문제 브라우저 차단
`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">
        {`◾ 캐릭터 선택 API와 유저데이터 API 충돌 : cancelquery 명령으로 비동기로 실행되던 유저 데이터 API 취소`}
      </BoardFontB>

      <BoardFontA margin="10px 0 3px 0">{`- 주요 기능`}</BoardFontA>
      <BoardFontB>{`◾ 편의성 : 반응형, PWA, 알림 기능`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 페이지 : TODO 작성/완료/삭제, TODO완료에 따른 캐릭터 레벨업/스텝업,
1:1/단체채팅, 친구요청/수락/거절/삭제, 친구페이지, 랜덤이벤트, 커뮤니티
`}</BoardFontB>
      <BoardFontB margin="2px 0 0 0">{`◾ 인프라 : HTTPS 배포 및 CI/CD 구축 CloudFront + Gihub Action + S3`}</BoardFontB>
    </EvFontBox>
  );
};
