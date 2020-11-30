import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout.js';
import {getAllPosts} from '../logic/Posts.js';
import Navigation from '../components/Navigation.js';

class PhotoBlog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currentPost : 0, /* last post as default when landing on homepage */
    };
  }

  handleNavigationClick(i){
    this.setState({
      currentPost: i,
    })
  }

  render(){
    return (
      <Layout backgroundImage={this.props.allPosts[this.state.currentPost].featuredImage}>
        <Navigation 
          posts={this.props.allPosts} 
          current={this.state.currentPost}
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