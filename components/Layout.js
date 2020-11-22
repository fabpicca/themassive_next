import Header from './Header.js';

const Layout = props => (
    <div>
        <Header/>
        {props.children}
    </div>
)

export default Layout;