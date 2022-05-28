import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Newchatbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div style={{ display: 'flex',padding:"1rem",backgroundColor:"white",borderBottom:"solid 0.1px",borderColor:"pink" }}>
        <div style={{padding:"0 1rem", flexGrow:"2"}}>
            <Button
              id="basic-button"
              style={{color:"black"}}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              All Contacts <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
        <div style={{flexGrow:"1"}}>
          <Button variant="contained" onClick={props.handle}><ChatRoundedIcon sx={{margin:"0 7px"}}></ChatRoundedIcon> New Chat</Button>
        </div>
      </div>
    </>
  );
}

export default Newchatbar;