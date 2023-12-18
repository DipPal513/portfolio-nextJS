import React from 'react'
import { PushSpinner } from 'react-spinners-kit';
const Loader = () => {
  return (
    <div>
      <PushSpinner
        size={30}
        color="#686769"
        // loading={loading} 
        />
    </div>
  )
}

export default Loader