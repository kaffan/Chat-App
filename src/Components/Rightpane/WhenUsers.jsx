import Message from "./Message";
import { Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import  { DeleteMsg, StarUnstar } from '../../Reducer/MainReducer';
import  { ToggleStar, DeleteMssg } from '../../Reducer/SecondReducer';
const WhenUsers = () =>
{
    const user = useSelector(state=>state.currentUser);
    let checkDate = user.msg[0].date;
    let checkTime = user.msg[0].time;
    let messages = user.msg;
    let todayDate = (new Date()).toLocaleString('en-US',{day:"2-digit",month:"2-digit",year:"numeric"}).split(',')[0];
    let j = 0;
    const Dispatch = useDispatch();
    const isChat = useSelector(state=>state.isChat);
    const toggleStar = (usermsg) =>
    {
        Dispatch({ type:StarUnstar,payload:{user:user,usermsg:usermsg}});
        Dispatch({ type: ToggleStar, payload: usermsg });
    }
    const DeleteMessage = (usermsg) =>
    {
        Dispatch({ type:DeleteMsg,payload:{user:user,usermsg:usermsg}});
        Dispatch({ type: DeleteMssg, payload: usermsg });
    }
    return(
        <>
         <div style={{width:"90%",margin:"0.5rem auto",textAlign:"center",height:"70%",overflowY:"scroll"}}>
             {(messages) ? messages.map((msg,i)=>
             {
                 console.log(todayDate);
                 let displayDate = (checkDate==todayDate ? "Today" : msg.date);
                 if(checkDate!==msg.date)
                 {
                     checkDate = msg.date;
                     j = i;
                 }
                 return(
                     <>
                       {(i===j && checkDate===msg.date) ? <Divider>{displayDate}</Divider> : <></> }
                       {(isChat) ? <Message DeleteMessage={DeleteMessage} toggleStar={toggleStar} Msg={msg}></Message> : ((msg.starred)?<Message DeleteMessage={DeleteMessage} toggleStar={toggleStar} Msg={msg}></Message>:<></>)}
                     </>
                 )
             }) : <Divider>{"Today"}</Divider> }
         </div>
        </>
    );
}

export default WhenUsers;