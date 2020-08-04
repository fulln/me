import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import Link from './Link';
import Copyright from './Copyright';
import FullWidthTabs  from './Header.js'

const LayoutBody = (props) => (
    
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
          {props.children}
          <Copyright/>
        </Container>
)

export default LayoutBody