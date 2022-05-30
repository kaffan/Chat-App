import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddNewUser } from "../Reducer/MainReducer";
import { UpdateUser } from "../Reducer/SecondReducer";

const TempBox = (props) =>
{
    let Dispatch = useDispatch();
    const state = useSelector(state=>state.list);
    const currentUser = useSelector(state=>state);
    const changeHandler = (e) =>
    {
        if(e.target.value && e.key === "Enter")
        {
            let name = e.target.value;
            let newUsr = {name, msg:[]};
            console.log(newUsr);
            Dispatch({ type:UpdateUser,payload:newUsr});
            Dispatch({ type:AddNewUser,payload:newUsr});
            console.log(state);
            props.handle();
            console.log(currentUser);
            // props.newUserHandle();
        }
    }
    return (
        <div style={{width:"95%", margin:"0.2rem",marginLeft:"0.8rem",backgroundColor:"white",padding:"0.1rem"}}>
            <div style={{margin:"1rem",backgroundColor:"#EFEFEF"}}>
                <input placeholder="Enter a contact to get started..." onKeyDown={changeHandler} style={{padding:"0.2rem",borderStyle:"hidden",backgroundColor:"#EFEFEF",width:"55%",marginLeft:"2rem",marginRight:"2rem"}} type="text"></input>
                <Button variant="text" onClick={props.handle} sx={{color:"black",fontSize:"1rem",marginLeft:"0"}}>X</Button>
            </div>
        </div>
    );
}

export default TempBox;