import { BrowserRouter } from 'react-router';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './providers/AuthContextProvider';
import { SquadContextProvider } from './providers/SquadContextProvider';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store';

const client = new QueryClient();

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthContextProvider>
        <SquadContextProvider>
          <QueryClientProvider client={client}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </QueryClientProvider>
        </SquadContextProvider>
      </AuthContextProvider>
    </ReduxProvider>
  );
}

export default App;
