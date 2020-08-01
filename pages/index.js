import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import FullWidthTabs  from '../src/Header.js'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          fulln.me
        </Typography>
        <Link href="/about" color="secondary">
          欢迎来到兴致使然的无名小站
        </Link>        
      </Box>
      <FullWidthTabs/>
      <Copyright/>
    </Container>
  );
}
