console.log("Planets: ", SolarSystem.getPlanets());

console.log("Planets w/ people: ", SolarSystem.setPlanetsLandedPeopleOn(1));
console.log("Planets w/ people: ", SolarSystem.getPlanetsLandedPeopleOn());

console.log("Adding Spaceships: ", SolarSystem.setSpaceships("blue spaceship"));
SolarSystem.setSpaceships("Voyager 1");
SolarSystem.setSpaceships("Voyager 2");
SolarSystem.setSpaceships("Gemini");
SolarSystem.setSpaceships("Apollo");
console.log("Getting Spaceships: ", SolarSystem.getSpaceships());

SolarSystem.wreckSpaceships();
console.log("Wrecked Planets: ", SolarSystem.getDwarfPlanets());

SolarSystem.setStars();
console.log("Setting Stars: ", SolarSystem.setStars());

// at the console, do the System Age ... 

console.log(SolarSystem);