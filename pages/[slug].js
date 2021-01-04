import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout.js';
import { getPostBySlug, getAllPosts, getLinkedPosts } from '../lib/postUtils.js';
import Navigation from '../components/Navigation.js';
import Text from '../components/Text.js';
import markdownToHtml from '../lib/markdownToHtml'

function Post(props) {
    return (
        <Layout backgroundImage={props.post.featuredImage}>
            <Text
                post={props.post.content} />
            <Navigation
                title={props.post.title}
                linkedPosts={props.linkedPosts}
            />
        </Layout>
    )
}

export default Post

export async function getStaticProps({ params }) {

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'featuredImage',
    ]);

    const content = await markdownToHtml(post.content || '');
    const linkedPosts = getLinkedPosts(post.slug);

    return {
        props: {
            post: {
                ...post,
                content,
            },
            linkedPosts: linkedPosts,
        },
    }
}



export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}