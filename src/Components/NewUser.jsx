import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const NewUser = (props) =>
{
    // const user = useSelector(state=>state);
    const user = props.obj;
    function stringAvatar(name) {
        return {
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
      const SmallAvatar = styled(Badge)(({ theme }) => ({
        width: 15,
        height: 15,
        backgroundColor:"red",
        borderRadius:"50%",
        border: `2px solid ${theme.palette.background.paper}`
      }));  
    return (
        <>
          <div style={{display:"flex",backgroundColor:"#FFFFFF"}}>
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
                  <span style={{color:"#B5B5B5",fontWeight:"100"}}>{(user.msg.messages.length) ? ((user.msg.messages[0].length > 7) ? user.Msg.messages[0].slice(0,7) : user.Msg.messages[0]) : "Start a new chat..."}</span>
                </p>
              </div>
              <div style={{flexGrow:"2"}}>

              </div>
          </div>          
        </>
    );
}

export default NewUser;