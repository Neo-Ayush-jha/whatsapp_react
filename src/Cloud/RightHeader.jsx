import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, Avatar, Box, Stack, Toolbar, Tooltip, Typography } from "@mui/material";

function RightHeader(props){
    return( 
        <>
           <Box sx={{flexGrow:1}}>
                <AppBar position="static" sx={{bgcolor:'#202c33',paddingY:0.5}}>
                    <Toolbar variant="dense">
                                <Stack direction="row" sx={{flexGrow:12}}>
                                    <Avatar alt="Cindy Baker" src={props.img} sx={{ height: '50px', width: '50px', ml: 1, mt: .5 }} />
                                    <Typography variant="h6" component="div"  ml={3} mt={1.6}>{props.name}</Typography>
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