export interface ICard {
  people: IPeopleCard[];
  isLoading: boolean;
  total: number;
}

export interface IPeopleCard {
  name: string;
  age: number;
}
