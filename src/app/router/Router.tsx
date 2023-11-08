import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { TabsSystemContainer } from '../shared/components/tabs-system/Tabs-system-container';
import { TABS_CONFIG } from '../../config/tabs.config';
import { PrivateRoute } from './guards/Private-route';
import { SignIn } from '../modules/home/features/sign-in/Sign-in';
import { autoRepairApiAuthRepository } from '../shared/repositories/auto-repair-api';

const Home = lazy(() => import('../modules/home/Home').then(({ Home }) => ({ default: Home })));
const Layout = lazy(() => import('../layout/Layout').then(({ Layout }) => ({ default: Layout })));
const SignUp = lazy(() =>
  import('../modules/home/features/sign-up/Sign-up').then(({ SignUp }) => ({ default: SignUp })),
);

export function Router() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<SignIn authProvider={autoRepairApiAuthRepository()} />} />
          <Route path="sign-up" element={<SignUp authProvider={autoRepairApiAuthRepository()} />} />
          <Route path="sign-in" element={<Home />} />
          <Route path="private" element={<Layout />}>
            <Route
              path=""
              element={
                <PrivateRoute>
                  <TabsSystemContainer containerId={TABS_CONFIG.tabContainerId} config={TABS_CONFIG.config} />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
