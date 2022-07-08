import { LazyComponent } from 'components/Loading';
import { lazy } from 'react';
const Home = lazy(() => import('containers/Home'));
const Demo = lazy(() => import('containers/Demo'));

export interface ItemRoute {
  name: string;
  private: boolean;
  component?: () => JSX.Element;
  path?: string;
  child?: ItemRoute[];
  index?: boolean;
}

const routes = [
  {
    name: 'Trang chủ',
    private: false,
    component: () => (
      <LazyComponent>
        <Home />
      </LazyComponent>
    ),
    path: '/',
  },
  {
    name: 'Demo',
    private: true,
    component: () => (
      <LazyComponent>
        <Demo />
      </LazyComponent>
    ),
    path: '/demo',
  },
];

export default routes;
