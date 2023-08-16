import React from 'react'
import CourseNav from '../components/CourseNav'

export const metadata = {
    title: 'course info',
    description: 'all about course',
  }


export default function layout({children}) {
  return (
    <div className='flex space-x-2'>
   <CourseNav />
   <section>
    {children}
   </section>

    </div>
  )
}
