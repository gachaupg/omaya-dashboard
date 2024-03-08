/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { NotificationAddRounded } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowForward } from "react-icons/io";

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true); // Set 'open' to true by default
    // const { user } = useSelector((state) => ({ ...state.auth }));
    // const { currentUser } = useSelector((state) => state.user);
    const [expanded, setExpanded] = React.useState(false);
    const handleItemClick = () => {
        setExpanded(!expanded);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className='appbar' position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flex w-full items-center justify-between'>
                        <div className="lo">
                            <Link to='/'>
                                <img style={{
                                    height: '3.1rem',
                                    width: '5rem',
                                    marginLeft: '2rem'
                                }} src='https://res.cloudinary.com/pitz/image/upload/v1707497590/logo-hiXpVEuB-removebg-preview_jnnrfa.png' alt="logo" />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <NotificationAddRounded />
                            <img className='h-6 w-6 rounded-full object-contain' src="data:image/png;base64,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" alt="" />
                            <p>Alli</p>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
            <Drawer
                className='bg-slate-300 drawer'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader className=''>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List className='drawer flex flex-col items-center'>
                    <h2 className=' mr-6 w-56 border rounded-xl p-1 text-center bg-slate-300'>Dashboard</h2>
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
                    <ListItem >
                        <ListItemButton className='flex items-center gap-10 list w-full justify-between'>
                            <ListItemText primary='Transactions' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='flex flex-col w-full' >
                        <ListItemButton onClick={handleItemClick} className='flex w-full items- bg-red-600 justify-between'>
                            <ListItemText primary='Users' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>
                        </ListItemButton>
                        {expanded && (
                            <div className='ex mt-4  bg300 w-full pl-12 ml-7'>
                                {/* Other links or content */}
                                <Link to='/users'>
                                    <p className='text-sm cursor-pointer text-green-500'>All Users</p>

                                </Link>
                                {/* Add other links here */}
                            </div>
                        )}
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Omaya Balances' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Payment methods' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Employees Admins and Agents' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Reports' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Support Center' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='FAQ Center' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Partners Management' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Contact info Management' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton className='flex items-center justify-between'>
                            <ListItemText primary='Calaculation' />
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <IoIosArrowForward className='ml-9' color=' white' size={25} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                    {/* ))} */}
                </List>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {/* Additional content can be added here */}
            </Main>
        </Box>
    );
}
