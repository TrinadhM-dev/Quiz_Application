import React, { useEffect } from 'react'
import Questions from './Questions';
/** Redux store import */
import {useSelector, useDispatch} from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';
export default function Quiz() {

 const state = useSelector(state => state.question.trace);
 const dispatch = useDispatch();
 useEffect(()=>{
    console.log(state,"State");
 })
  /** Previous button Handler */
  const onPrev = (()=>{
    dispatch(MovePrevQuestion());
    
  })
   /** Next button Handler */
  const onNext = (()=>{
    //update trace value by 1
    console.log(state);
    dispatch(MoveNextQuestion());
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
