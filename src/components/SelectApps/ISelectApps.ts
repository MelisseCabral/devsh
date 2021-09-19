export interface IApp {
  name: string;
  commands: string;
  icon: string;
  defaultCheck: boolean;
}

export interface ICategory {
  name: string;
  apps: IApp[];
}
