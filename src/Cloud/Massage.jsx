import { Paper, Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Wb from './what/wb.jpg';
import Chat from "./Chat";

const Massage=()=>{
    return(
        <>
        <Paper sx={{backgroundImage:`url(${Wb})`,height:'77vh',width:'960px', color:'#ddd'}}>
                        <Box  sx={{maxHeight:'77vh',textAlign:'end',px:3}}>
                            <Grid sx={{textAlign:'end',display:'flex'}}>
                                <Grid sx={{width:'50%'}}></Grid>    
                                <Grid sx={{width:'50%',textAlign:'end'}}>
                                    {
                                        Chat.map((props)=>(
                                            <>
                                                <Card sx={{bgcolor:'#005c4b',my:3,color:'#ddd'}} >
                                            <CardContent>
                                                <Typography variant="subtitle1" sx={{color:'$ddd'}}>{props.massage}</Typography>
                                                <Typography variant="overline" mt={0} mb={0} py={0}>{props.time}</Typography>
                                            </CardContent>
                                    </Card> 
                                            </>
                                        ))
                                    }  
                                </Grid>
                            </Grid>    
                        </Box> 
                    </Paper>
    </>
    )
}
export default Massage;