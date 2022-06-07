import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import LeftHeader from "./LeftHeader";
import ImageIcon from '@mui/icons-material/Image';
import Contact from "./Contact";


// import Anish from './what/anish.jpg'
// const DataContact()
const Left = ()=>{
    return(
        <>
            <Paper sx={{bgcolor:'#111b21',color:'#ddd',position: 'fixed',width:'32.5%'}}>
                <LeftHeader sx={{position: 'fixed'}}/>
                <List sx={{ width: '100%',maxWidth:360,overflow: "auto",maxHeight:'80vh'}}>
                    {Contact.map((e) => (
                            <>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar alt="" src={e.img} sx={{height:60,width:60,marginRight:2}}/>

                                    </ListItemAvatar>
                                    <ListItemText  primary={e.name} sx={{fontSize:'30px'}}  secondary="Jan 9, 2014" />
                                </ListItem>
                            </>
                    ))}
                </List>
            </Paper>
        </>
    );
}
export default Left;