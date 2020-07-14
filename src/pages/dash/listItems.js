import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import RoomIcon from '@material-ui/icons/Room';
import TimelineIcon from '@material-ui/icons/Timeline';
import EventIcon from '@material-ui/icons/Event';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Status" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Unit" />
        </ListItem> 
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Person" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="Region" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Organization" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EventIcon   />
            </ListItemIcon>
            <ListItemText primary="Scheduler" />
        </ListItem>
    </div>
);
