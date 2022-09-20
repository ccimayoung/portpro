import { atom } from "recoil";
// import { recoilPersist } from 'recoil-persist';
// const { persistAtom } = recoilPersist();

export type modalGather = {
  houseInExplainModal?: boolean;
  questionModal?: boolean;
  questModal?: boolean;
  memoriesModal?: boolean;
  bagModal?: boolean;
  todowithModal?: boolean;
  utModal?: boolean;
  sgModal?: boolean;
};

export const modalGatherState = atom<modalGather>({
  key: "modalGatherState",
  default: {
    houseInExplainModal: false,
    questionModal: true,
    questModal: false,
    memoriesModal: false,
    bagModal: false,
    todowithModal: false,
    utModal: false,
    sgModal: false,
  },
});

export type bagGather = {
  tonaCan1?: boolean;
  tonaCan2?: boolean;
  key1?: boolean;
};

export const bagGatherState = atom<bagGather>({
  key: "bagGatherState",
  default: {
    tonaCan1: false,
    tonaCan2: false,
    key1: false,
  },
});

// export type findObjectGather = {
//   [objectState: string]: { [state: string]: boolean };
// };

// export const findObjectGatherState = atom<findObjectGather>({
//   key: "findObjectGatherState",
//   default: {
//     tonaCan1: { find: false, modal: false },
//     tonaCan2: { find: false, modal: false },
//   },
// });

export type findObjectGather = {
  tonaCan1Find?: boolean;
  tonaCan2Find?: boolean;
  tonaCan1Modal?: boolean;
  tonaCan2Modal?: boolean;
  keyFind: boolean;
  keyModal: boolean;
};

export const findObjectGatherState = atom<findObjectGather>({
  key: "findObjectGatherState",
  default: {
    tonaCan1Find: false,
    tonaCan2Find: false,
    tonaCan1Modal: false,
    tonaCan2Modal: false,
    keyFind: false,
    keyModal: false,
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

export const playerPositionState = atom({
  key: "playerPositionState",
  default: [0, 0, 0],
});

export type questGather = {
  catQuestModal1?: boolean;
  foxQuestModal?: boolean;
};

export const questGatherState = atom<questGather>({
  key: "questGatherState",
  default: {
    catQuestModal1: false,
    foxQuestModal: false,
  },
});

export type questProgressGather = {
  q1TunaCan?: string;
  q2Key?: string;
  q3Port?: string;
  q4Photo?: string;
  q5Memory?: string;
};

export const questProgressGatherState = atom<questProgressGather>({
  key: "questProgressGatherState",
  default: {
    q1TunaCan: "no",
    q2Key: "no",
    q3Port: "no",
    q4Photo: "no",
    q5Memory: "no",
  },
});
