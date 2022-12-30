import React from 'react'
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className='container pt-2 mb-5'>
        <Link className='text-decoration-none' to='/'> 
            <h1 className={`${styles.logo}`}>Swasthya Kendra</h1>
        </Link>
    </div>
  )
}

export default Navigation