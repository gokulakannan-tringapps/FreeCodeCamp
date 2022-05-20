
import {Box, Typography, Button} from '@mui/material'
import CategoryField from './CategoryField'

export default function QuizGame(){

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <Box sx={{ bgcolor:"#252626",height:"635px", }}>
            <Typography variant="h3" sx={{ml:"27%" ,p:"3%", color:"#3ca6a4"}}>Choose Your Categories</Typography>
            <form onSubmit={handleSubmit}>
                <CategoryField label="Category"/>
                <CategoryField label="Difficulty"/>
                <CategoryField label="Department"/>
                <Box >
                    <Button variant="contained" type="submit" sx={{fontWeight:"700",fontSize:"21px",bgcolor:"#3ca6a4" ,color:"#252626" ,mt:"30px" ,p:"15px",ml:"45%"}}>Get Started</Button>
                </Box>
            </form>
        </Box>
    );
}

