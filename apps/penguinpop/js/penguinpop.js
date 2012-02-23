// When we get an onload event for this main document we set the src
// property of the iframe to start loading the game. And we also
// start a CSS animation to fill the blackscreen time while the game loads.
window.addEventListener('load', function() {
  var gameframe = document.getElementById('gameframe');
  var splash = document.getElementById('splash');

  // Start a CSS animation
  splash.style.left = '180px';
  splash.addEventListener('transitionend', function(e) {
    if (e.propertyName === 'left') {
      splash.style.MozTransform = 'scale(4)';
      splash.style.opacity = 0;
    }
    else if (e.propertyName === '-moz-transform') {
      splash.parentNode.removeChild(splash);
    }
  });

  // Load the game.
  gameframe.src = 'http://goosypets.com/html5games/whac/';

  gameframe.onload = function() {
    // Make it opaque when loaded, hiding the splash icon
    gameframe.style.opacity = 1;
  };
});