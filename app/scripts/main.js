(function() {
  'use strict';

  function formatTens(n) {
    // format integers to have at least two digits
    return (n < 10) ? '0'+n : ''+n;
  }

  function update() {
    var units = countdown.YEARS | countdown.MONTHS | countdown.DAYS; // jshint ignore:line
    var elapsed = countdown( new Date(2014, 12-1, 29, 17), null, units );

    document.getElementById('months').innerHTML = formatTens(elapsed.months);
    document.getElementById('days').innerHTML = formatTens(elapsed.days);
    // requestAnimationFrame(update);
  }
  update();
})();
