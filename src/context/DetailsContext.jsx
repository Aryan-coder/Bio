import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const DetailsContext = createContext()
export const useDetailsContext=()=>useContext(DetailsContext).Details
export const useSetDetailsContext=()=> useContext(DetailsContext).SetDetails

export default function DetailsProvider({children}) {

    const [about, setAbout] = useState(null)
    const [resume, setResume] = useState(null)
    const [blood, setBlood] = useState(null)
    const [skills, setSkills] = useState([])


  return (<DetailsContext.Provider value={{Details: [about, resume, blood, skills], SetDetails: [setAbout, setResume, setBlood, setSkills]}} >
    {children}
  </DetailsContext.Provider>)
}
