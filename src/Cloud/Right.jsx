import RightHeader from "./RightHeader";
import { Paper,TextField } from "@mui/material";
import Massage from "./Massage";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
function Right(){
    return(
        <>
            <Paper sx={{bgcolor:'#111b21',position: 'fixed',width:'960px'}}>
                <RightHeader variant="h6" noWrap component="div"/>
                <Massage/>
                <Paper sx={{bgcolor:'#202c33',position: 'fixed',width:'945px' ,p:1,color:'#ddd'}}>
                    <EmojiEmotionsIcon sx={{fontSize:35,marginTop:1.3}}/>
                    <AttachmentIcon sx={{fontSize:35,mx:1.8}}/>
                    <TextField  sx={{bgcolor:'#2a3942',borderRight:'1px solid #2a3942', width:'82%',borderRadius:2}}/>
                    <MicIcon sx={{fontSize:35,marginTop:1.3,px:2}}/>
                </Paper>
            </Paper>
        </>
    );
}
export default Right;