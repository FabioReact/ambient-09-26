import { BrowserRouter } from 'react-router';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './providers/AuthContextProvider';
import { SquadContextProvider } from './providers/SquadContextProvider';

const client = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <SquadContextProvider>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </SquadContextProvider>
    </AuthContextProvider>
  );
}

export default App;
