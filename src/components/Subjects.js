import React,{useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import { SubjectsContext } from '../SubjectsContext';
import './Subjects.css'
import NoSubjectAdded from './NoSubjectAdded';
// import Header from './Header';
import {AddSubject} from '../Service/AddSubject';
import addIcon from '../addIcon.svg'
function Subjects() {
    const [ subjectList, setSubjectList] = useState([]);
    const [ subjectName, setSubjectName] = useState('');
    const [ streamName, setStreamName] = useState('ALL');
    const [ addSubjectStatus, setAddSubjectStatus] = useState(false);
    const [addPopup, setAddPopup] = useState(null);
    const { getSubject } = useContext(SubjectsContext);
    const params = useParams();
    const stream= params.stream;
    console.log(stream);
    useEffect( ()=>{
       getSubject(stream).then(function(subjects){
           setSubjectList(subjects)
             console.log(subjectList);
       });
      
},[addSubjectStatus]);    

const subjectView = subjectList.map((subject, key)=>(
              <a href="#" key={key}>
                  <li className="subject">
                    <div className="subject__name"> {subject.name}</div> 
                    <div className="subject__imageWrapper">
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="subject name" />
                    </div>
                    </li>
                  
            </a>
            ));

const addTheSubject = (e)=>{
    e.preventDefault();
    console.log(subjectName);
    console.log(streamName);
    
    AddSubject(subjectName,streamName).then(function(status){
           setAddSubjectStatus(status);
            console.log(status);
})

if(addSubjectStatus === true){
    // alert("great");
    
    setAddSubjectStatus(false);
    setAddPopup(true);
}

setTimeout(setAddPopup(true), 3000)
}

    
    return (
        <div className="subject-wrapper">
            <div className={`subjectAdded-popup  `}>
                <div className={`subjectAdded-popup__msg ${addPopup ? 'active': ''}`}>
                    Subject Added     
                </div> 
            </div>
            <header className="subjects-header">
                <nav>
                  <h1 className="subjects-header__title" >Stream : {stream}</h1>
                <h2 className="subjects-header__subjectCount">Subjects: {subjectList.length}</h2>
                </nav>
            </header>
            <div className="subject-wrapper">

                <div className="addSubjectForm">
                    <h3 className="addSubjectForm__title" >Add Subject</h3>
                    <form>
                        <div className="addSubjectForm__subjectName">
                             <label htmlFor="subjectName">Name</label>
                            <input value={subjectName} onChange={(e)=>setSubjectName(e.target.value)} type="text" name="subjectName" id="subjectName" />
                        </div>

                        <div className="addSubjectForm__streamName">
                           <label htmlFor="streamName">Choose a stream</label>
                            <select value={streamName} onChange={(e)=>setStreamName(e.target.value)} name="streamName" id="streamName">
                                <option value="All">All</option>
                                <option value="CSE">CSE</option>
                                <option value="CIVIL">CIVIL</option>
                                <option value="EC">EC</option>
                                <option value="EEE">EEE</option>
                                <option value="ME">ME</option>
                            </select>
                        </div>
                        <div className="addSubjectForm__addButton-wrapper">
                            <button className="addSubjectForm__addButton" onClick={addTheSubject}> <img src={addIcon} alt="+" /> Add</button>
                        </div>
                        
                    </form>
                </div>
                 <ul className="subjectList">
              {  subjectList.length !== 0 ? subjectView 
                   : <NoSubjectAdded /> 
                }
            
            </ul>
            </div>
           
        </div>
    )
}

export default Subjects
