import { useSelector } from "react-redux";
import WhenNoUsers from "./WhenNoUsers";
import WhenUsers from "./WhenUsers";

const BodyPart = (props) =>
{
  const user = props.user;
  console.log(user);
    return(
        <>
          {(user.msg.length) ? <WhenUsers sx={{overflowY:"scroll"}}></WhenUsers> : <WhenNoUsers></WhenNoUsers>}
        </>
    );
}

export default BodyPart;