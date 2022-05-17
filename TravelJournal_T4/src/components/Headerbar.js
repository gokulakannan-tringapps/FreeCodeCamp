import React from 'react'
import {AppBar, Typography} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

export default function Headerbar(){
    return(
        <AppBar sx={{bgcolor:"#fc4e4e", flexDirection: 'row'}}>
                <PublicIcon sx={{ fontSize: 50,mt:1,ml:50}}/>
                <Typography variant="h2" component="div" >
                    Travel Journal
                </Typography>
        </AppBar>
    );
}