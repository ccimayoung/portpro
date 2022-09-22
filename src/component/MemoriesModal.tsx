import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import React from "react";
import { memoriesGatherState, modalGatherState } from "../recoil/store";
import {
  EvColumnBox,
  EvFontBox,
  EvKoreanFont,
  EvProjectBtnAble,
  EvRowBox,
  MemoryTitleBox,
  TitleFont,
} from "../style/EvStyle";
import { TodowithSplide } from "./Project/TodowithSplide";
import { TodowithExplainText } from "./Project/TodowithModal";
import { UtExplainText } from "./Project/UtModal";
import { UtSplide } from "./Project/UtSplide";
import { SgExplainText } from "./Project/SgModal";
import mySkills1 from "../style/memoriesSkills/skills1.png";
import mySkills2 from "../style/memoriesSkills/skills2.png";
import mySkills3 from "../style/memoriesSkills/skills3.png";

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
  width: 845px;
  height: 830px;
  animation: ${Slide} 0.6s ease;
  background-image: url("/assets/종이.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 5;
`;

export const QuitImg = styled.img`
  width: 50px;
  height: 50px;
  top: 55px;
  right: 20px;
  position: absolute;
  cursor: pointer;
`;

const MemoriesContentWrap = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 720px;
  height: 680px;
  margin: 110px auto 0px 100px;
  /* background-color: green; */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MemoryPartWrap = styled(EvColumnBox)`
  box-sizing: content-box;
  padding: 15px;
  border-radius: 30px;
  display: flex;
  width: 675px;
  background-color: #ddffc3;
  margin: 0 auto 70px 0;
`;

export const NoMemoryPartWrap = styled(EvColumnBox)`
  box-sizing: content-box;
  padding: 15px;
  border-radius: 30px;
  border: 2px dashed black;
  display: flex;
  width: 675px;
  margin: 0 auto 70px 0;
`;

export const ProfileTextFont = styled(EvKoreanFont)`
  white-space: pre-line;
  align-content: left;
  padding-left: 55px;
  text-indent: -55px;
  line-height: 35px;
  margin-bottom: 3px;
  font-size: 22px;
`;

export const MemoriesModal = () => {
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
  const [memoriesGather, setMemoriesGather] =
    useRecoilState(memoriesGatherState);

  return (
    <>
      {modalGather.memoriesModal && (
        <ModalBackground
          onClick={() =>
            setmodalGather({ ...modalGather, memoriesModal: false })
          }
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
                setmodalGather({ ...modalGather, memoriesModal: false });
              }}
            />
            <MemoriesContentWrap
              className="Content Wrap"
              // backgroundColor="skyblue"
            >
              {memoriesGather.photoMemory ? <ProfileWrap /> : <NoProfileWrap />}
              {memoriesGather.utMemory ? <UtMemory /> : <NoUtMemory />}
              {memoriesGather.todowithMemory ? (
                <TodowithMemory />
              ) : (
                <NoTodowithMemory />
              )}
              {memoriesGather.sgMemory ? <SgMemory /> : <NoSgMemory />}
            </MemoriesContentWrap>
          </BoxWrap>
        </ModalBackground>
      )}
    </>
  );
};

export const ProfileWrap = () => {
  return (
    <MemoryPartWrap className="UT">
      <MemoryTitleBox margin="10px auto 30px auto ">
        <TitleFont>Profile</TitleFont>
      </MemoryTitleBox>
      <EvRowBox columnGap={25}>
        <EvColumnBox
          className="photo"
          width={186}
          height={249}
          borderRadius="30px"
          url={"url(/assets/프로필/프로필사진.jpg)"}
        ></EvColumnBox>
        <EvFontBox
          className="propile text"
          width={440}
          height={249}
          isAlignSide={true}
          isContentSide={true}
        >
          <ProfileTextFont>{`이름 : 심아영`}</ProfileTextFont>
          <ProfileTextFont>{`생년월일 : 96.01.15`}</ProfileTextFont>
          <ProfileTextFont>{`주소지 : 성남시 분당구`}</ProfileTextFont>
          <ProfileTextFont>{`연락처 : 010-2935-1666`}</ProfileTextFont>
          <ProfileTextFont>{`이메일 : ccimayoung@gmail.com`}</ProfileTextFont>
          <ProfileTextFont>{`학력 : 컴퓨터공학 - 학점은행 졸업
          언론정보, 경영학 - 경희대 서울캠 졸업예정`}</ProfileTextFont>
        </EvFontBox>
      </EvRowBox>
      <MemoryTitleBox margin="50px auto 30px auto ">
        <TitleFont>Skils</TitleFont>
      </MemoryTitleBox>
      <EvRowBox columnGap={35}>
        <EvFontBox
          className="left skills"
          width={310}
          height={260}
          isAlignSide={true}
          isContentSide={true}
        >
          <EvKoreanFont size={20} isBold={true}>
            Front-end
          </EvKoreanFont>
          <img
            style={{ width: "290px", margin: "5px 0 40px 0" }}
            src={mySkills1}
            alt="프론트엔드스킬"
          ></img>
          <EvKoreanFont size={20} isBold={true}>
            Design
          </EvKoreanFont>
          <img
            style={{ width: "290px", margin: "5px 0 0 0" }}
            src={mySkills3}
            alt="디자인스킬"
          ></img>
        </EvFontBox>
        <EvFontBox
          className="right skills"
          width={310}
          height={260}
          isAlignSide={true}
          isContentSide={true}
        >
          <EvKoreanFont size={20} isBold={true}>
            Deployment & Version Control
          </EvKoreanFont>
          <img
            style={{ width: "325px", margin: "5px 0 40px 0" }}
            src={mySkills2}
            alt="인프라스킬"
          ></img>
        </EvFontBox>
      </EvRowBox>
    </MemoryPartWrap>
  );
};

export const UtMemory = () => {
  return (
    <MemoryPartWrap className="UT">
      <MemoryTitleBox>
        <TitleFont>우당탕탕 탐험일기</TitleFont>
      </MemoryTitleBox>
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
          className="up photo"
          width={550}
          height={200}
          margin="20px auto 0 auto"
          // backgroundColor="pink"
        >
          <UtSplide />
        </EvColumnBox>
        <EvFontBox
          className="under text"
          width={675}
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
      </EvRowBox>
    </MemoryPartWrap>
  );
};

export const TodowithMemory = () => {
  return (
    <MemoryPartWrap className="todowith">
      <MemoryTitleBox margin="10px auto 0 auto ">
        <TitleFont>TODOWITH (투두윗)</TitleFont>
      </MemoryTitleBox>
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
          // backgroundColor="pink"
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
            window.open("https://github.com/HanghaeE5/Front-end", "_blank")
          }
        >
          👉 GitHub 보러가기
        </EvProjectBtnAble>
      </EvRowBox>
    </MemoryPartWrap>
  );
};

export const SgMemory = () => {
  return (
    <MemoryPartWrap className="sg">
      <MemoryTitleBox>
        <TitleFont>브릿지 게임</TitleFont>
      </MemoryTitleBox>
      <EvFontBox
        className="subtitle"
        //   backgroundColor="blue"
        width={500}
        height={20}
        margin="5px auto 0px auto"
      >
        <EvKoreanFont size={15} color="#4F4F4F">
          2022.08 클론 코딩
        </EvKoreanFont>
      </EvFontBox>
      <EvColumnBox className="center wrap" margin="15px auto 0 auto">
        <EvColumnBox
          className="video"
          width={550}
          height={200}
          margin="20px auto 0 auto"
          backgroundColor="pink"
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
            window.open("https://ccimayoung.github.io/bridgegame/", "_blank")
          }
        >
          👉 서비스 링크
        </EvProjectBtnAble>
        <EvProjectBtnAble
          className="github btn"
          width={170}
          onClick={() =>
            window.open("https://github.com/ccimayoung/bridgegame", "_blank")
          }
        >
          👉 GitHub 보러가기
        </EvProjectBtnAble>
      </EvRowBox>
    </MemoryPartWrap>
  );
};

export const NoProfileWrap = () => {
  return (
    <NoMemoryPartWrap className="UT">
      <MemoryTitleBox margin="10px auto 30px auto ">
        <TitleFont>Profile</TitleFont>
      </MemoryTitleBox>
      <EvRowBox columnGap={25}>
        <EvColumnBox
          className="photo"
          width={186}
          height={249}
          borderRadius="30px"
          border="2px dashed black"
        >
          <EvKoreanFont size={70} isBold={true}>
            ?
          </EvKoreanFont>
        </EvColumnBox>
        <EvFontBox
          className="propile text"
          width={440}
          height={249}
          isAlignSide={true}
          isContentSide={true}
        ></EvFontBox>
      </EvRowBox>
      <MemoryTitleBox margin="50px auto 30px auto ">
        <TitleFont>Skils</TitleFont>
      </MemoryTitleBox>
      <EvRowBox columnGap={35} width={655} height={260}></EvRowBox>
    </NoMemoryPartWrap>
  );
};

export const NoUtMemory = () => {
  return (
    <NoMemoryPartWrap className="UT">
      <MemoryTitleBox>
        <TitleFont>우당탕탕 탐험일기</TitleFont>
      </MemoryTitleBox>
      <EvFontBox
        className="subtitle"
        //   backgroundColor="blue"
        width={500}
        height={20}
        margin="5px auto 0px auto"
      ></EvFontBox>
      <EvColumnBox className="center wrap" margin="15px auto 0 auto">
        <EvColumnBox
          className="up photo"
          width={550}
          height={220}
          margin="0px auto 0 auto"
          border="2px dashed black"
        >
          {" "}
          <EvKoreanFont size={70} isBold={true}>
            ?
          </EvKoreanFont>
          {/* <UtSplide /> */}
        </EvColumnBox>
        <EvFontBox
          className="under text"
          width={675}
          height={230}
          margin="50px auto 20px auto"
          // backgroundColor="blue"
          isAlignSide={true}
          isContentSide={true}
        ></EvFontBox>
      </EvColumnBox>
      <EvRowBox
        className="bottom botton wrap"
        width={550}
        height={50}
        margin="0px auto auto auto"
        // backgroundColor="green"
        columnGap={15}
      ></EvRowBox>
    </NoMemoryPartWrap>
  );
};

export const NoTodowithMemory = () => {
  return (
    <NoMemoryPartWrap className="todowith">
      <MemoryTitleBox margin="10px auto 0 auto ">
        <TitleFont>TODOWITH (투두윗)</TitleFont>
      </MemoryTitleBox>
      <EvFontBox
        className="subtitle"
        //   backgroundColor="blue"
        width={500}
        height={20}
        margin="5px auto 0px auto"
      ></EvFontBox>
      <EvRowBox className="center wrap" margin="15px auto 0 auto">
        <EvColumnBox
          className="left photo"
          width={190}
          height={490}
          margin="0 0 20px auto"
          border="2px dashed black"
          // backgroundColor="pink"
        >
          <EvKoreanFont size={70} isBold={true}>
            ?
          </EvKoreanFont>
          {/* <TodowithSplide /> */}
        </EvColumnBox>
        <EvFontBox
          className="right text"
          width={475}
          height={480}
          margin="0 auto 40px 10px"
          // backgroundColor="blue"
          isAlignSide={true}
          isContentSide={true}
        ></EvFontBox>
      </EvRowBox>
      <EvRowBox
        className="bottom botton wrap"
        width={550}
        height={50}
        margin="0px auto auto auto"
        // backgroundColor="green"
        columnGap={15}
      ></EvRowBox>
    </NoMemoryPartWrap>
  );
};

export const NoSgMemory = () => {
  return (
    <NoMemoryPartWrap className="sg">
      <MemoryTitleBox>
        <TitleFont>브릿지 게임</TitleFont>
      </MemoryTitleBox>
      <EvFontBox
        className="subtitle"
        //   backgroundColor="blue"
        width={500}
        height={20}
        margin="5px auto 0px auto"
      ></EvFontBox>
      <EvColumnBox className="center wrap" margin="15px auto 0 auto">
        <EvColumnBox
          className="video"
          width={550}
          height={250}
          margin="20px auto -50px auto"
          border="2px dashed black"
        >
          <EvKoreanFont size={70} isBold={true}>
            ?
          </EvKoreanFont>
        </EvColumnBox>
        <EvFontBox
          className="right text"
          width={650}
          height={230}
          margin="50px auto 20px auto"
          // backgroundColor="blue"
          isAlignSide={true}
          isContentSide={true}
        ></EvFontBox>
      </EvColumnBox>
      <EvRowBox
        className="bottom botton wrap"
        width={550}
        height={50}
        margin="0px auto auto auto"
        // backgroundColor="green"
        columnGap={15}
      ></EvRowBox>
    </NoMemoryPartWrap>
  );
};
