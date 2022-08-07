import React from 'react';
import routes, { ItemRoute } from 'utils/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import ProtectRoute from 'components/ProtectRoute';

export default function MapRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {React.Children.toArray(routes.map(r => renderRouter(r)))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const renderRouter = (r: ItemRoute) => {
  const element = r?.element ? (
    r.private ? (
      <ProtectRoute>{r.element()}</ProtectRoute>
    ) : (
      r.element()
    )
  ) : null;

  if (!r.children) {
    return <Route path={r.path} index={r?.index || false} element={element} />;
  }

  return (
    <Route path={r.path}>
      <Route index element={element} />
      {React.Children.toArray(r.children.map(r => renderRouter(r)))}
    </Route>
  );
};
