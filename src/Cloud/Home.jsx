import * as React from 'react';
import Me from './what/wb.jpg';
import Massage from "./Massage";
import Contact from "./Contact";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import { Container } from "@mui/system";
import { useState,useEffect } from "react";
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import AttachmentIcon from '@mui/icons-material/Attachment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar,Box,Grid, List, ListItem, ListItemAvatar,TextField, ListItemText, Paper, Stack, Typography } from "@mui/material";



export default function Home(props) {
    const [member,useC]=useState(Contact)
 
    const handelShow=(data)=>{
        let checkArray = member.find((item)=>item.id===data.id)
    }

    const [singleData, getSingleData] = React.useState([]);
    const [userId, getuserd] = React.useState(localStorage.getItem('id'));
    const openChat=(id)=>{
        console.log(id)
        localStorage.setItem('id',id);
        let getId = localStorage.getItem('id');
        let filter = Contact.filter( function(el){
            return el.id == getId
        })
        getSingleData(filter);
        console.log(singleData)
        console.log(singleData.img)
    }
    useState(() => {
        openChat(localStorage.getItem('id'));
        // console.log(singleData)
    },[])
//     const handleClick = () => {
//     openChat(current => !current);
//     openChat(true);
//   };
    return (
        <>
         <Box sx={{width:'100%',height:'100vh',backgroundColor:'#111b21',position:'fixed'}} >
            <Box sx={{ width:{xs:'100%',md: '95%'},pt:2, mx: 'auto',height:'750px',overflowY:'hidden'}}>
                <Grid container spacing={0} >
                    <Grid item sm={4} sx={{display:{xs:'none',sm:'block'}}} >
                        <Box>
                              {/* <Left hendelMember={member} />
                              <SearchBar />
                              <Sidebar /> */}
                              <Box sx={{ width:'100%',backgroundColor:'#111b21',color:'#ddd', mx: 'auto',height:'93vh',border:'1px solid #1f282e',overflowX:'hidden',overflowY:'hidden'}}>
                                    <LeftHeader sx={{position: 'fixed'}}/>
                                    <List sx={{ width: '50%',height: '470px',position:'fixed', maxWidth: '100%',overflowY: 'scroll'}}>
                                        {member.map((e,key) => (
                                                <Box key={key}  >
                                                    <Paper  sx={{  borderRadius: 0,":hover":{backgroundColor:'#202c33',color:'#ffffff'},color:'#acb2b7',backgroundColor:'#111b21' }}>
                                                    <Stack direction="row" onClick={()=>openChat(e.id)} >
                                                        <Avatar  src={e.img} sx={{ height: '50px', width: '50px', ml:2,mt:1.5 }} />
                                                        <Typography variant="h6" component="div" p={1} ml={3} flexGrow={1} sx={{borderBottom:'.5px solid black' }}>
                                                            <b>{e.name}  </b> <br/>
                                                            <Stack direction="row">
                                                                <DoneIcon sx={{ width: '15px' }} />
                                                                <small style={{ marginTop: '3px', marginLeft: '6px' }}>Hello World....... </small>
                                                            </Stack>
                                                        </Typography>
                                                        <KeyboardArrowDownIcon sx={{mr:3,color:'gray',mt:3}} />
                                                    </Stack>                            
                                                </Paper>
                                                </Box>
                                        ))}
                                    </List>
                                </Box> 
                        </Box>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Paper>
                              {/* <Right handelShow={(data)=>handelShow(data)} data={member}/> */}
                              <Box sx={{width: '100%', height: '59px', zIndex: 100,}}>
                                  {
                                    singleData.map((e) =>(
                                    <Paper sx={{bgcolor:'#111b21',position: 'fixed',height:'93vh',width:'960px',border:'1px solid #1f282e',borderRadius:0}}>
                                        <RightHeader variant="h6" noWrap component="div" name={e.name} img={e.img} />
                                        <Box sx={{ maxWidth: '100%', backgroundImage: `url(${Me})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionY:'center',backgroundPositionX:'center' }}>
                                            <Box sx={{  height: '560px', maxWidth: '100%',overflowY: 'scroll', px:5 ,py:1 }}>
                                        {e.message.map((m) => (
                                            <>
                                              {
                                                  (m.sender_id == localStorage.getItem('id')) ? (
                                                    <Massage incoming={m.resiving_message} />
                                                  ) : (
                                                      <Massage outgoing={m.sender_message} />
                                                  )
                                              }
                                            </>
                                        ))}
                                        <Massage />
                                            </Box>
                                        </Box>
                                        <Grid sx={{bgcolor:'#202c33',position: 'fixed',width:'960px',color:'#ddd'}}>
                                            <EmojiEmotionsIcon sx={{fontSize:28,marginTop:1.5,marginLeft:1}}/>
                                            <AttachmentIcon sx={{fontSize:30,mx:1.8}}/>
                                            <TextField  sx={{bgcolor:'#2a3942', width:'78%',borderRadius:2}} />
                                            <SendIcon sx={{fontSize:28,marginTop:1.5,pl:1}}/>
                                            <MicIcon sx={{fontSize:28,marginTop:1.5,px:2}}/>
                                        </Grid>
                                    </Paper>
                                    ))
                                  }
                                </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
         </Box>
        </>
    );
}