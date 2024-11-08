import React from 'react'
//Styling
import '../styles/Result.css';
import {Link} from 'react-router-dom';
import ResultTable from './ResultTable';

function Result() {

  const onRestart = ()=>{
    console.log('On Restart');
    
  }



  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
          <div className='flex'>
            <span>Username</span>
            <span className='bold'>Daily Tution</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points:</span>
            <span className='bold'>50</span>
          </div>
          <div className="flex">
            <span>Total Questions :</span>
            <span className='bold'>05</span>
          </div>

          <div className="flex">
            <span>Total Attempts :</span>
            <span className='bold'>03</span>
          </div>
          
          <div className="flex">
            <span>Total Earned Points :</span>
            <span className='bold'>30</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span className='bold'>Passed!!</span>
          </div>

      <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>
        </div>
{/** Result table component */}
    <div className="container">
    <ResultTable />
    </div>
    </div>
  )
}

export default Result
