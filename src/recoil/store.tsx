import { atom } from "recoil";
// import { recoilPersist } from 'recoil-persist';
// const { persistAtom } = recoilPersist();

export type modalGather = {
  questionModal?: boolean;
  memoriesModal?: boolean;
  bagModal?: boolean;
  mapModal?: boolean;
  todowithModal?: boolean;
  utModal?: boolean;
  sgModal?: boolean;
};

export const modalGatherState = atom<modalGather>({
  key: "modalGatherState",
  default: {
    questionModal: false,
    memoriesModal: false,
    bagModal: false,
    mapModal: false,
    todowithModal: false,
    utModal: false,
    sgModal: false,
  },
});

export type memoriesGather = {
  photoMemory?: boolean;
  skillsMemory?: boolean;
  utMemory?: boolean;
  todowithMemory?: boolean;
  sgMemory?: boolean;
};

export const memoriesGatherState = atom<memoriesGather>({
  key: "memoriesGatherState",
  default: {
    photoMemory: false,
    skillsMemory: false,
    utMemory: false,
    todowithMemory: false,
    sgMemory: false,
  },
});

export const playerPositionForCatState = atom({
  key: "playerPositionForCatState",
  default: [0, 0, 0],
});

export type questGather = {
  catQuestModal1?: boolean;
};

export const questGatherState = atom<questGather>({
  key: "questGatherState",
  default: {
    catQuestModal1: false,
  },
});
