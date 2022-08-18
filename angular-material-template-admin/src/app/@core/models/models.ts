export interface NavBar {
  path: string;
  title: string;
  icon: string;
}

export interface Title {
  ev: string,
  value: ValueContentTop []
}

export interface ValueContentTop {
  actived: boolean,
  name: string,
  routerLink: string
}
