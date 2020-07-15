import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useVerify from '../../util/hooks/useVerify';

const getForm = (itens) => {
    let object = {};
    let checkers = []
    const form = itens.map(it => {
        const [fieldRef, fieldVerify] = useVerify();
        checkers.push(fieldVerify)
        return (<TextField
            key={it.name}
            variant='outlined'
            margin='normal'
            inputRef={fieldRef}
            label={it.label}
            type={it.type || 'text'}
            autoComplete={it.auto}
            onChange={(event) => {
                object[it.name] = event.target.value;
            }}
            fullWidth />)
    })

    return (<div> { form } </div>)
}

export default ({ label, title, fields }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={openDialog}>
                { label }
            </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={closeDialog}>

                <DialogTitle>{title}</DialogTitle>

                <DialogContent> {getForm(fields)} </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={closeDialog}>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={closeDialog} color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
