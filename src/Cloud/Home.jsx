import * as React from 'react';
import { Container } from "@mui/system";
import Left from "./Left.jsx";
import Right from "./Right.jsx";
import { Avatar,Box,Grid, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
// import MainBar from './MainBar';
export default function BasicGrid() {
    return (
        <>
         <Box sx={{width:'100%',height:'100vh',backgroundColor:'#111b21',position:'fixed'}} >
            <Box sx={{ width:{xs:'100%',md: '95%'},pt:2, mx: 'auto',height:'750px',overflowY:'hidden'}}>
                <Grid container spacing={0} >
                    <Grid item sm={4} sx={{display:{xs:'none',sm:'block'}}} >
                        <Box>
                              <Left />
                              {/* <SearchBar />
                              <Sidebar /> */}
                        </Box>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Paper>
                              <Right />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
         </Box>
        </>
    );
}