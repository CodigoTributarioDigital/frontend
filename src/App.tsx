import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { allRoutes, RoutesType } from './common/config/routes';
import { theme } from './common/styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider theme={theme}>
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
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
