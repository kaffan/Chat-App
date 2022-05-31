import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { UpdateUser } from '../Reducer/SecondReducer';
import { useDispatch } from 'react-redux';

const NewUser = (props) =>
{
    // const user = useSelector(state=>state);
    const user = props.obj;
    console.log(user);
    function stringAvatar(name) {
        name = name.replace(/^\s+|\s+$/gm,'');
<<<<<<< HEAD
        const firstName = name.split(' ')[0][0];
        const lastName = name.split(' ')[1];
        return {
          children: `${firstName}${(lastName) ? lastName[0] : ''}`,
=======
        const firstName = name.split(' ')[0];
        const lastName = name.split(' ')[1];
        return {
          children: `${firstName}${(lastName) ? lastName : ''}`,
>>>>>>> 8b75383 (last commit)
        };
      }
      const SmallAvatar = styled(Badge)(({ theme }) => ({
        width: 15,
        height: 15,
        backgroundColor:"red",
        borderRadius:"50%",
        border: `2px solid ${theme.palette.background.paper}`
      }));  
      const Dispatch = useDispatch();
      const updateUser = () =>
      {
        console.log(user);
        Dispatch({ type: UpdateUser,payload:user});
      }
    return (
        <>
          <div onClick={updateUser} style={{display:"flex",backgroundColor:"#FFFFFF"}}>
                <div style={{flexGrow:"2"}}>
                   <p style={{marginLeft:"2rem",textAlign:"center"}}> <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        badgeContent={
                            <SmallAvatar />
                        }
                    >
                        <Avatar sx={{backgroundColor:"#246CC0"}} {...stringAvatar(user.name)} />
                    </Badge>
                    </p>
                </div>
              <div style={{flexGrow:"8"}}>
                <p style={{lineHeight:"1.6"}}>
                  <span style={{font:"Inter",fontWeight:"400"}}>{user.name}</span> <br /> 
                  <span style={{color:"#B5B5B5",fontWeight:"100"}}>{(user.msg.length) ? ((user.msg[user.msg.length-1].message.length > 7) ? user.msg[user.msg.length-1].message.slice(0,7) : user.msg[0].message) : "Start a new chat..."}</span>
                </p>
              </div>
              <div style={{flexGrow:"2"}}>

              </div>
          </div>          
        </>
    );
}

export default NewUser;
