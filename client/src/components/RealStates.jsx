import React from 'react'
import {useQuery} from 'react-query'
import {getData} from './utils'
import { MyCard } from './MyCard'

export const RealStates=()=> {
  const {data,status}=useQuery('houses',getData)
  status=='success' && console.log(data.data)
  return (
    <div className='row justify-content-center text-center'>
      {status=='success' && data.data.map(obj=><MyCard key={obj.id} setId/>)}
      
    </div>
  )
}
