import React from 'react'
import Questions from './Questions';

export default function Quiz() {
  /** Previous button Handler */
  const onPrev = (()=>{
    console.log(`onPrev`);
    
  })
   /** Next button Handler */
  const onNext = (()=>{
    console.log(" onTri");
  })
  return (
    <div className='container'>
  <h1 className='title text-light'>Quiz Application</h1>
  <Questions/>
 {/**Displaying questions */}
 <div className='grid'>
  <button className='btn prev' onClick={onPrev}>Prev</button>
  <button className='btn next' onClick={onNext}>Next</button>
 </div>
    </div>
  )
}
