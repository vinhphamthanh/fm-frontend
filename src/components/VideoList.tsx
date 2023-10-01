
const VideoList = () => {
	return (
		<div className="d-flex flex-column col-12 py-4 col-md-10 col-lg-8 mx-auto">
			<div className="w-100 d-flex justify-content-between">
				<div className="col-6 border border-primary">
					<div id="trailer" className="video-share section embed-responsive embed-responsive-16by9">
  					<video className="embed-responsive-item" controls autoPlay loop muted>
        			<source src="https://player.vimeo.com/external/325698769.sd.mp4?s=4e70164190f4b472059c9f4ca74ca0ca58056ce4&profile_id=165" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
				<div className="d-flex flex-column col-6 border border-danger">
					<div className="text-danger fw-bold text-truncate">
						Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the
						Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living
						Dead Part 2
					</div>
					<div className="">
						Shared by: vinh.phamthanh@gmail.com
					</div>
					<div className="d-flex gap-3">
						<div className="d-flex align-items-center gap-1">
							<span>89</span><i className="i bi-hand-thumbs-up"></i>
						</div>
						<div className="d-flex align-items-center gap-1">
							<span>1</span><i className="i bi-hand-thumbs-down"></i>
						</div>
					</div>
					<p>Description:</p>
					<div className="w-100 h-50">
						<p className="fw-bold video-description">It would appear that no one at Netflix is willing to shape Ryan Murphy’s visions in the way they were at FX. The often brilliant TV creator, and one of the hardest working men in the business, has produced two series under his Netflix deal, the frustrating “The Politician,” and this week’s seven-part limited series that reimagines the Golden Age of Hollywood in a way that only Murphy could but no one seems to have asked if Murphy should. I’m a fan of Murphy’s unabashed theatricality and heartfelt compassion for outsiders, but this is the most disastrous project of his career, a limited series that not only fails dramatically but attempts a degree of social commentary that can only be called insulting.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoList
