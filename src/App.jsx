import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './courseDl'
import Btn from './handelBtn'

function App() {
  const [courseList,setCourseList]=useState([])
  const [newCourseList, setNewCourseList]=useState("")
const handelCOurseList=(event)=>{
setNewCourseList(event.target.value)
}

const handelAddCourse=()=>{
  const course={
    id: courseList.length === 0 ? 1 :courseList[courseList.length -1].id +1,
    courseName : newCourseList
  }
  setCourseList([...courseList, course])
}

const deletCourses=(courseId)=>{
const newestCourseList= courseList.filter((course)=>{
if(course.id === courseId)return false
else return true
})
setCourseList(newestCourseList)
}
  return (
    <div>
      <Btn handelCOurseList={handelCOurseList} handelAddCourse={handelAddCourse}></Btn>
      <div>
      {courseList.map((course, index)=>{
        return (
          <Course key={index} course={course} deletCourses={deletCourses}></Course>
        )

      })}
      </div>
    </div>
  )
}

export default App
