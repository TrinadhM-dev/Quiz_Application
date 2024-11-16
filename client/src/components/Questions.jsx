import React,{useState} from 'react'
import data from '../database/data.js';

/** Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestions.jsx';

const Questions = () => {
// eslint-disable-next-line no-unused-vars
const [checked,setChecked]=useState(undefined);
const question = data[0]
function onSelect (){
    setChecked(true);
        console.log("radio btn selected",question);
    }

  return (
    <div className='questions'>
      <h2 className='text-light'>{question?.question}</h2>
      <ul key={question.id}>
        {
          question.options.map((q,i)=>(
        <li key={i}>
            <input type="radio" value={false} name="options" id={`q${i}-option`} onChange={onSelect} />
            <label className='text-primary' htmlFor={`q${i}-option`} >{q}</label>
            <div className='check'></div>
        </li>
          ))
        }


      </ul>
    </div>
  )
}

export default Questions
