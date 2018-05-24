/*******************************************************************
 * 
********************************************************************/
// Create the event.
var event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', function (e) {
  // e.target matches elem
}, false);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);

/*******************************************************************
 * 
********************************************************************/
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { //... }, false);

// Dispatch the event.
elem.dispatchEvent(event);