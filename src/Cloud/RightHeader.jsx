import { AppBar, Avatar, Box, IconButton, Paper, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Bhai from  './what/bhai.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function RightHeader(){
    return(
        <>
           <Box sx={{flexGrow:1}}>
                <AppBar position="static" sx={{bgcolor:'#202c33',paddingY:0.5}}>
                    <Toolbar variant="dense">
                                <Stack direction="row" sx={{flexGrow:12}}>
                                    <Avatar alt="Cindy Baker" src={Bhai} sx={{ height: '50px', width: '50px', ml: 1, mt: .5 }} />
                                    <Typography variant="h6" component="div"  ml={3} mt={1.6}> Bhaiya jii</Typography>
                                </Stack>
                                <Box sx={{flexGrow:0.5}}>
                                    <Tooltip title="Search">
                                        <SearchIcon sx={{ mr: 2, color: '#51585c', }} />
                                    </Tooltip>
                                    <Tooltip title="More">
                                        <MoreVertIcon sx={{ mr: 2, color: '#51585c', }} />
                                    </Tooltip>
                                </Box>
                    </Toolbar>
                </AppBar>   
            </Box> 
        </>
    );
}
export default RightHeader;