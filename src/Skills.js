import './index.css';
import reactimg from './img/React-icon.svg.png';
import jsimg from './img/JavaScript-logo.png';
import phpimg from './img/php-logo.png';
import htmlimg from './img/html-logo.png';
import cssimg from './img/css-logo.png';
import sqlimg from './img/sql-logo.png';

function Skills() {
  return (
    <div className="Skills" id="Pagetitle">
        <h1>Core-Skills</h1>

        <div className="skillscontent" id="skillscontent">



         <div className="logo1">  
           <img src={ reactimg } alt="reactlogo" className='reactlogo'/>
            <div className="overlayreactlogo">
              <div className="overlaytext">React</div>
            </div>
          </div>
        


          
          <div className="logo2">
                <img src={jsimg} alt="javascriptlogo" className='javascriptlogo' />
              <div className="javascriptoverlay">
              <div className="overlaytextjs">Javascript</div>
              </div>
          </div>
          
        <div className="logo3">
            <img src={phpimg} alt="phplogo" className='phplogo' />
        </div>

        <div className="logo4">
           <img src={htmlimg} alt="htmllogo" className='htmllogo' />
           <div className="htmloverlay">
              <div className="overlaytexthtml">HTML</div>
              </div>
        </div>

        <div className="logo5">
           <img src={cssimg} alt="csslogo" className='csslogo' />
           <div className="cssoverlay">
              <div className="overlaytextcss">CSS</div>
              </div>
        </div>

        <div className="logo6">
           <img src={sqlimg} alt="sqllogo" className='sqllogo' />
        </div>

        <div className="uvm">
            <p>uvm.</p>
        </div>

        </div> 
    </div>
  );
}

export default Skills;
