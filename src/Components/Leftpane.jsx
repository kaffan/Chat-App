import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Newchatbar from "./Newchatbar";
import TempBox from './TempBox';
import NewUser from "./NewUser";
import { UpdateUser } from "../Reducer/SecondReducer";
import { memo } from "react";

const Leftpane = () =>
{
  let selectUsers = useSelector(state=>state.list);
  let currentUser = useSelector(state=>state.currentUser);
  const Dispatch = useDispatch();
  const buttonHandler= () =>
  {
    if(toggle)
      setToggle(false);
    else
      setToggle(true);  
  }
  const update = () =>
  {
    console.log(1);
    if(selectUsers.length)
     Dispatch({type: UpdateUser, payload:selectUsers[selectUsers.length-1]})
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
          {(!currentUser) ? update() : null}
          {console.log(currentUser)}
          {(selectUsers) ? selectUsers.map((user)=>
          {
            return(<NewUser obj={user} />)
          }) :<></>}
        </>
    );
}

export default memo(Leftpane);