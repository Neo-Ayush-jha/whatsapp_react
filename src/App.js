import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Left from "./Cloud/Left.jsx";
import Right from "./Cloud/Right.jsx";

function App(){
    return(
        <>
            <Container maxWidth = 'xl' sx={{bgcolor:'#111b21',height:'100vh',paddingX:2,border:'2px solid #ddd',p:2}}>
                <Grid container >
                    <Grid item lg={4} sx={{marginTop:1}}>
                        <Left/>
                    </Grid>
                    <Grid item lg={8} sx={{marginTop:1}}>
                        <Right />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default App;