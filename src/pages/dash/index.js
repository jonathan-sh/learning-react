import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';


import Crud from '../../components/crud/index';
import Table from '../../components/table/index';

import useStyles from './style';

export default function Dashboard() {

    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [point, setPoint] = useState(0);
    const handleDrawerOpen = () => {
        setOpen(true);
        setPoint(point + 1);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color='inherit'>
                        <Badge badgeContent={point} color='secondary'>
                            <NotificationsIcon htmlColor='#fff'/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                variant='permanent'
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
           
            <div className={classes.body}>


                <Table/>
                <Crud
                label='criar' 
                title={'Salvado algo'}
                fields={[
                    {
                        name:'name',
                        label:'Nome'
                    },
                    {
                        name:'password',
                        label:'Senha',
                        type:'password'
                    }
                ]}/>
            </div>
            
        </div>
    );
}