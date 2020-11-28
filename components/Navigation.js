const Navigation = props => (
  <ul>
      {props.posts.map((post,index) => (
          <li key={index}>
            <a href="#" onClick>{post.slug}</a>
          </li>
      ))}
  </ul>
)  
 

export default Navigation;
