import { Paper, Box, Typography,Stack } from "@mui/material";
import React from 'react'
import Me from './what/wb.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Massage=(props)=>{
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Paper sx={{ backgroundColor: '#202c33', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography color="#ddd">
                                {/* <small>👇️ {props.incoming} </small> */}
                                <small>👇️ {props.outgoing} </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper> 
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small>How are you?</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small>Khana huu ???</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small> 🧀🧇🥞🥞🍗</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                    <br />
                    <br />
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography color="#ddd">
                                <small>👇️ {props.outgoing} </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper> 
                    </Box>
                    <br /> */}
                    <Box sx={{ flexGrow: 1, float:'right' , textAlign:'right'}}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small>👇️ {props.incoming} </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper> 
                    </Box> 
                    <br />                       
                    <br />                       
                    <br />                       
                    <Box sx={{ flexGrow: 1, float:'right' }}>
                        {/* <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small> Heeyyy !!! bhaiya</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br /> */}
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small>All good. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small>Mene kha liya aap bataiye </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small> See Ya soon 😀😀😀😀. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
    </>
    )
}
export default Massage;
