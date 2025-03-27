import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { primaryColor, white } from '../Utils/colors';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Badge, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { imgCheck } from '../Utils/functions';
import Notificationsmodal from '../Pages/Dashboard/Account/notifications';
import { ElectricBoltOutlined, HeadsetMicOutlined, SignalCellularNullOutlined } from '@mui/icons-material';



export default function AccountMenu({ logout, counter, expandSettings }) {
    const { user } = useSelector((state) => state.user);


    const [profileurl, setprofileurl] = React.useState(null);
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState('')
    const letter = user?.username?.substring(0, 1);
    const open = Boolean(anchorEl);


    React.useEffect(() => {
        imgCheck(user?.profilepic_url, null).then((src) => setprofileurl(src));
    }, [user]);


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const avatarstyle = { width: 32, height: 32, backgroundColor: 'silver', borderRadius: 32 }

    return (
        <React.Fragment>
            <Stack flexDirection={"row"} alignItems={'center'}>
                <Box mr={1}>
                    <Notificationsmodal />
                </Box>
                <Tooltip title="Account settings"
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Stack flexDirection={'row'} alignItems={"center"}>
                        <IconButton size="small" >
                            {profileurl ? <img className="usertopheaderimg" src={profileurl} />
                                : <Box sx={{ ...avatarstyle, alignItems: "center", justifyContent: "center", display: "flex" }} >
                                    <Typography fontFamily={'boldfont'} color={primaryColor}>{letter}</Typography>
                                </Box>
                            }
                        </IconButton>
                        <Box display={{ lg: "block", sm: 'none', xs: 'none' }} >
                            <Typography fontSize={13} fontFamily={'boldfont'} color={'black'}>{user?.name}</Typography>
                            <Typography fontSize={12} color={'var(--dimtextcolor)'}>{user?.role}</Typography>
                        </Box>
                    </Stack>

                </Tooltip>
            </Stack>
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
                            mr: 1,
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
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    expandSettings()
                    navigate("/account/profile-settings")
                }}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        {profileurl ?
                            <img className="usertopheaderimg" src={profileurl} /> :
                            <Avatar sx={avatarstyle}>{letter}</Avatar>
                        } &nbsp;
                        <Typography>My account</Typography>
                    </Stack>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    expandSettings()
                }}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    logout()
                }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}