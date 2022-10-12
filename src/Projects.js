import './Projects.css';


function Projects() {

  return (
    <div>
      <h1 className="projectsText">Projects</h1>
      <h2 className="projectsText">Hambagu</h2>
        {/* place image or preview of game here */}
        <p className="projectsText">github repo</p>
        <p className="projectsText">deployed link here</p>
        <p className="projectsText">Technology Used:</p>
        <p className="projectsText">information about hambagu</p>
        

      <h2 className="projectsText">aniTrack</h2>
        {/* image or preview of anitrack here */}
        <p className="projectsText">
          <a href="https://github.com/nainoaktv/anime-tracker"  target="_blank">Github Repo</a>
        </p>
        <p className="projectsText">deployed link here</p>
        <p className="projectsText">Technology Used:</p>
        <p className="projectsText">aniTrack is a website that allows users to search and store anime into a watchlist within their user profile. This helps with keeping track of all anime you are currently or plan on watching.</p>
        
    </div>
  )
}

export default Projects;