import { useSelector } from "react-redux";

const HeadPart = (props) =>
{
    const user = useSelector(state=>state[state.length-1]);
    return(
        <>
          <div style={{display:"flex",width:"100%"}}>
              <div>
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
              <div>
                  <p><span>{user.name}</span></p>
              </div>
              <div>
                  <span onClick={ToggleBody}>Chat</span>
              </div>
              <div>
                  <span onClick={ToggleBody}>Starred Messages</span>
              </div>
          </div>
        </>
    );
}

export default HeadPart;