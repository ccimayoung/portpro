import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import {
  findObjectGatherState,
  modalGatherState,
  questProgressGatherState,
} from "../recoil/store";

export const HouseInMapExplainImgBox = styled.div`
  height: 100px;
  background: #ffffffdc;
  position: fixed;
  left: calc(2% + 100px);
  margin: -115px 0 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

export const LeftImgBox = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffffdc;
  position: fixed;
  left: 1%;
  margin: -115px 0 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RightImgBox = styled.div`
  width: 300px;
  height: 100px;
  background: #ffffffdc;
  position: fixed;
  right: 1%;
  margin: -115px 0 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

export const ImgContent = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const BottomMenu = () => {
  const url = window.location.href;
  const lastUrl = url.split("/");
  const find = lastUrl[lastUrl.length - 1];
  console.log(find);
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [findObjectGather, setFindObjectGather] = useRecoilState(
    findObjectGatherState
  );
  const [questProgressGather, setQuestProgressGather] = useRecoilState(
    questProgressGatherState
  );
  const nav = useNavigate();
  useEffect(() => {}, [url]);
  return (
    <>
      <LeftImgBox>
        <ImgContent
          src="/assets/question.png"
          alt="물음표"
          onClick={() => {
            setmodalGather({ ...modalGather, questionModal: true });
          }}
        />
      </LeftImgBox>

      {find === "photoparticle" ? (
        <HouseInMapExplainImgBox style={{ width: "100px" }}>
          <ImgContent
            src="/assets/정글맵돌아가기.png"
            alt="정글맵돌아가기"
            onClick={() => {
              nav("/");
            }}
          />
        </HouseInMapExplainImgBox>
      ) : find === "houseinmap" ? (
        <HouseInMapExplainImgBox>
          <ImgContent
            src="/assets/집안맵 설명.png"
            alt="집안맵 설명"
            onClick={() => {
              setmodalGather({ ...modalGather, houseInExplainModal: true });
            }}
          />
          <ImgContent
            src="/assets/정글맵돌아가기.png"
            alt="정글맵돌아가기"
            onClick={() => {
              nav("/");
            }}
          />
        </HouseInMapExplainImgBox>
      ) : (
        ""
      )}

      <RightImgBox>
        <ImgContent
          src="/assets/quest.png"
          alt="포트폴리오"
          onClick={() => {
            setmodalGather({ ...modalGather, memoriesModal: true });
          }}
        />

        <ImgContent
          src="/assets/location.png"
          alt="퀘스트"
          onClick={() => setmodalGather({ ...modalGather, questModal: true })}
        />
        <ImgContent
          src="/assets/backpack.png"
          alt="가방"
          onClick={() => {
            setmodalGather({ ...modalGather, bagModal: true });
          }}
        />
      </RightImgBox>
    </>
  );
};
