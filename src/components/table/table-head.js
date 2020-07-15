import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import makeStates from './style';

export default ({ order, orderBy, numSelected, rowCount, onRequestSort, onSelectAllClick, fields }) => {
    const classes =  makeStates();
    const createSortHandler = (property) => (event) => onRequestSort(event, property);
   
    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                <TableCell
                        key={'id'}
                        align='left'
                        sortDirection={orderBy === 'id' ? order : false}>

                        <TableSortLabel
                            active={orderBy === 'id'}
                            direction={orderBy === 'id' ? order : 'asc'}
                            onClick={createSortHandler('id')}
                        >
                            {'id'}
                            {orderBy === 'id' ? 
                            (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null }
                        </TableSortLabel>
                    </TableCell>
      
                {fields.map((field) => (
                    <TableCell
                        key={field.name}
                        align='left'
                        sortDirection={orderBy === field.name ? order : false}>

                        <TableSortLabel
                            active={orderBy === field.name}
                            direction={orderBy === field.name ? order : 'asc'}
                            onClick={createSortHandler(field.name)}
                        >
                            {field.label}
                            {orderBy === field.name ? 
                            (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null }
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
