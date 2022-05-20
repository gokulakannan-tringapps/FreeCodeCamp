
import {Typography, Box,TextField, Button} from '@mui/material'

export default function WelcomePage(){
    return(
        
            <Box sx={{ bgcolor:"#252626",height:"635px", }}>
                <Typography variant="h1" sx={{color:"#dee3e3",fontWeight:"500", ml:"32%",textShadow:"5px 5px 5px #3ca6a4"}} >
                    Quiz Game
                </Typography>
                <Typography variant="h4" sx={{color:"#3ca6a4",fontWeight:"500", ml:"31%", mt:"50px"}} >
                    Are you ready for the challenge ?
                </Typography>
                <TextField sx={{mt:"5%" ,ml:"36%",bgcolor:"white", borderRadius:"5px", width:"30%"}} variant="filled" label="Enter Your Name" color="secondary" />
                <Button variant="contained" sx={{bgcolor:"#3ca6a4",fontSize:"30px",color:"#252626",height:"10%",width:"10%",mt:"15%" ,ml:"-20%"}}>
                    Start
                </Button>
            </Box>
        
    )
}

