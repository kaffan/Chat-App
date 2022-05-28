import { useSelector } from "react-redux";
import HeadPart from "./Rightpane/HeadPart";
import BodyPart from "./Rightpane/HeadPart";
import FooterPart from "./Rightpane/HeadPart";

const whenNoUsers = () =>
{
    return(
        <>
          <div style={{width:"50%",margin:"auto",textAlign:"center",paddingTop:"25vh"}}>
                  <img style={{height:"250px",width:"250px"}} src={process.env.PUBLIC_URL+"images/newMsg.png"} />
                  <p>Head over to the conversations pane <br /> on the left to get started. </p>
          </div>
        </>
    );
}

const renderLatestUser = (props) =>
{
    const users = props.users;
    const latestUser = users[users.length-1];
    return(
        <>
          <div style={{display:"flex",flexDirection:"column"}}>
              <HeadPart user={latestUser} sx={{flexGrow:"2"}}></HeadPart>
              <BodyPart user={latestUser} sx={{flexGrow:"8"}}></BodyPart>
              <FooterPart user={latestUser} sx={{flexGrow:"2"}}></FooterPart>
          </div>
        </>
    );
}
const Rightpane = () =>
{
    const users = useSelector(state=>state);
    return(
        <>
          <div style={{height:"92vh", backgroundColor:"#F5F5F5"}}>
             {(users.length) ? <whenNoUsers /> : <renderLatestUser users={users} />}    
          </div>
        </>
    );
}

export default Rightpane;