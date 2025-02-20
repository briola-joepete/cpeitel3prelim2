import { useState } from 'react';
import { skills } from './skills.tsx';
import './style.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardContent from '@mui/material/CardContent';




export default function Gallery() {
  const [index, setIndex] = useState(0);
  

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex + 1) % skills.length);
  }

  function handleBackClick() {
    setIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  }

  const data = skills[index];



  return (
    <Container maxWidth="md" sx={{ width: '700px', height: '250px', margin: '0 auto' }}>
      <Box component="section" sx={{ p: 2, border: '1px solid grey'}}>
        <Typography variant="h4" component="h4">
        10 Things that Require Zero Talent
        </Typography>
        <Typography sx={{ color: 'gray'}} variant="h6" component="h6">
          By: JOE PETE BRIOLA
        </Typography>    

      
          <CardContent>
            <div className="container">
              <img src={data.url} alt={data.alt} style={{ width: '100%', height: 'auto' }} />
            </div>
          </CardContent>
        <Typography variant="h4" component="h2">
          {data.thing}
        </Typography>
        
          <Typography variant="body1" sx={{ mt: 2 }}>
            {data.detail}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <Button
            onClick={handleBackClick}
            variant="outlined"
            sx={{ backgroundColor: 'primary.main' }}
            startIcon={<ArrowBackIosNewIcon />}
          >
            <Typography variant="h6" sx={{color: 'white'}}>BACK</Typography>
          </Button>

          <Button
            onClick={handleNextClick}
            variant="outlined"
            sx={{ backgroundColor: 'primary.main' }}
            endIcon={<ArrowForwardIosIcon />}>
            <Typography variant="h6" sx={{color: 'white'}}>NEXT</Typography>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}