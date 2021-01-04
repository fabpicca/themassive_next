import Layout from '../components/Layout.js';
import { getAllPosts, getLinkedPosts } from '../lib/postUtils.js';
import Navigation from '../components/Navigation.js';
import Text from '../components/Text.js';

function PhotoBlog(props) {

  return (
    <Layout backgroundImage={props.lastPost.featuredImage}>
      <Text
        post={props.lastPost.content} />
      <Navigation
        linkedPosts={props.linkedPosts}
        title={props.lastPost.title}
      />
    </Layout>
  )
}

export default PhotoBlog

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'featuredImage',
    'content',
  ])

  const _lastPost = posts[0];
  const _linkedPosts = getLinkedPosts(_lastPost.slug);

  return {
    props: {
      lastPost: _lastPost,
      linkedPosts: _linkedPosts,
    }
  }
}