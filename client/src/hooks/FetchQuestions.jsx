

import { useEffect, useState } from "react"
import data from "../database/data";
import { useDispatch } from "react-redux";

/** Redux actions */
import * as Action from "../redux/question_reducer";


/** fetch question hook to fetch api data & set value to store */
export const useFetchQuestion = ()=>{
    const dispatch = useDispatch();
   const [getData,setGetData] =  useState({isLoading: false,apiData:[],serverError:null});


   useEffect(()=>{
    setGetData(prev => ({...prev,isLoading:true}) )
    /** async function fetch backend data */

    (async() =>{
        try {
            let question = await data;

            if(question.length > 0) {
                setGetData(prev => ({...prev,isLoading:false}) );
                setGetData(prev => ({...prev,apiData:question}) );

                /**dispatch an action */
                dispatch(Action?.startExamAction(question));
            }
            else{
                throw new Error("No Question available");
            }
        } catch (error) {
            setGetData(prev => ({...prev,isLoading:false}) )
            setGetData(prev => ({...prev,serverError:error}) )
        }
    })
   },[dispatch]);

   return [getData,setGetData];
}