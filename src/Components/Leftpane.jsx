import { useState } from "react";
import { useSelector } from "react-redux";
import Newchatbar from "./Newchatbar";
import TempBox from './TempBox';
import NewUser from "./NewUser";

const Leftpane = () =>
{
  let selectUsers = useSelector(state=>state)
  const buttonHandler= () =>
  {
    if(toggle)
      setToggle(false);
    else
      setToggle(true);  
  }
  // const newUserHandler = () =>
  // {

  // }
  let [toggle, setToggle] = useState(false);
    return(
        <>
          <Newchatbar handle={buttonHandler}></Newchatbar>
          {toggle && <TempBox  handle={buttonHandler}></TempBox>}
          {console.log(selectUsers)}
          {(selectUsers) ? selectUsers.map((user)=>
          {
            return(<NewUser obj={user} />)
          }) :<></>}
        </>
    );
}

export default Leftpane;