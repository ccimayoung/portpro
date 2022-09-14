import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { modalGatherState } from "../recoil/store";

export const ImgBox = styled.div`
  width: 300px;
  height: 100px;
  background: #ffffffd3;
  position: fixed;
  right: 2%;
  margin: -150px 0 0 0;
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
    <ImgBox>
      <ImgContent
        src="/quest.png"
        alt="퀘스트"
        onClick={() => {
          setmodalGather({ ...modalGather, questModal: true });
        }}
      />
      <ImgContent
        src="/backpack.png"
        alt="가방"
        onClick={() => {
          setmodalGather({ ...modalGather, bagModal: true });
        }}
      />
      <ImgContent
        src="/location.png"
        alt="지도"
        onClick={() => {
          setmodalGather({ ...modalGather, mapModal: true });
        }}
      />
    </ImgBox>
  );
};
