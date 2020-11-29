import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout.js';
import {getAllPosts} from '../logic/Posts.js';
import Navigation from '../components/Navigation.js';

class PhotoBlog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currentPost : props.allPosts[0], /* last post as default when landing on homepage */
    };
  }

  handleNavigationClick(i){
    const selectedPost = this.props.allPosts[i];
    this.setState({
      currentPost: selectedPost,
    })
  }

  render(){
    return (
      <Layout backgroundImage={this.state.currentPost.featuredImage}>
        <Navigation 
          posts={this.props.allPosts} 
          onClick={(i) => this.handleNavigationClick(i)}
        />
      </Layout>
    )
  }
}

export default PhotoBlog

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