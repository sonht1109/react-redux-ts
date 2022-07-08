import React from 'react';
import routes from 'utils/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import ProtectRoute from 'components/ProtectRoute';

export default function MapRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {React.Children.toArray(
          routes.map(r => (
            <Route
              path={r.path}
              element={
                r.private ? (
                  <ProtectRoute>{r.component()}</ProtectRoute>
                ) : (
                  r.component()
                )
              }
            />
          )),
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
