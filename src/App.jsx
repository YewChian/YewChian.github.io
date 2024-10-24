import FWSIcon from './assets/FWSIcon.png'
import BabyThrowingSimulatorVideo from './videos/BabyThrowingSimulatorVideo.mp4'
import BabyThrowingSimulatorPlaythrough from './videos/BabyThrowingSimulatorPlaythrough.mp4'
import FirestormFarmingVideo from './videos/FirestormFarmingPlaythrough.mp4'
import FirestormFarmingPlaythrough from './videos/FirestormFarmingPlaythrough.mp4'
import CatMayorsVideo from './videos/CatMayorsVideo.mp4'
import CatMayorsPlaythroughP1 from './videos/CatMayorsPlaythroughP1.mp4'
import CatMayorsPlaythroughP2 from './videos/CatMayorsPlaythroughP2.mp4'
import CatMayorsPlaythroughP3 from './videos/CatMayorsPlaythroughP3.mp4'
import ScarletSalamiVideo from './videos/ScarletSalamiVideo.mp4'
import ScarletSalamiPlaythroughP1 from './videos/ScarletSalamiPlaythroughP1.mp4'
import ScarletSalamiPlaythroughP2 from './videos/ScarletSalamiPlaythroughP2.mp4'
import ScarletSalamiPlaythroughP3 from './videos/ScarletSalamiPlaythroughP3.mp4'
import './App.css'
import {
	createHashRouter,
	RouterProvider,
} from 'react-router-dom'

function App() {
	const Games = () => {
		return (
			<div className="container">
				<a className="card" href="https://phatwhale.itch.io/baby-throwing-simulator" target="_blank">
					<h2>Baby Throwing Simulator</h2>
					<video loop autoPlay muted>
						<source 
							src={BabyThrowingSimulatorVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Defend your house against persistent suitors in this projectile-slinging roguelike</h3>
				</a>
				<a className="card" href="https://mykatsudon.itch.io/firestorm-farming" target="_blank">
					<h2>Firestorm Farming</h2>
					<video loop autoPlay muted>
						<source 
							src={FirestormFarmingVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Submission for Brackey's Game Jam 2024.2. Manage your income while planting crops, then burn them down as efficiently as possible</h3>
				</a>
				<a className="card" href="https://mykatsudon.itch.io/cat-mayors" target="_blank">
					<h2>Cat Mayors</h2>
					<video loop autoPlay muted>
						<source 
							src={CatMayorsVideo}
							type="video/mp4"
						/>
					</video>
					<h3>2-player cat-themed building sim</h3>
				</a>
				<a className="card" href="https://phatwhale.itch.io/scarlet-salami" target="_blank">
					<h2>Scarlet Salami</h2>
					<video loop autoPlay muted>
						<source 
							src={ScarletSalamiVideo}
							type="video/mp4"
						/>
					</video>
					<h3>2-player co-op rpg with jobs based on the game's interpretation of your personality</h3>
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
				<h2>Cat Mayors Part 1</h2>
				<video controls>
					<source
						src={CatMayorsPlaythroughP1}
						type="video/mp4"
					/>
				</video>
				<h2>Cat Mayors Part 2</h2>
				<video controls>
					<source
						src={CatMayorsPlaythroughP2}
						type="video/mp4"
					/>
				</video>
				<h2>Cat Mayors Part 3</h2>
				<video controls>
					<source
						src={CatMayorsPlaythroughP3}
						type="video/mp4"
					/>
				</video>
				<h2>Scarlet Salami Part 1</h2>
				<video controls>
					<source
						src={ScarletSalamiPlaythroughP1}
						type="video/mp4"
					/>
				</video>
				<h2>Scarlet Salami Part 2</h2>
				<video controls>
					<source
						src={ScarletSalamiPlaythroughP2}
						type="video/mp4"
					/>
				</video>
				<h2>Scarlet Salami Part 3</h2>
				<video controls>
					<source
						src={ScarletSalamiPlaythroughP3}
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}

	const router = createHashRouter([
		{
			path: "/",
			element: <Games />,
		},
		{
			path: '/playthroughs',
			element: <GameplayVideos /> ,
		},
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
        <a href="/#/playthroughs">
					Playthroughs	
        </a>
      </div>
			<RouterProvider router={router} />
    </div>
  )
}

export default App
