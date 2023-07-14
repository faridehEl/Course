const handelBtn=(props)=>{
    return(
        <div>
        <input onChange={props.handelCOurseList}></input>
        <button className='btn' onClick={props.handelAddCourse}>Add List</button>
        </div>
    )
}
export default handelBtn;