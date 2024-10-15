import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PipelineToolbar } from './Toolbar/toolbar';
import { PipelineUI } from './ui';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <PipelineToolbar />
        <PipelineUI />
      </div>
    </QueryClientProvider>
  );
}

export default App;
