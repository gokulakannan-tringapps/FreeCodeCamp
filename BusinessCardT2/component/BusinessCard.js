import React from 'react';
import {Box, Paper, Card, CardMedia, CardContent, Typography, CardActions, Button, Collapse} from '@mui/material';
import profileimage from '../image/drStrange.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function BusinessCard(){
	const [expanded, setExpanded] = React.useState(false);

	  const handleExpandClick = () => {
		setExpanded(!expanded);
	  };
	return(
		<Box sx={{ml:40, width:"50%", height:800, backgroundColor:"#78797a", display:'flex',flexWrap: 'wrap', }}>
			<Paper elevation={1} variant="outlined" sx={{ml:17,mt:5,width:400,height:280, backgroundColor:"#252526", borderRadius:8,}}> 
				<Card sx={{borderRadius:8,}}>
					<CardMedia component="img" height="200" image={profileimage} alt="Nothing"/>
					<CardContent>
							<Typography variant="h4" sx={{ml:4,}}>Dr. Stephen Strange</Typography>
							<Typography sx={{ml:10,}}>Marvel Cinematic Universe</Typography>
					</CardContent>
					<CardActions sx={{ml:9,}}>
						<Button variant="contained" component="span"><EmailIcon/>E-mail</Button>
						<Button variant="contained" component="span"><LinkedInIcon/>Linked-In</Button>
					</CardActions>
					<CardContent>
							<Typography gutterBottom variant="h5" sx={{ml:1,}}>About</Typography>
							 <Typography gutterBottom variant="body2" color="text.secondary">
								Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics.
								Created by Steve Ditko with Stan Lee, the character first appeared in Strange Tales. 
								Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. 
							</Typography>
							<Typography variant="h5" >Movies 
											 <ExpandMoreIcon expand={expanded} onClick={handleExpandClick} /> 
							</Typography>
					</CardContent>
					
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
						  <Typography variant="body2" sx={{display:'flex',}}>
								  <MovieFilterTwoToneIcon /> Doctor Strange 2016
						  </Typography>
						  <Typography variant="body2" sx={{display:'flex',}}>
								  <MovieFilterTwoToneIcon /> Doctor Strange In The Multiverse Of Madness 2022
						  </Typography>	
						</CardContent>
					</Collapse>
					<div className="Footer">
						 <Typography><TwitterIcon  sx={{ml:4,mt:0,width:80,height:50,color:"#039dfc",}} />
									 <InstagramIcon sx={{ml:1,width:70,height:50,color:"#d902f5",}} />
									 <FacebookIcon sx={{ml:2,width:70,height:50,color:"#0335fc",}} />
									 <GitHubIcon sx={{ml:2,width:70,height:47,color:"#f9f0fa",}} />
						</Typography>
					</div>
				</Card>
			</Paper>
		</Box>
	);
}