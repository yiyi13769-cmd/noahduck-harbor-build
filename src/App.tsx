import { HomePage } from './pages/HomePage';
import { ShallowPage } from './pages/ShallowPage';
import { DeepPage } from './pages/DeepPage';
import { OpenSeaPage } from './pages/OpenSeaPage';
import { VaultPage } from './pages/VaultPage';
import { useEffect, useState } from 'react';

const routes = {
  '/': HomePage,
  '/shallow': ShallowPage,
  '/deep': DeepPage,
  '/open-sea': OpenSeaPage,
  '/vault': VaultPage,
};

export function App() {
  const [routeKey, setRouteKey] = useState(() => window.location.hash);

  useEffect(() => {
    const updateRoute = () => setRouteKey(window.location.hash);
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  const rawHash = routeKey.replace(/^#/, '');
  const rawPath = rawHash || window.location.pathname;
  const path = rawPath.replace(/\/$/, '') || '/';
  const Page = routes[path as keyof typeof routes] ?? HomePage;
  return <Page />;
}
