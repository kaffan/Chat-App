import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { memo } from "react";

const HeadPart = (props) =>
{
    const user = props.user;
    console.log(user);
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
    return(
        <>
          <div style={{display:"flex",width:"100%",alignItems:"center",backgroundColor:"white"}}>
              <div style={{width:"10%",marginLeft:"0.5rem"}}>
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
              <div style={{width:"15%",marginLeft:"0.5rem"}}>
                  <p><span style={{fontWeight:"600"}}>{user.name}</span></p>
              </div>
              <div style={{width:"8%",height:"50px"}}>
                  <p>
                    <span style={{fontWeight:"300",margin:"auto"}}>Chat</span>
                  </p>
              </div>
              <div style={{width:"15%",height:"50px"}}>
                  <p>
                  <span style={{fontWeight:"300",margin:"auto"}}>Starred Messages</span>
                  </p>
              </div>
          </div>
        </>
    );
}

export default memo(HeadPart);