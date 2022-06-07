import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function RightHeader(){
    return(
        <>
           <Box sx={{flexGrow:1}}>
                <AppBar position="static" sx={{bgcolor:'#202c33',paddingY:0.5}}>
                    <Toolbar variant="dense">
                        <IconButton edge='start' color='inherit' aria-label="menu" sx={{mr:2}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color='inherit' component='div'>WhatsApp</Typography>
                    </Toolbar>
                </AppBar>   
            </Box> 
        </>
    );
}
export default RightHeader;