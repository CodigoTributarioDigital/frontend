import VLibras from '@djpfs/react-vlibras';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { allRoutes, RoutesType } from './common/config/routes';
import { theme } from './common/styles/theme';
import { ModalsProvider } from '@mantine/modals';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider theme={theme}>
        <VLibras forceOnload={true} />
        <ModalsProvider>
          <BrowserRouter>
            <Routes>
              {allRoutes.map((route: RoutesType, index: number) => (
                <Route
                  path={route.path}
                  key={index}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
