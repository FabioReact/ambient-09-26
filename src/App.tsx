import { BrowserRouter } from 'react-router';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
