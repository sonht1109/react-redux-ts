import Home from 'containers/Home';

export interface ItemRoute {
  name: string;
  private: boolean;
  component?: Function;
  path?: string;
  child?: ItemRoute[];
}

const routes = [
  {
    name: 'Trang chủ',
    private: false,
    component: () => <Home />,
    path: '/',
  },
];

export default routes;
