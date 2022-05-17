import React from 'react'
import {Card, CardContent, Typography,CardMedia, Link} from '@mui/material';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import TravelData from './travelData'


export default function TravelCard(){
    
    return(
        TravelData.map(item => { return(
            <Card sx={{ minWidth: 300,height:300, mt:10,display:"flex" }}>
                 <CardMedia sx={{width:300}}
                    component="img"
                    image={item.picture}
                    alt="Travel Place"
                />
                <CardContent >
                    <Typography  sx={{color:"#d95d04", p:1}} variant="h4" >{item.title}</Typography>
                    <Typography  sx={{color:"#4c11fa", }}variant="h5" >{item.location}</Typography>
                    <Typography  sx={{mt:1,mb:2}} variant="body2" >{item.description}</Typography>
                    
                    <Typography  sx={{ml:10,fontWeight:"bold",fontSize:20, display:"inline"}}  variant="subtitle2"><CalendarTodayRoundedIcon sx={{color:"#a19d9d",}}/> Start Date : {item.start}</Typography>
                   
                    <Typography sx={{ml:5, fontWeight:"bold",fontSize:20, display:"inline"}} variant="subtitle2"> <CalendarTodayRoundedIcon sx={{color:"#a19d9d",}} /> End Date : {item.end}</Typography>
                    <Typography sx={{display:"flex" ,mt:2,fontSize:"17px"}} variant="button">URL :<AddLocationAltIcon sx={{color:"#2595e6"}}/><Link href={item.map} underline="always">Google URL...</Link></Typography>
                </CardContent>
        </Card>
        )})
       
    );
}