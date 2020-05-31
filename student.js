import React from 'react';
import Marks from './marks';

const Student =({name,mroll }) => {
  return(
  <div>
  {name} has loggedIn.
   <Marks rollNo={mroll}/>
  </div>
  )
}

export default Student;