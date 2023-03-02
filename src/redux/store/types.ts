export interface ICard {
  people: IPeopleCard[];
  isLoading: boolean;
  count: number;
  next: string;
  previous?: string | null;
  moreIsLoading: boolean;
}

export interface IPeopleCard {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
