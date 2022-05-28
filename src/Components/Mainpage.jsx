import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";

const Mainpage = () =>
{
    return(
        <>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{borderRight:"0.1px solid pink",width:"30%",backgroundColor:"#EBECF0"}}>
                <Leftpane></Leftpane>
            </div>
            <div style={{width:"70%"}}>
                <Rightpane></Rightpane>
            </div>
          </div>
        </>
    );
}

export default Mainpage;