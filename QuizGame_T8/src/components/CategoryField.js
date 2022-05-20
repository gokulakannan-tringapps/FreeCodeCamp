import React from 'react';
import {Box, FormControl,InputLabel, MenuItem, Select} from '@mui/material'

export default function CategoryField(props){

    const {label}=props;
    
    const [value, setValue] = React.useState();

    const handleChange =()=>{

    }
    return(
        <Box width="100%" >
            
            <FormControl sx={{p:"15px",ml:"35%",width:"30%"}}>
                <InputLabel sx={{color:"#252626",ml:"5px",p:"15px"}}>{label}</InputLabel>
                <Select sx={{bgcolor:"#3ca6a4"}}value={value} label={label} onChange={handleChange}>
                    <MenuItem value={5}>A</MenuItem>
                    <MenuItem value={15}>B</MenuItem>
                    <MenuItem value={25}>C</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}