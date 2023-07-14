const Course=(props)=>{
    return(
        <div>
        <h2>{props.course.courseName}</h2>
        <button onClick={()=>props.deletCourses(props.course.id)}>X</button>
    </div>
    )
}
export default Course;