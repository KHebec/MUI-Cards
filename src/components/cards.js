import * as React from 'react';
import cardstyle from './cardstyle';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import avo from "./img/f.iabuelos.jpg"
import col from "./img/icoliseo.webp"
import pai from "./img/ipaisaje.webp"
import tra from "./img/ilaboro.jpg"
import RelojEffect from './RelojEffect';
import Contador from "./contador.js";
import Medidor from "./Medidor.js"




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MUI Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const bgI = [{img: col}]

const cards = [
    {id:1,
    img: tra,
    titulo:"Trabajar en Europa: Requisitos y trabajos más demandados",
    cuerpo: "¿Buscas mejores oportunidades laborales fuera de tu país? ¿O simplemente querés experimentar la vida en otro continente?" },
    {id:2,
    img: pai,
    titulo: "¿Hay trabajo para argentinos en Italia?",
    cuerpo: "A pesar de la actual crisis mundial, los migrantes hispanohablantes tienen grandes posibilidades de trabajar en Europa."},
    {id:3,
    img:avo,
    titulo: "¿Cómo encontrar mi AVO italiano?",
    cuerpo: "Si estás buscando migrar a Italia y lograr la ciudadanía italiana, esto será mucho más sencillo si cuentas con un AVO."}
  ];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{backgroundColor: "green"}}>
          <Typography variant="h6" color="inherit" noWrap>
            Prueba de cards de libreria MUI.-
          </Typography>
          <Medidor/>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 2
          }}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom>
              ¿Aún tenés dudas ?
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Si queres iniciar esta aventura pero aun te quedan dudas, acá tenés más información para consultar (¡y gratis!) para que puedas llegar mas tranquilo cuando llegue ese gran día. Animate! y descubri los numerosos beneficios de ser ciudadano italiano.
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center">
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: "39%"
                      // 16:9
                      //pt: '56.25%',
                    }}
                    image={card.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.titulo}
                    </Typography>
                    <Typography>
                    {card.cuerpo}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" sx={{ py: 2, margin:"4% 0% 0% 0%" }} maxWidth="md">Ir al Blog!</Button>
          <Contador/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#DC2B14', p: 4}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          <RelojEffect/>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p">
          
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}