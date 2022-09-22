import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
import { questGatherState, questProgressGatherState } from "../../recoil/store";
import { EvBtnAble, EvKoreanFont } from "../../style/EvStyle";
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
  background-image: url("/assets/말풍선/새말풍선.svg");
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

export const BirdQuestModal = () => {
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

  return (
    <>
      {questGather.birdQuestModal && (
        <ModalBackground
          onClick={() =>
            setQuestGather({ ...questGatherState, birdQuestModal: false })
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
                    birdQuestModal: false,
                  });
                }}
              />

              <BirdWord />
            </CatQuestBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const BirdWord = () => {
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const [questGather, setQuestGather] = useRecoilState(questGatherState);

  const nav = useNavigate();
  return (
    <>
      {/* 열쇠 찾았을때 */}
      <WordBox>
        <QuestFont
          size={25}
          weight={500}
          style={{ whiteSpace: "pre-line" }}
          lineHeight={"32px"}
        >
          {`너가 조난당한 애야??
          내가 너 배에서`}

          {<span> 사진</span>}
          {`을 몇 장 가져왔는데 봐바!
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
            birdQuestModal: false,
          });
          setQuestProgressGather({
            ...questProgressGather,
            q4Photo: "ing",
          });
          const navTimer = setTimeout(() => {
            nav("/photoparticle");
            clearTimeout(navTimer);
          }, 200);
        }}
      >
        사진 파티클 보러가기
      </EvBtnAble>
    </>
  );
};
