import styled from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
import {
  findObjectGatherState,
  memoriesGatherState,
  questProgressGatherState,
} from "../../recoil/store";
import { EvFontBox, EvKoreanFont } from "../../style/EvStyle";

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
  width: 600px;
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  border-radius: 30px;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

export const QuitBox = styled.div`
  width: 60px;
  height: 60px;
  top: 20px;
  right: 20px;
  border: 3px solid black;
  border-radius: 50px;
  background-color: #ffffff;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuitImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const FindFont = styled(EvKoreanFont)`
  white-space: pre-line;
  line-height: 40px;
  margin-bottom: 2px;
  font-size: 30px;
  & > span:nth-of-type(1) {
    font-size: 30px;
    font-weight: 600;
    color: #ff007a;
  }
`;

export const FindPhotoModal = () => {
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
      {findObjectGather.photoModal && (
        <ModalBackground
          onClick={() => {
            setFindObjectGather({
              ...findObjectGather,
              photoModal: false,
            });
            setQuestProgressGather({
              ...questProgressGather,
              q4Photo: "finish",
            });
            setMemoriesGather({ ...memoriesGather, photoMemory: true });
          }}
        >
          <BoxWrap
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <QuitBox>
              <QuitImg
                src="/assets/reject.png"
                alt="??????"
                onClick={() => {
                  setFindObjectGather({
                    ...findObjectGather,
                    photoModal: false,
                  });
                  setQuestProgressGather({
                    ...questProgressGather,
                    q4Photo: "finish",
                  });
                  setMemoriesGather({ ...memoriesGather, photoMemory: true });
                }}
              />
            </QuitBox>
            <img
              style={{
                height: "330px",
                margin: "70px auto 30px auto ",
              }}
              src="/assets/quest.png"
              alt="?????????"
            ></img>
            <EvFontBox margin="10px auto auto auto">
              <FindFont>{<span>??? ?????????</span>}??? ?????????!</FindFont>
              <EvKoreanFont size={25} style={{ marginTop: "5px" }}>
                (????????? ?????? ????????????????????? ???????????? ??? ??? ?????????)
              </EvKoreanFont>
            </EvFontBox>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};
