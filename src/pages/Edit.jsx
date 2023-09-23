import React, { useRef, useState } from 'react'
import BackButton from '../components/BackButton'
import {BsCardImage} from 'react-icons/bs'
import { useDetailsContext, useSetDetailsContext } from '../context/DetailsContext'
import { Document, Page, pdfjs } from 'react-pdf';
import { useNavigate } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js`;

export default function Edit() {

    const [about, resume, blood] = useDetailsContext()
    const [setAbout, setResume, setBlood] = useSetDetailsContext()
    const [file, setFile] = useState('C:\Users\aryan\OneDrive\Desktop\resume\ARYAN_BEHAL_RESUME 3.pdf')
    const [aboutInput, setAboutInput] = useState()
    const [bloodInput, setBloodInput] = useState()
    const optionRef = useRef()
    const navigator = useNavigate()

    const uploadFile=(e)=>{
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const submitDetails=()=>{
      setAbout(aboutInput)
      setBlood(bloodInput)
      navigator('/')
    }

  return (
    <div className='edit container' >
        <BackButton page={{path: '/', tag: 'My Bio'}} />
        <div className='about' >
            <h1>Write something about yourself</h1>
            <textarea placeholder='Write something here..' onChange={(e)=>setAboutInput(e.target.value)} >{about==null ? '' : about}</textarea>
        </div>
        <div className='resume'>
            <i><BsCardImage style={{color: 'blue', scale: '2'}} /></i>
            <input type='file' name='input-file' accept='.pdf' onChange={(e)=>uploadFile(e)} />
    
        </div>
        <div className='blood' >
            <h1>Blood Group</h1>    
            <select name="group" onChange={(e)=>setBloodInput(e.target.value)} onClick={()=>{optionRef.current.style.display = 'none'}} > 
                <option value={null} ref={optionRef} className='disabled'>Select blood group</option>
                <option value='A+' >A+</option>
                <option value='O+'>O+</option>
                <option value='B+'>B+</option>
                <option value='AB+'>AB+</option>
                <option value='A-'>A-</option>
                <option value='O-'>O-</option>
                <option value='B-'>B-</option>
                <option value='AB-'>AB- </option>
            </select>
        </div>
        <div className='save-button' >
            <button className={(bloodInput==null || aboutInput==null) ? 'disabled' : ''} onClick={()=>submitDetails()}> Save</button>
        </div>
    </div>
  )
}
