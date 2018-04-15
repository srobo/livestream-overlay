/*
 This code listens to the SSE stream from srcomp-stream and
 calls functions to act on state updates.

 There is a settings.js file with the URI of the stream.
*/

if (!!window.EventSource) {
  var eventSource = new EventSource(streamServerURI);

  // Register events to the EventSource

  eventSource.addEventListener('ping',onPing, false);
  eventSource.addEventListener('open', onStreamOpen, false);
  eventSource.addEventListener('error', onStreamError, false);

  // Register functions to be overrided

  eventSource.addEventListener('team', function(e){
    if (typeof onTeamUpdate == 'function') {
        onTeamUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('last-scored-match', function(e){
    if (typeof onlastScoredMatchUpdate == 'function') {
        onlastScoredMatchUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('match', function(e){
    if (typeof onMatchUpdate == 'function') {
        onMatchUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('current-staging-matches', function(e){
    if (typeof onStagingUpdate == 'function') {
        onStagingUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('current-shepherding-matches', function(e){
    if (typeof onShepherdingUpdate == 'function') {
        onShepherdingUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('current-delay', function(e){
    if (typeof onDelayUpdate == 'function') {
        onDelayUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('knockouts', function(e){
    if (typeof onKnockoutsUpdate == 'function') {
        onKnockoutsUpdate(JSON.parse(e.data));
    }
  }, false);

  eventSource.addEventListener('tiebreaker', function(e){
    if (typeof onTiebreakerUpdate == 'function') {
        onTiebreakerUpdate(JSON.parse(e.data));
    }
  }, false);


} else {
  console.log("Unable to connect.");
}

// Functions that aren't overridable

function onPing(e){
  if (debug) console.log("ping");
}

function onStreamOpen(e){
  if (debug) console.log("Opened stream connection");
}

function onStreamError(e){
  if (e.readyState == EventSource.CLOSED) {
    if (debug) console.log("Stream connection closed");
  }
  else{
    console.log("An error occurred.");
    console.log(e);
  }
}
