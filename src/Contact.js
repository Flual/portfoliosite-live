import { Component } from 'react';
import './index.css';
import ShowMoreText from "react-show-more-text";

class Contact extends Component {
  executeOnClick(isExpanded) {
      console.log(isExpanded);
  }

  render() {
    
      return (
      
      <div className="Contact" id="Pagetitle">  
        <h1>Kontakt</h1>
        <div id="contactbg"></div>
          <div className="Contact" id="contactcontent"> 
            
            <ShowMoreText
                /* Default options */
                lines={6}
                more="Mehr Anzeigen"
                less="Weniger Anzeigen"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={this.executeOnClick}
                expanded={false}
                width={800}
                truncatedEndingComponent={"... "}
              
            >
                Florian Stangl{" "} <br />
                Kontaktdaten <br />
                Telefon: 0664/9216465 <br />
                E-Mail: Flo.Stangl8@gmx.at <br />
                <br /> <br />
                Erreichbar: <br /> Montag bis Freitag 8:30 - 16:00
            </ShowMoreText>
          </div>
      </div>
      );
  }
}

export default Contact;
