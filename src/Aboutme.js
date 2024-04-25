import './index.css';

function Aboutme() {
  return (
    <div className="Aboutme" id="Pagetitle">
        <h1>Über mich</h1>
        <div id="aboutmebg"></div>
        <div className="aboutmecontent" id="aboutmecontent">
            <p>Ich bin Web-Frontend Entwickler.<br />
             Durch Diplom, Schulerfahrung und Selbstudium kann ich eine breite Basis an Skills vorweisen.<br />
             Von Micro SPA's - wie diese Seite - bis zu mittleren Apps mit integrierter Datenbank habe ich alles im Repertoir.<br />
             Wenn Sie meine Skills und Ausbildung genauer unter die Lupe nehmen wollen geht es <a target='_blank' href='https://www.linkedin.com/in/florian-stangl-b31409271'>HIER</a> zu meinem LinkedIn Profil.
            </p>
        </div>

    </div>


  );
}

export default Aboutme;
