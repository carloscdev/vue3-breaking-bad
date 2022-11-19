export interface RouteLink {
  name: string;
  path: string;
  title: string;
}

export const routeLink: RouteLink[] = [
  {
    name: 'home',
    path: '/',
    title: 'Home',
  },
  {
    name: 'characters',
    path: '/characters',
    title: 'Characters',
  }
]