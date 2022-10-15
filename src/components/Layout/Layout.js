import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss'

const Layout = ()=>{
    return (
        <div className='App'>
           { /* comp 1 */}
            <Sidebar />

            {/*comp 2 */}
            <div className='page'>
               { /* top tag */}
                <span className='tags top-tags'>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>

               {/* outlet */}
                <Outlet />

                {/* bottom tag */}
                <span className='tags bottom tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>

        </div>
    )
}

export default Layout;