import { useState } from 'react'

import avatar from '../assets/avatar-1.png'
import './Sidebar.css'

import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { IoMdArrowDown } from 'react-icons/io'

function SideBar () {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <aside className={`sidebar ${activeMenu ? 'active' : ''}`}>

      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={avatar} alt='mi avatar' width='80' />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Luis Vasquez'>
            Luis Vasquez
          </h1>

          <p className='title'>
            Web developer
          </p>
        </div>

        <button className='info_more-btn' onClick={() => setActiveMenu(!activeMenu)}>
          <span>Show contacts</span>

          <IoMdArrowDown />
        </button>

      </div>

      <div className='sidebar-info_more'>

        <div className='separator' />

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <AiOutlineMail className='icon' />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>
              <a href='mailto:luivasquez95@gmail.com' className='contact-link'>luivasquez95@gmail.com</a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <AiOutlinePhone />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>
              <a href='tel:+502 30889567' className='contact-link'>+502 30889567</a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <MdLocationOn />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>
              <address>Guatemala, Guatemala</address>
            </div>
          </li>
        </ul>

        <div className='separator' />

        <ul className='social-list'>
          <li className='social-item'>
            <a href='https://www.linkedin.com/in/vasquez-luis/' target='_blank' className='social-link' rel='noreferrer'>
              <AiFillLinkedin />
            </a>
          </li>

          <li className='social-item'>
            <a href='https://twitter.com/_vasquezluis' target='_blank' className='social-link' rel='noreferrer'>

              <AiFillTwitterSquare />
            </a>
          </li>

          <li className='social-item'>
            <a href='https://facebook.com/luivasquez' target='_blank' className='social-link' rel='noreferrer'>
              <AiFillFacebook />
            </a>
          </li>
        </ul>

      </div>

    </aside>
  )
}

export default SideBar
