import { Avatar,Box,Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from "@mui/material";
import LeftHeader from "./LeftHeader";
import Contact from "./Contact";
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import Anish from './what/anish.jpg'
// const DataContact()
const Left = ()=>{
    return(
        <>
             {/* <Box sx={{bgcolor:'#111b21',color:'#ddd',position: 'fixed',width:'32.5%'}}> */}
            <Box sx={{ width:'100%',backgroundColor:'#111b21',color:'#ddd', mx: 'auto',height:'93vh',border:'1px solid #1f282e',overflowX:'hidden',overflowY:'hidden'}}>
                <LeftHeader sx={{position: 'fixed'}}/>
                <List sx={{ width: '50%',height: '470px',position:'fixed', maxWidth: '100%',overflowY: 'scroll'}}>
                    {Contact.map((e) => (
                            <>
                                <Paper sx={{  borderRadius: 0,":hover":{backgroundColor:'#202c33',color:'#ffffff'},color:'#acb2b7',backgroundColor:'#111b21' }}>
                                <Stack direction="row">
                                    <Avatar alt="Cindy Baker" src={e.img} sx={{ height: '50px', width: '50px', ml:2,mt:1.5 }} />
                                    <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1} sx={{borderBottom:'.5px solid black' }}>
                                        <b>{e.name} </b> <br/>
                                        <Stack direction="row">
                                            <DoneIcon sx={{ width: '15px' }} />
                                            <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                                        </Stack>
                                    </Typography>
                                    <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                                </Stack>                            
                            </Paper>
                            </>
                    ))}
                </List>
            </Box> 
        </>
    );
}
export default Left;