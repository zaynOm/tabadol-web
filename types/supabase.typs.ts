export type Region = {
  id: number;
  name: string;
};

export type Province = {
  id: number;
  name: string;
  regionId: number;
};

export type Commune = {
  id: number;
  name: string;
  provinceId: number;
};
