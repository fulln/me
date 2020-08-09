import { getSortedPostData } from '../lib/posts'
import LayoutBody from '../src/layoutBody'
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <LayoutBody>
      <Typography component="div">
        {allPostsData.map(({ id, content, date, title }) => (
          <Box key={id}>
            <Box fontWeight="fontWeightBold" textAlign="center" lineHeight={2}  fontSize={24}>
              {title}
            </Box>            
            <Box textAlign="right"  lineHeight={2}>
              {moment(date).format('YYYY-MM-DD')}          
            </Box>
            <Box textAlign="justify" >
              {content}
            </Box>
          </Box>
        ))}
      </Typography>
    </LayoutBody>
  )
}