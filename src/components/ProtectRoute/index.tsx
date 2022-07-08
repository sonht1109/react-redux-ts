import { Navigate } from 'react-router-dom';
import { STORAGE_TOKEN_KEY } from 'utils/constants';

function ProtectRoute({ children }: { children: any }) {
  if (!localStorage.getItem(STORAGE_TOKEN_KEY)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectRoute;
