import { atom } from "recoil";
// import { recoilPersist } from 'recoil-persist';
// const { persistAtom } = recoilPersist();

export type modalGather = {
  questionModal?: boolean;
  questModal?: boolean;
  bagModal?: boolean;
  mapModal?: boolean;
};

export const modalGatherState = atom<modalGather>({
  key: "modalGatherState",
  default: {
    questionModal: false,
    questModal: false,
    bagModal: false,
    mapModal: false,
  },
});

export const playerPositionForCatState = atom({
  key: "playerPositionForCatState",
  default: [0, 0, 0],
});
