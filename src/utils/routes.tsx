import { LazyComponent } from 'components/Loading';
import { lazy } from 'react';

// YOU SHOULD IMPORT AS LAZY HERE
const Home = lazy(() => import('containers/Home'));
const Demo = lazy(() => import('containers/Demo'));

export interface ItemRoute {
  name?: string;
  private: boolean;
  element?: () => JSX.Element;
  path: string;
  children?: ItemRoute[];
  index?: boolean; // read react-route-dom v6 for more information about "index"
}

const routes: ItemRoute[] = [
  {
    private: false,
    path: '/',
    element: () => (
      <LazyComponent>
        <Home />
      </LazyComponent>
    ),
    children: [
      {
        private: true,
        element: () => (
          <LazyComponent>
            <Demo />
          </LazyComponent>
        ),
        path: 'child',
        children: [
          {
            private: false,
            element: () => (
              <LazyComponent>
                <Home />
              </LazyComponent>
            ),
            path: 'grandchild1',
          },
          {
            private: true,
            element: () => (
              <LazyComponent>
                <Demo />
              </LazyComponent>
            ),
            path: 'grandchild2/:id',
          },
        ],
      },
    ],
  },
];

export default routes;
