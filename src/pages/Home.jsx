import React from 'react'
import {BsFillPencilFill, BsChevronRight} from 'react-icons/bs'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useDetailsContext } from '../context/DetailsContext'
import Bubble from '../components/Bubble'

export default function Home() {

    const navigate = useNavigate()
    const [about, resume, blood, skills] = useDetailsContext()

  return (
    <div className='Home container' >
     <BackButton page={{path: '/', tag: 'My Bio'}} />
        <div className='about' >
            <h1 className='heading' >About me <span className='edit-icon' onClick={()=>navigate('/edit')} ><BsFillPencilFill/></span></h1>
            <p className={about==null ? 'disabled' : ''}> {about==null ? 'No about me added yet ' : about}</p>
        </div>
        <div className='blood' >
            <h1 className='heading' >Blood group</h1>
            <p style={{float: 'right', marginTop: '-21px', marginRight: '10px'}} >{blood==null ? '' :blood}</p>
        </div>
        <div className='resume' >
            <h1 className='heading' >Resume <span className='edit-icon' ><BsChevronRight/></span></h1>
        </div>
        <div className='skills' >
            <h1 className='heading' >Skills <span className='edit-icon' onClick={()=>navigate('/addskills')} ><BsFillPencilFill/></span></h1>
            {
                skills.length<1 ? <p className='disabled middle'>No soft skills added yet</p> :
                <div>
                    <h1 className='heading' >I am increadible at these skills / professionally great at</h1>
                    {skills.map(skill=><Bubble text={skill} />)}
                </div>
            }
        </div>
    </div>
  )
}
