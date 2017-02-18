var SolarSystem = (function(){

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var numPlanetsPeopleLandedOn = 0;
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;

	return {
		getPlanets: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},
		getDwarfPlanets: function(){
			return "they are rejects";
		},
		setDwarfPlanets: function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars: function(){
			return stars;
		},
		setStars: function(){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge: function(){
			age++;
		},
	}

})();

// console.log("Planets: ", SolarSystem.getPlanets());

// console.log("Planets w/ people: ", SolarSystem.setPlanetsLandedPeopleOn(1));
// console.log("Planets w/ people: ", SolarSystem.getPlanetsLandedPeopleOn());

// console.log("Adding Spaceships: ", SolarSystem.setSpaceships("blue spaceship"));
// SolarSystem.setSpaceships("Voyager 1");
// SolarSystem.setSpaceships("Voyager 2");
// SolarSystem.setSpaceships("Gemini");
// SolarSystem.setSpaceships("Apollo");
// console.log("Getting Spaceships: ", SolarSystem.getSpaceships());

// SolarSystem.wreckSpaceships();
// console.log("Wrecked Planets: ", SolarSystem.getDwarfPlanets());

// SolarSystem.setStars();
// console.log("Setting Stars: ", SolarSystem.setStars());

// at the console, do the System Age ... 

console.log(SolarSystem);




