import { useState } from "react";
import { useSelector } from "react-redux";

const Message = (props) =>
{
    const usermsg = props.Msg;
    const time = usermsg.time;
    console.log(usermsg);
    const [disp, setDisp] = useState("none");
    const toggleMsgOptions = (e) =>
    {
        console.log(disp);
        if(disp==="none")
          setDisp("flex");
        else
        setDisp("none");  
    }
    const currentUser = useSelector(state=>state.currentUser);
    const thismsgid = currentUser.msg.findIndex((obj)=>obj.time===usermsg.time);
    const isStarred = currentUser.msg[thismsgid].starred;
    console.log(isStarred);
    return(
        <>
          <div style={{display:"flex",flexDirection:"row",margin:"0.5rem 0",justifyContent:"flex-end",overflowX:"auto"}}>
              <div onMouseEnter={toggleMsgOptions} onMouseLeave={toggleMsgOptions} style={{display:"flex",flexDirection:"column",backgroundColor:"#E6F7FF",padding:"0.5rem 1rem",justifyContent:"flex-start",wordBreak:"break-word",minWidth:"15%",maxWidth:"35%"}}>
                  <div id="msgOptions" style={{display:disp,position:"absolute",padding:"0.5rem",flexDirection:"row",backgroundColor:"white"}}>
                      <div style={{margin:"0 0.2rem"}}><img onClick={()=>{props.toggleStar(usermsg)}} style={{height:"18px",width:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorstar.png"} /></div>
                      <div style={{margin:"0 0.2rem"}}><img onClick={()=>{props.DeleteMessage(usermsg)}} style={{height:"18px",width:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectordelete.png"} /></div>
                      <div style={{margin:"0 0.2rem"}}><img style={{height:"18px",width:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorshare.png"} /></div>
                  </div>
                  <div style={{display:"flex",fontSize:"12px",margin:"0.2rem 0.2rem"}}><div style={{width:"50%",textAlign:"left"}}>{time}</div><div style={{width:"50%",textAlign:"right"}}>{(isStarred) ? <img src={process.env.PUBLIC_URL + '/images/Vectorstarred.png'}></img>: ''}</div></div>
                  <div style={{textAlign:"left",fontSize:"16px",margin:"0.2rem 0.2rem",wordBreak:"break-word"}}>{usermsg.message}</div>
              </div>
              <div style={{margin:"0 1rem"}}>
                  <img style={{width:"18px",height:"18px",transform:"translate(0,40px)"}} src={process.env.PUBLIC_URL + "/images/Vector.png"}></img>
              </div>
          </div>
        </>
    );
}

export default Message;
