import React from 'react'
import './App.css'
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { RealStates } from './components/RealStates';
import {SellerDetails} from './components/SellerDetails'
const queryClient = new QueryClient()


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Banner/>
      { id==0 && <RealStates />}
      { id!=0 && <SellerDetails />}
    </QueryClientProvider>
  )
}

export default App
