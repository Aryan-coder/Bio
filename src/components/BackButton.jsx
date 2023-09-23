import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function BackButton({page}) {

    const navigate = useNavigate()

  return (<div className='back-button' onClick={()=>navigate(page.path)} >
    <i><IoIosArrowBack/></i>
    <h1>{page.tag}</h1>
  </div>)
}
