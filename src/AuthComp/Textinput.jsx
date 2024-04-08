import React from 'react'
import Style from "../CSS/Home.module.css"

export default function TextInput({label,placeholder}) {
  return (
   <>
   <div className={`${Style.textinputdiv}`}> 
  <div>
  <label for={label} class="form-label">{label}</label>
   </div>
  <div className={`${Style.inputcontainer}`}>
   <input type='text' placeholder={placeholder} className={`form-label `}  id={label} required /></div>

   {/* bordr-gray-value for the colour */}
   </div>
   </>
  )
}