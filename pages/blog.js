import { getSortedPostData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  debugger
  return (
    <div>
        <ul >
          {allPostsData.map(({ id, content,date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br/>
              {content}    
            </li>            
          ))}
        </ul>
    </div>
  )
}