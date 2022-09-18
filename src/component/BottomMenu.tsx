import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { modalGatherState } from "../recoil/store";

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
  gap: 20px;
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
  const [modalGather, setmodalGather] = useRecoilState(modalGatherState);
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
      <RightImgBox>
        <ImgContent
          src="/assets/quest.png"
          alt="퀘스트"
          onClick={() => {
            setmodalGather({ ...modalGather, memoriesModal: true });
          }}
        />

        <ImgContent
          src="/assets/location.png"
          alt="지도"
          onClick={() => {
            setmodalGather({ ...modalGather, mapModal: true });
          }}
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
