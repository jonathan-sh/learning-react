import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

import Copyright from '../../components/copyright';
import Toast from '../../components/toast';
import useVerify from '../../util/hooks/useVerify';
import useStyles from './style';
import service from './service';

export default () => {
    const [email, setEmail] = useState('');
    const [emailRef, verifyEmail] = useVerify();

    const [password, setPassword] = useState('');
    const [passwordRef, verifyPassword] = useVerify();

    const [alerError, setAlerError] = useState(false);
    
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.paper}>
            <Container className={classes.container} maxWidth='sm'>
                <Typography component='h1' variant='h5'>  Cerrado Mineiro  </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        inputRef={emailRef}
                        label='Email'
                        autoComplete='email'
                        onChange={(event) => setEmail(event.target.value)}
                        fullWidth
                        autoFocus
                    />

                    <TextField
                        variant='outlined'
                        margin='normal'
                        inputRef={passwordRef}
                        label='Senha'
                        type='password'
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete='current-password'
                        fullWidth
                    />

                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            if (verifyEmail() && verifyPassword()) {
                            service.doLogin(email, password)
                                   .then(token => history.push('/dash'))
                                   .catch((it) => setAlerError(true))
                            }
                        }}
                        className={classes.submit}>
                        Login
                    </Button>
                </form>
            </Container>
            <Toast 
                open={alerError} 
                duration={4}
                onClose={() => setAlerError(false)}
                variant='filled' 
                severity='warning'
                text='Credencias invalidas'
            />
            <Copyright />
        </div >
    );
}