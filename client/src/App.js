// import logo from './logo.svg';
// import './App.css';
import { Container, Grid, AppBar, Typography, Grow } from '@mui/material'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import myStyles from './styles'
import logo from './images/logo.png'


function App() {

  // console.log(classes.appBar);


  return (
    <Container maxWidth="lg">
      <AppBar sx={myStyles.appBar} position='static' color='inherit'>
        <Typography sx={myStyles.heading} variant='h4' align='center'>Learn In Public</Typography>
        <img style={{
          margin: '2px 10px', border: '1px solid black',
          borderRadius: '2rem'
        }} src={logo} alt="learninpublic" height={60} />
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
