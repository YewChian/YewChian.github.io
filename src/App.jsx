import FWSIcon from './assets/FWSIcon.png'
import BabyThrowingSimulatorVideo from './videos/BabyThrowingSimulatorVideo.mp4'
import BabyThrowingSimulatorPlaythrough from './videos/CatMayorsVideo.mp4'
import FirestormFarmingVideo from './videos/FirestormFarmingVideo.mp4'
import FirestormFarmingPlaythrough from './videos/FirestormFarmingVideo.mp4'
import CatMayorsVideo from './videos/CatMayorsVideo.mp4'
import CatMayorsPlaythrough from './videos/CatMayorsVideo.mp4'
//import BabyThrowingSimulator from './BabyThrowingSimIsolated/index.html'
import './App.css'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'

function App() {
	const Games = () => {
		return (
			<div className="container">
				<a className="card" href="/src/BabyThrowingSimulatorIsolated/index.html" target="_blank">
					<h2>Baby Throwing Simulator</h2>
					<video loop autoPlay muted onClick="/src/videos/BabyThrowingSimulatorVideo">
						<source 
							src={BabyThrowingSimulatorVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Defend your house against persistent suitors in this projectile-slinging roguelike</h3>
				</a>
				<a className="card" href="/src/FirestormFarming/index.html" target="_blank">
					<h2>Firestorm Farming</h2>
					<video loop autoPlay muted>
						<source 
							src={FirestormFarmingVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Submission for Brackey's Game Jam 2024.2. Manage your income while planting crops, then burn them down as efficiently as possible</h3>
				</a>
				<a className="card" href="/src/CatMayors/index.html" target="_blank">
					<h2>Cat Mayors</h2>
					<video loop autoPlay muted>
						<source 
							src={CatMayorsVideo}
							type="video/mp4"
						/>
					</video>
					<h3>2-player cat-themed building sim</h3>
				</a>
			</div>
		)
	}

	const GameplayVideos = () => {
		return (
			<div className="container">
				<h2>Baby Throwing Simulator</h2>
				<video controls>
					<source
						src={BabyThrowingSimulatorPlaythrough}
						type="video/mp4"
					/>
				</video>
				<h2>Firestorm Farming</h2>
				<video controls>
					<source
						src={FirestormFarmingPlaythrough}
						type="video/mp4"
					/>
				</video>
				<h2>Cat Mayors</h2>
				<video controls>
					<source
						src={CatMayorsPlaythrough}
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Games />,
		},
		{
			path: '/gameplay',
			element: <GameplayVideos /> ,
		},
		/*
		{
			path: '/BabyThrowingSimulatorIsolated',
			element: <BabyThrowingSimulator />,
		}
		*/
	]);



  return (
    <div className="app-container">
      <div className="header">
        <a href="/">
          <img className="logo" src={FWSIcon}/>
        </a>
        <a href="/">
					Home
        </a>
        <a href="/gameplay">
					Playthroughs	
        </a>
      </div>
			<RouterProvider router={router} />
    </div>
  )
}

export default App
