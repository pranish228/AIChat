import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { context } from '../../context/context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Sidebar = () => {
    const[extended,setExtended]=useState(false)
    const{onSent,prevPrompt,setRecentPrompt,newChat}=useContext(context)
 
    const notify = () => toast("This feature is currently unavailable. Please try again later.");
    const loadprompt= async(prompt)=>{
        setRecentPrompt(prompt)
        onSent(prompt)
    }
  return (
    <div className ='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon } alt="" />
            <div onClick={()=>newChat()} className="newchat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ?            
            <div className="recent">
            <p className='rectent-title'>Recent</p>
            {prevPrompt && prevPrompt.length > 0 ? (
                prevPrompt.map((item, index) => (
               <div onClick={() => loadprompt(item)} className="recententry" key={index}>
               <img src={assets.message_icon} alt="" />
               <p>{item.slice(0, 18)}...</p>
            </div>
              ))
          ) : (
           <p>No recent entries</p>
            )}


        </div>
        :null
            }

        </div>
        <div className="bottom">
            <div className="bottom_item recententry">
                <img onClick={notify}  src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom_item recententry">
                <img onClick={notify}  src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom_item recententry">
                <img  onClick={notify} src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar