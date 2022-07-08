import { Redirect, Route, RouteProps } from 'react-router-dom';
import { STORAGE_TOKEN_KEY } from 'utils/constants';

const CheckRoute = ({ children }: { children: any }) => {
  if (!localStorage.getItem(STORAGE_TOKEN_KEY)) {
    return <Redirect to="/login" />;
  }
  return children;
};

function ProtectRoute(props: RouteProps) {
  return (
    <CheckRoute>
      <Route {...props} />
    </CheckRoute>
  );
}

export default ProtectRoute
