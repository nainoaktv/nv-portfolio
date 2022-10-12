import './Projects.css';


function Projects() {

  return (
    <div>

      <div className="card mb-3" style={{width: '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={require('./images/hambagu.png')} alt="WaveImage" id="hambaguImg" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">HAMBAGU</h5>
              <p className="card-text"><a href="https://github.com/nainoaktv/cyborg-game"  target="_blank" className="repolink">Github Repo</a></p>
              <p className="card-text"><a href="https://nainoaktv.github.io/cyborg-game/"  target="_blank" className="siteLink">Visit Site Here</a></p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{width: '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={require('./images/anitrack.png')} alt="WaveImage" id="anitrackImg" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">aniTrack</h5>
              <p className="card-text"><a href="https://github.com/nainoaktv/anime-tracker"  target="_blank" className="repolink">Github Repo</a></p>
              <p className="card-text"><a href="https://anitrack.herokuapp.com/"  target="_blank" className="siteLink">Visit Site Here</a></p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Projects;