import { NavLink } from "react-router-dom";
import ReactPlayerLoader from '@brightcove/react-player-loader'

const ArticlePage = () => {


    return (
        <div>
        <NavLink to="/">Home page</NavLink>
        <h1>Video 1</h1>
        
			<ReactPlayerLoader
                accountId='911432371001'
                playerId='Ss1BTkWtG'
                videoId='6341612176112'
				onSuccess={(callbackEvent) => {
					console.log('onSuccess callback', callbackEvent)
				}}
				onFailure={ (callbackEvent) => {
                    
					console.log('onFail callback', callbackEvent)
                } }
			/>


        <h1>Video 2</h1>

			<ReactPlayerLoader
				accountId='911432371001'
                playerId='Ss1BTkWtG'
                videoId='6341610812112'
				onSuccess={(callbackEvent) => {
					console.log('onSuccess callback', callbackEvent)
				}}
				onFailure={ (callbackEvent) => {
                    
					console.log('onFail callback', callbackEvent)
                } }
			/>
        <h1>Video 3</h1>

			<ReactPlayerLoader
				accountId='911432371001'
                playerId='Ss1BTkWtG'
                videoId='6341610812112'
				onSuccess={(success) => {
					console.log('onSuccess callback', success)
				}}
				onFailure={ (callbackEvent) => {
                    
					console.log('onFail callback', callbackEvent)
                } }
			/>
    </div>
    )
}

export default ArticlePage;