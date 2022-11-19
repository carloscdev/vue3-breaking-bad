export interface CharacterInterface {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: Status;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
}

export enum Status {
  Alive = "Alive",
  Deceased = "Deceased",
  PresumedDead = "PresumedDead",
  Unknown = "Unknown",
}