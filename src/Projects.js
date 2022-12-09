import React from 'react';
import './Projects.css';


function Projects() {

  return (
    <div>

      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={require('./images/hambagu.png')} alt="WaveImage" id="hambaguImg" />
          <div className="card-body">
            <h5 className="card-title"><em>"HAMBAGU 2D Game"</em></h5> 
            <p className="card-text">Technologies:
             <br/> 
             HTML, CSS, and JS
            </p>
            <p className="card-text">The purpose of the game is to avoid collision detection by jumping over Burger Aliens approaching the player at random intervals. The goal is to beat your own personal record. Each Alien dodged will add +1 to player score.</p>
          </div>
          <div className="card-footer">
          <a href="https://github.com/nainoaktv/cyborg-game"  target="_blank" className="repolink">Github Repo</a>
          <a href="https://nainoaktv.github.io/cyborg-game/"  target="_blank" className="siteLink">Visit Site Here</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={require('./images/anitrack.png')} alt="WaveImage" id="anitrackImg" />
          <div className="card-body">
            <h5 className="card-title"><em>"aniTrack"</em></h5>
            <p className="card-text">Technologies: 
              <br/> 
              HTML | CSS | JS | EJS | Bootstrap | PostgreSQL | API
            </p>
            <p className="card-text">Users will need to create an account or log in to access the app. Search for an anime with the searchbar on the home screen and add an anime to your user profile's watchlist or click more info which redirects you to MyAnimeList.com for a synopsis. You can also remove anime from your watchlist or leave a comment.</p>
          </div>
          <div className="card-footer">
          <a href="https://github.com/nainoaktv/anime-tracker"  target="_blank" className="repolink">Github Repo</a>
          <a href="https://anitrack.herokuapp.com/"  target="_blank" className="siteLink">Visit Site Here</a>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={require('./images/comingsoon.jpeg')} alt="Coming Soon" id="comingSoonImg" />
          <div className="card-body">
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">This project is currently in progress.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Repo and Site link available soon...</small>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Projects;