import Game from "../Game/Game";
import GameControls from "../GameControls/GameControls";
import "./Content.css"

function Content() {
    return <section className="game-wrapper">
        <Game/>
        <GameControls/>
    </section>

}
  
export default Content;