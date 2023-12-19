import { NavLink } from "react-router-dom";
import ReactPlayerLoader from '@brightcove/react-player-loader'

const HomePage = () => {
    const playerData = {
		accountId: '911432371001',
		playerId: 'y3mh7jYMO',
		videoId: '6326627076112',
	}
    return (  
        <div>
            <NavLink to="/article">Article</NavLink>
            <h1>Home Page</h1>
            <ReactPlayerLoader
				{...playerData}
				onSuccess={(success) => {
					console.log('onSuccess callback', success)
                    var myPlayer = success.ref;
                    myPlayer.muted(true);
                    myPlayer.play();
				}}
				onFailure={ (callbackEvent) => {
                    
					console.log('onFail callback', callbackEvent)
                } }
			/>
        </div>
    )
}

export default HomePage;