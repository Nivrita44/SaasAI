import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react';
import {dummyPunlishedCreationData} from '../assets/assets'

const Community = () => {

  const [creations,setCreations] = useState([]);
  const {user} = useUser()

  const fetchCreations = async () => {
    setCreations(dummyPunlishedCreationData);
  }

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scoll'>

      </div>
    </div>
  )
}

export default Community
