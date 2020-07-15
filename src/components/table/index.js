import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import * as _ from 'lodash';

import TableToolbar from './table-toolbar';
import TableHead from './table-head';
import makeStates from './style';
import sort from '../../util/tools/sort';
import axios from '../../util/axios';

const fields = [
    { name: 'name', label: 'name' },
    { name: 'region.name', label: 'region' },
    { name: 'organization.name', label: 'organization' },
]


export default () => {
    const classes = makeStates();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const getRows = () => {
        axios.get('/unit')
            .then(it => {
                setRows(it.data);
                console.log("fui na api");
            })
            .catch(it => console.error(it))
    }


    useEffect(() => { getRows() }, [order, orderBy, selected, page, rowsPerPage]);


    console.log("table");

    const requestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const selectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const changePage = (event, newPage) => setPage(newPage);

    const changeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const getCollumValue = (row, collumKey) => _.get(row, collumKey, '-');

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableToolbar numSelected={selected.length} selected={selected} />
                <TableContainer>
                    <Table className={classes.table} aria-labelledby='tableTitle' size={'medium'} ria-label='enhanced table'>
                        <TableHead
                            order={order}
                            orderBy={orderBy}
                            rowCount={rows.length}
                            onRequestSort={requestSort}
                            numSelected={selected.length}
                            onSelectAllClick={selectAllClick}
                            fields={fields}
                        />
                        <TableBody>
                            {sort(rows, order, orderBy)
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `checkbox-${index}`;

                                    return (
                                        <TableRow
                                                
                                            onClick={(event) => handleClick(event, row.id)}
                                            role='checkbox'
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding='checkbox'> <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} /> </TableCell>
                                            <TableCell component='th' id={labelId} scope='row'>{row.id}</TableCell>
                                            {fields.map((it, key) => <TableCell key={key} align='left'>{getCollumValue(row, it.name)}</TableCell>)}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={changePage}
                    onChangeRowsPerPage={changeRowsPerPage}
                />
            </Paper>
        </div>
    );
}