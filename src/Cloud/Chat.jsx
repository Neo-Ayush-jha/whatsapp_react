import { Paper, Box, Grid, Typography, Card, CardContent, } from "@mui/material";
import React from 'react'
// import Stack from '@mui/material/Stack';
// // import Me from './what/my.jpeg';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Me from './what/wb.jpg';
const Chat=()=>{
    return(
        <>
            <Box sx={{ maxWidth: '100%', backgroundImage: `url(${Me})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionY:'center',backgroundPositionX:'center' }}>
                <Box sx={{  height: '539px', maxWidth: '100%',overflowY: 'scroll', p: 2}}>

                </Box>
            </Box>
        </>
    )
}
export default Chat;
