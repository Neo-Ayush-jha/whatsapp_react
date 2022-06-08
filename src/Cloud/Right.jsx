import RightHeader from "./RightHeader";
import { Paper,TextField,Grid,Box } from "@mui/material";
import Massage from "./Massage";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
function Right(){
    return(
        <>
            <Box sx={{width: '100%', height: '59px', zIndex: 100,}}>
            <Paper sx={{bgcolor:'#111b21',position: 'fixed',height:'93vh',width:'960px',border:'1px solid #1f282e',borderRadius:0}}>
                <RightHeader variant="h6" noWrap component="div"/>
                <Massage/>
                <Grid sx={{bgcolor:'#202c33',position: 'fixed',width:'960px',color:'#ddd'}}>
                    <EmojiEmotionsIcon sx={{fontSize:30,marginTop:1.3,marginLeft:1}}/>
                    <AttachmentIcon sx={{fontSize:30,mx:1.8}}/>
                    <TextField  sx={{bgcolor:'#2a3942', width:'78%',borderRadius:2}} />
                    <SendIcon sx={{fontSize:35,marginTop:1.3,pl:1}}/>
                    <MicIcon sx={{fontSize:35,marginTop:1.3,px:2}}/>
                </Grid>
            </Paper>
            </Box>
                
        </>
    );
}
export default Right;