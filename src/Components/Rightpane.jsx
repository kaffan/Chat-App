import { useSelector } from "react-redux";
import HeadPart from "./Rightpane/HeadPart";
import BodyPart from "./Rightpane/BodyPart";
import FooterPart from "./Rightpane/FooterPart";

const WhenNoUsers = () =>
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

const RenderLatestUser = (props) =>
{
    const users = props.state.list;
    console.log(users);
    const latestUser = props.state.currentUser;
    console.log(latestUser);
    return(
        <>
          <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
              <HeadPart user={latestUser} ></HeadPart>
              <BodyPart user={latestUser} sx={{height:"80%"}}></BodyPart>
              <FooterPart user={latestUser} sx={{height:"20%"}}></FooterPart>
          </div>
        </>
    );
}
const Rightpane = () =>
{
    const users = useSelector(state=>state);
    console.log(users);
    return(
        <>
          <div style={{height:"92vh", backgroundColor:"#F5F5F5"}}>
             {(users.list.length===0) ? <WhenNoUsers /> : <RenderLatestUser state={users} />}    
          </div>
        </>
    );
}

export default Rightpane;