import Login from './views/Login';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Login />
      </div>
    </QueryClientProvider>
  );
}

export default App;
