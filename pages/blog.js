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
  return (
    <div>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    </div>
  )
}