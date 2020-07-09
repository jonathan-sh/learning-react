import React from 'react';
import LinkRef from '@material-ui/core/Link';
import useStyles from "./style";

const url = "https://solinftec.com";

export default function Copyright() {
    const classes = useStyles();

    return (
        <LinkRef color="inherit" href={url}>
            <div className={classes.copyright}>
                <img src={`./logo-solinf.png`} alt={`© Copyright ${new Date().getFullYear()}`}/> 
            </div>
        </LinkRef>
    );
}