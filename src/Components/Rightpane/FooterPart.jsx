import { Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AddMsg } from '../../Reducer/MainReducer';
import { UpdateMessage } from '../../Reducer/SecondReducer';
// import Store from '../../store/Store';

const FooterPart = () =>
{
    const Dispatch = useDispatch();
    const currentUser = useSelector(state=>state.currentUser);
    const inputHandler = (e) =>
    {
        const inputEle = document.querySelector('#inputBox');
        if((e.key==="Enter" && e.target.value))
        {
            let message = inputEle.value;
            inputEle.value="";
            let date = new Date();
            const options = {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}
            console.log(date.toLocaleString('en-US',options));
            const [dat,time] = date.toLocaleString('en-US',options).split(',');
            const newMessage = {
                message: message,
                date: dat,
                time:time,
                starred:false
            };
            Dispatch({ type:UpdateMessage, payload:newMessage});
            Dispatch({type: AddMsg ,payload:{newMessage,currentUser}});
        }
    }
    return(
        <>
          <div style={{display:"flex",width:"90%",justifyContent:"center",margin:"0 auto",flexDirection:"column"}}>
              <div style={{width:"90%",margin:"0 auto"}}>
                  <Input id="inputBox" onKeyDown={inputHandler} placeholder='Enter your message here...' disableUnderline fullWidth sx={{border:"2px solid #D9D9D9",backgroundColor:"white",padding:"0.5rem 0.7rem"}}></Input>
              </div>
              <div style={{width:"87%",display:"flex",margin:"0.5rem auto"}}>
                    <div style={{ width: "100%" }}>
                        <span style={{margin:"0 0.4rem"}}><img style={{width:"18px", height:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorpen.png"}></img></span>
                        <span style={{margin:"0 0.4rem"}}><img style={{width:"18px", height:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorstar.png"}></img></span>
                        <span style={{margin:"0 0.4rem"}}><img style={{width:"18px", height:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorfolder.png"}></img></span>
                        <span style={{margin:"0 0.4rem"}}><img style={{width:"18px", height:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectorgif.png"}></img></span>
                    </div>
                    <div>
                        <span style={{margin:"0 0.4rem"}}><img onClick={inputHandler} style={{width:"18px", height:"18px"}} src={process.env.PUBLIC_URL + "/images/Vectormsg.png"}></img></span>
                    </div>
              </div>
          </div>
        </>
    );
}
export default FooterPart;
