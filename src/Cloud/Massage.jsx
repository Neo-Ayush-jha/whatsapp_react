import { Paper, Box, Grid, Typography, Card, CardContent, } from "@mui/material";
import React from 'react'
import Stack from '@mui/material/Stack';
// import Me from './what/my.jpeg';
import Me from './what/wb.jpg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Massage=()=>{
    return(
        <>
            <Box sx={{ maxWidth: '100%', backgroundImage: `url(${Me})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionY:'center',backgroundPositionX:'center' }}>
                <Box sx={{  height: '539px', maxWidth: '100%',overflowY: 'scroll', p: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                             <Stack direction="row">
                                <Typography className='p text-lead' sx={{color:'#ddd'}}>
                                   <small> Hii Ayush</small>
                                </Typography>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />

                             </Stack>
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
                    <Box sx={{ flexGrow: 1, float:'right' }}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small> Heeyyy !!! bhaiya</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
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
                    <Box sx={{ flexGrow: 1, mt: '8%' }}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1',mt:15, mb: .5, display: 'inline-block' }}>
                            <Typography className='p text-lead' sx={{color:'#ddd'}}>
                                <small> Hello</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small > This is neo as  alaways Reday to eat.</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small > 🧀🧇🥞🥞🍗</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1,mb:2 ,float:'right'}}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small sx={{color:'#ddd'}}> Hey neo How You  !!!</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1,width:'500px', display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small sx={{color:'#ddd'}}> Expedita nemo dolorem sit fugit ipsam est, quod quos. Aut, repellat nesciunt quod eveniet libero, praesentium voluptate, sed accusantium eum eaque odit. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, display: 'inline-block', align: 'right', float: 'right', mb: .5 }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small sx={{color:'#ddd'}}>  See Ya mate  😀😀😀😀. </small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 1, mt: '8%' }}>
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1',mt:15, mb: .5, display: 'inline-block' }}>
                            <Typography className='p text-lead' sx={{color:'#ddd'}}>
                                <small> Hee!!</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        <Paper sx={{ backgroundColor: '#202c33', p: 1, opacity: '1', mb: .5, display: 'inline-block' }}>
                            <Typography sx={{color:'#ddd'}}>
                                <small > This is neo as  alaways Reday to watching movie</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper>
                        <br />
                        {/* <Paper sx={{ backgroundColor: '#202c33', p: 1, mb: .5, display: 'inline-block' }}>
                            <Typography>
                                <small > 🧀🧇🥞🥞🍗</small>
                                <KeyboardArrowDownIcon sx={{ml:1,color:'gray'}} />
                            </Typography>
                        </Paper> */}
                    </Box>
                </Box>
            </Box>
    </>
    )
}
export default Massage;
