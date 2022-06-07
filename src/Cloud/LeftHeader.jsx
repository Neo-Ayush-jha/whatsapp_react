import { AppBar, Avatar, Badge, Box, Grid, IconButton, InputBase, Paper, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import MoreIcon from '@mui/icons-material/MoreVert';

function LeftHeader(){
    return(
        <>
           <Box sx={{flexGrow:1,bgcolor:'#111b21'}}>
                <AppBar position="static" sx={{bgcolor:'#202c33'}}>
                    <Toolbar variant="dense">
                        <IconButton edge='start' color='inherit' aria-label="menu" sx={{mr:2}}>
                            <Stack direction='row' spacing={2}>
                                <Avatar alt="" src="https://pps.whatsapp.net/v/t61.24694-24/177688827_585795309629926_1944294761379462848_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxy_9I-bksxPUW4NqW8uMNjfqj53_FZXHcXYkfOmASulg&oe=62AD9D9B" />
                            </Stack>
                        </IconButton>
                        <Typography variant="h6" color='inherit' component='div'>Ayush Jha</Typography>
                        <Grid sx={{textAlign:'end',marginLeft:15,display:'flex'}}>
                            <Badge color="primary" variant="dot">
                                <AutoModeIcon  sx={{px:1}}/>
                            </Badge>
                            <ChatIcon sx={{px:2}}/>
                            <MoreIcon sx={{px:1}}/>
                        </Grid>
                    </Toolbar>
                </AppBar>   
                <Paper sx={{bgcolor:'#111b21',px:3,py:1}}>
                        <Box sx={{border:'2px solid #202c33',py:0,borderRadius:2,display:'flex'}}>
                        <SearchIcon sx={{fontSize:26,marginLeft:2,marginTop:1,color:'#eee'}}/>
                        <InputBase sx={{mx:3,color:'#eee',fontSize:20}} placeholder="Search Your Frinds"/>
                        {/* <SearchIcon sx={{fontSize:26,marginTop:1,color:'#eee'}}/> <InputBase sx={{mx:5,color:'#eee',fontSize:20}} placeholder="Search Your Frinds"/> */}
                        </Box>
                </Paper>
            </Box> 
        </>
    );
}
export default LeftHeader;