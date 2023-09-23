import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Bubble from '../components/Bubble'
import {Skills, hobbies} from '../assets/Data'
import { useDetailsContext, useSetDetailsContext } from '../context/DetailsContext'

export default function AddSkills() {

    const [skillInput, setSkillinput] = useState('')
    const [suggestions, setSuggestions] = useState('')
    const [about, resume, blood, skills] = useDetailsContext()
    const [setAbout, setResume, setBlood, setSkills] = useSetDetailsContext()

    useEffect(()=>{
        setSuggestions(
            Skills.filter(skill=>skill.value.toLowerCase().startsWith(skillInput.toLocaleLowerCase()))
        )
    },[skillInput])
    
  return (
    <div className='add-skills container'>
        <BackButton page={{path: '/', tag: 'Skills'}} />
        <h1 className='heading' >I am increadible at these skills / professionally great at</h1>
        <input type='text' onChange={(e)=>setSkillinput(e.target.value)} value={skillInput} />
        <div className='selected-skills'>{skills==null ? '' : skills.map(skill=><Bubble text={skill} />)}</div>
        {skillInput.length<1 ? ' ' : 
        <div className='suggestion' >
        {
            suggestions.filter(suggestion=>!skills.find(skill=>skill==suggestion.value))
            .map(suggestion=><div onClick={()=>{
                setSkills(skills=>[...skills, suggestion.value])
                    setSkillinput('')
                }}>
            <Bubble text={suggestion.value} />
            </div>
            )
        }
        </div>
        }
    </div>
  )
}
