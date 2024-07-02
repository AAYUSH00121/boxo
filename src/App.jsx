import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Layout from './components/Layout';
import Show from './pages/Show';
import {  QueryClient,QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/starred" element={<Starred/>}/>
      </Route>
      <Route path="*" element={<div>Not Found</div>}/>
      <Route path="/show/:showId" element={<Show/>}/>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  
  );
}

export default App;
