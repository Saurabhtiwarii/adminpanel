import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { getSubjectDetails } from '../Service/getSubjectDetails';
import { addVideos } from '../Service/addVideos';
// import { getVideos } from '../Service/getVideos';
import { VideoContext } from '../VideoContext';
import './SubjectDetails.css';
import ListEmptyMessage from './ListEmptyMessage';

function SubjectDetails() {
     const params = useParams();
     const [videoList, setVideoList] = useState([]);
     const [videoTitle, setVideoTitle] = useState('');
     const [videoDesc, setVideoDesc] = useState('');
     const [videoUrl, setVideoUrl] = useState('');
     const [videoSubject, setVideoSubject] = useState('');
     const [videoStream, setVideoStream] = useState('');
     const [videoListUpdater, setVideoListUpdater] = useState(false);
    const subjectId = params.subjectId;
    const { getVideos } = useContext(VideoContext);
   
    useEffect(()=>{
         getSubjectDetails(subjectId).then(function(subjectInfo){
            const {name, stream} = subjectInfo;
            setVideoSubject(name);
            setVideoStream(stream);
    })
         getVideos(subjectId).then(function(videos){
             const result = videos;
            setVideoList(result);
        });

    },[videoListUpdater])

       const submitVideo = (e)=>{
        e.preventDefault();
        const videoNumber = videoList.length + 1;
        console.log(videoNumber);

        addVideos(videoNumber, videoStream, videoUrl, subjectId,videoDesc, videoTitle).then(function(status){
            if(status === true){
              getVideos(subjectId).then(function(videos){
             const result = videos;
            setVideoList(result);
        });
            }
        });
    }

    const videolistView =  videoList.map((video,key)=>(
                                     <li className="videolist-item" key={key}>
                           <div className="videolist-item__title">
                                 <span className="videolist-item__title-value">{video.title}</span>
                                 <div className="videolist-item__videoNumber">
                                        <span className="videolist-item__videoNumber-value">Id -{video.number}</span> 
                                  </div>
                                  </div>
                            <div className="videolist-item__desc">
                                 <span>{video.description}</span> 
                             </div>
                            <div className="videolist-item__videoUrl">{video.url}</div>
                         </li>
                                 ));

 

    return (
        <div className="SubjectDetails">
            <div className="SubjectDetails__container">
                <div className="SubjectDetails__header">
                    <nav>
                       
                         <h1 className="SubjectDetails__title">{videoSubject}</h1>
                          <span className="SubjectDetails__stream">Stream : {videoStream}</span>
                    </nav> 
                 </div>
                <div className="subjectDetails__form">
                    <h2 className="subjectDetails__form-title">Add Video</h2>
                     <form>
                         <div className="subjectDetails__form-videoStream">
                           <label htmlFor="videoStream">Stream</label>
                            <select value="CSE"  name="videoStream" id="videoStream">
                                <option value={videoStream}>{videoStream}</option>
                            </select>
                        </div>

                        <div className="subjectDetails__form-videoSubject">
                           <label htmlFor="videoSubject">Subject</label>
                            <select value="CN"  name="videoSubject" id="videoSubject">
                                <option value={videoSubject}>{videoSubject}</option>
                            </select>
                        </div>

                        <div className="subjectDetails__form-videoTitle">
                             <label htmlFor="videoTitle">Title</label>
                            <input value={videoTitle} onChange={(e)=>setVideoTitle(e.target.value)} type="text" name="videoTitle" id="videoTitle" />
                        </div>

                        <div className="subjectDetails__form-videoUrl">
                             <label htmlFor="videoUrl">Video URL</label>
                            <input value={videoUrl} onChange={(e)=>setVideoUrl(e.target.value)} type="text" name="videoUrl" id="videoUrl" />
                        </div>

                        <div className="subjectDetails__form-videoDesc">
                             <label htmlFor="videoDesc">Description</label>
                            <textarea value={videoDesc} onChange={(e)=>setVideoDesc(e.target.value)} type="text" name="videoDesc" id="videoDesc" />
                        </div>


                        
                        
                        <div className="subjectDetails__form-addButton-wrapper">
                            <button className="subjectDetails__form-addButton" onClick={(e)=>submitVideo(e)} >Upload</button>
                        </div>
                        
                    </form>
                </div>
                 <div className="SubjectDetails__videos">
                     <ul className="SubjectDetails__videoslist">
                         {
                             videoList.length !==0 ?  
                                videolistView
                             :
                             <ListEmptyMessage message="No video is added yet ..." />
                         }
                        

                        
                     </ul>
                 </div>
            </div>

        </div>
    )
}

export default SubjectDetails
