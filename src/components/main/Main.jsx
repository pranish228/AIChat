import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(context)
    const notify = () => toast("This feature is currently unavailable. Please try again later.");
  return (
    <div className='main'>
        <div className="nav">
            <p>ChatAi</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="maincontainer">
            {!showResult
            ?<>
                        <div className="greet">
                <p><span>Yoo, wsg.</span></p>
                <p>How can i help u today?</p>

            </div>
            <div className="cards">
                <div className="card" onClick={() => onSent("Suggest me some activity to pass my time")}>
                    <p>Suggest me some activity to pass my time</p>
                    <img src={assets.compass_icon} alt="" />
                    
                </div>
                <div className="card" onClick={() => onSent("How are you?")}>
                    <p>How are you?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card" onClick={() => onSent("What time zone is GMT")}>
                    <p>What time zone is GMT</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card" onClick={() => onSent("world cup 2022 summary")}>
                    <p>world cup 2022 summary</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="resulttitle">
                    <img src={assets.user_icon} alt="" />
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="resultdata">
                    <img src={assets.gemini_icon} alt="" />
                    {loading 
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                 
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                   
                </div>
            </div>
        }

            <div className="mainbottom">
            <div className="searchbox">
    <input
        onChange={(e) => setInput(e.target.value)} 
        value={input} 
        type="text"
        placeholder="What do you want to learn today?"
        onKeyDown={(e) => {
            if (e.key === "Enter") { 
                onSent(input);
                e.preventDefault(); 
            }
        }}
    />
    <div>
    <img onClick={notify} src={assets.gallery_icon} alt="Gallery" />
    <img onClick={notify} src={assets.mic_icon} alt="Mic" />
        <img 
            onClick={() => onSent(input)} 
            src={assets.send_icon} 
            alt="Send"
        />
    </div>
</div>

                <p className='bottominfo'>
                    This Ai chat is made by banaki4488 with his last 2 brain cell expect errors and bugs 
                </p>
            </div>
        </div>


    </div>
  )
}

export default Main