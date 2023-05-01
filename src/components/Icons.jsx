import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faBook } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faBell } from '@fortawesome/free-regular-svg-icons';
import '../css/icons.css'

export default function Icons() {
  return (
    <div className='icons-parent'>
      <FontAwesomeIcon icon={faUser} size='2x'style={{margin : "5px 40px"}} className='icons'/>
      <FontAwesomeIcon icon={faPenToSquare} size='2x'style={{margin : "5px 40px"}} className='icons'/>
      <FontAwesomeIcon icon={faBook} size='2x'style={{margin : "5px 40px"}} className='icons'/>
      <FontAwesomeIcon icon={faHeart} size='2x'style={{margin : "5px 40px"}} className='icons'/>
      <FontAwesomeIcon icon={faBell} size='2x'style={{margin : "5px 40px"}} className='icons'/>
    </div>
  )
}
