import React from 'react';
import { useDispatch } from 'react-redux';
import { user } from 'reducer/user';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import { Logout, MenuOutlined, FilterAltOutlined, AddLocationAltOutlined } from '@mui/icons-material';

export const HamburgerMenu = ({ setVisible }) => {
  const dispatch = useDispatch();
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
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Tooltip title="Options">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <MenuOutlined fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={() => setVisible(true)}>
          <ListItemIcon>
            <AddLocationAltOutlined fontSize="small" />
          </ListItemIcon>
          Add another location
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FilterAltOutlined fontSize="small" />
          </ListItemIcon>
          Filter locations
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(user.actions.signOut())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
