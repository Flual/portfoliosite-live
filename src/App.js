import './index.css';
import AnimCursor from './components/AnimCursor';
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Layout() {
  return (

    
    <>
      <div className="App">
      <Helmet>
        <title>Flual's Webservices</title>
      </Helmet>
    </div>
      <AnimCursor />
      <nav id="routinglinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Aboutme">Über Mich</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Projects">Projekte</Link>
          </li>
          <li>
            <Link to="/Contact">Kontakt</Link>
          </li>

          

        </ul>



      </nav>

      <Outlet />



    </>
  )
}

export default Layout;
