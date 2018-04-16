/*
This file contains a wrapper around the srcomp-http api.
*/

// Makes a GET request to the API

// Define an
var comp = function (){}

comp._api = function(address, callback, parameter){
  if(parameter === undefined){
    var url = apiURI + address;
  }else{
    var url = apiURI + address + "/" + parameter;
  }
  return $.getJSON(url,callback);
}


// Get an object containing the URLs for the various parts of the competition interface.
comp.index = function(callback){
  return comp._api('',callback);
}

// Get an object containing all arenas.
comp.arenas = function(callback){
  return comp._api('arenas',callback);
}

// Get information about an arena.
comp.arena = function(name, callback){
  return comp._api('arenas',callback,name);
}

// Get an object containing all teams.
comp.teams = function(callback){
  return comp._api('teams',callback);
}

// Get information about a team.
comp.team = function(tla, callback){
  return comp._api('teams',callback,tla);
}

// Get the team image.
comp.teamImage = function(tla, callback){
  // TODO: Remove hack
  return comp._api('teams/' + tla,callback,"image");
}

// Get an object containing all corners.
comp.corners = function(callback){
  return comp._api('corners',callback);
}

// Get information about a corner.
comp.corner = function(number, callback){
  return comp._api('corners',callback,number);
}

// Get information about parts of the competition state which change with the current time.
comp.current = function(callback){
  return comp._api('current',callback);
}

// Get the latest commit that the competition is working with.
comp.state = function(callback){
  return comp._api('state',callback);
}

// Get general information about the configuration of the competition and the host.
comp.config = function(callback){
  return comp._api('state',callback);
}

// Get information about the locations within the venue.
comp.locations = function(callback){
  return comp._api('locations',callback);
}

// Get information about the locations within the venue.
comp.location = function(name,callback){
  return comp._api('locations',callback,name);
}

// Get information about matches
comp.matches = function(callback){
  return comp._api('matches', callback);
}

//last_scored contains the highest match number which has a score assigned, but may be null if no scores have yet been entered.
comp.matchesLastScored = function(callback){
  return comp._api('matches/last_scores', callback);
}

// Get a list of match periods.
comp.periods = function(callback){
  return comp._api('periods',callback,name);
}

// Get a list of rounds which make up the knockouts.
comp.knockouts = function(callback){
  return comp._api('knockouts',callback);
}

// Get the tiebreaker match
comp.tiebreaker = function(callback){
  return comp._api('tiebreaker',callback);
}
