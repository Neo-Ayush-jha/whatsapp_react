import { AppBar, Avatar, Badge, Box, Grid, IconButton, InputBase, Paper, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import MoreIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';

function LeftHeader(){
    return(
        <>
        <Box sx={{  width: '100%',  height: '59px',  backgroundColor: '#202c33',  zIndex: 100,  borderRadius: '1px'}}>
                <Stack direction="row" spacing={2} p={1}>
                    <Box flexGrow={1} ml={2}>
                        <Avatar alt="" src="https://pps.whatsapp.net/v/t61.24694-24/177688827_585795309629926_1944294761379462848_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxy_9I-bksxPUW4NqW8uMNjfqj53_FZXHcXYkfOmASulg&oe=62AD9D9B" />
                    </Box>
                    <Box flexGrow={8}>
                        <Typography variant="h6" color='inherit' >neo_Ayush Jha</Typography>
                    </Box>
                        
                    <Box padding={1}>
                        <Tooltip title="Status">
                            <DonutLargeIcon sx={{ mr: 4, color: '#51585c', }} />
                        </Tooltip>
                        <Tooltip title="Contact">
                            <ChatIcon sx={{ mr: 4, color: '#51585c', }} />
                        </Tooltip>
                       <Tooltip title="More">
                             <MoreVertIcon sx={{ mr: 2, color: '#51585c', }} />
                            
                       </Tooltip>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ width: '100%', minHeight: '40px', backgroundColor: '#182229',p:1 }}>
                <Stack  direction="row">
                    <IconButton sx={{ backgroundColor: '#53bdeb', color: '#182229', width: '40px', height: '40px', ml: 1, mt: 2 }}>
                        <NotificationsOffIcon sx={{ flexGrow: 1 }} />
                    </IconButton>

                    <Typography variant="inherit" component="div" p={2} ml={1}>
                        <b>  Get Notified Of New Messages</b> <br />
                        <small>Turn on Desktop Notification ....... </small>
                    </Typography>
                </Stack>
            </Box>
           <Box sx={{flexGrow:1,borderTop:'1px solid black',borderBottom:'1px solid black' }}>
                <Paper sx={{bgcolor:'#111b21',px:3,py:1,}}>
                        <Box sx={{border:'2px solid #202c33',py:0,borderRadius:2,display:'flex'}}>
                        <SearchIcon sx={{fontSize:26,marginLeft:2,marginTop:1,color:'#eee'}}/>
                        <InputBase sx={{mx:3,color:'#eee',fontSize:20}} placeholder="Search Your Frinds"/>
                        </Box>
                </Paper>
            </Box> 
        </>
    );
}
export default LeftHeader;