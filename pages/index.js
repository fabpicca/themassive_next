import ReactDOM from 'react-dom';
import Layout from '../components/Layout.js';
import {getAllPosts} from '../logic/Posts.js';
import Navigation from '../components/Navigation.js';

const Index = props => (
    <Layout backgroundImage={props.allPosts[0].featuredImage}>
      <Navigation posts={props.allPosts}/>
    </Layout>
);

export default Index;

export async function getStaticProps() {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'featuredImage'
    ])
  
    return {
      props: { allPosts },
    }
  }