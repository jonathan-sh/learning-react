
import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

import makeStates from './style';

export default ({ numSelected, selected }) => {
    const classes = makeStates();

    return (
        <Toolbar className={clsx(classes.toolbar, { [classes.highlight]: numSelected > 0, })}>
            { numSelected > 0 ? 
            (
                <Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
                    {numSelected} selected
                </Typography>
            ) : 
            (
                <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
                   Nutrition
                </Typography>
            )}

            {numSelected > 0 ?
            (
                <Tooltip title='Delete'>
                    <IconButton aria-label='delete' onClick={ () => console.log(selected) }>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>           
            ) : null }
        </Toolbar>
    );
};