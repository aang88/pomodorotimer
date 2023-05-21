
import "./HomePage.css"
import Timer from "../../compontents/timer/Timer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'





function HomePage() {
  return (
    <div className="Page-container">
      <div className="heading">
        <header> POMOTIMER </header>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <Timer></Timer>
    </div>
  );
}

export default HomePage;
