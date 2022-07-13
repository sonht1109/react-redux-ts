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
        path: 'child',
        element: () => (
          <LazyComponent>
            <Demo />
          </LazyComponent>
        ),
        children: [
          {
            private: false,
            path: 'grandchild1',
            element: () => (
              <LazyComponent>
                <Home />
              </LazyComponent>
            ),
          },
          {
            private: true,
            path: 'grandchild2/:id',
            element: () => (
              <LazyComponent>
                <Demo />
              </LazyComponent>
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
