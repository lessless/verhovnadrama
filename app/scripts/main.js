/* jshint devel:true */
// countdown.setLabels(
//             'миллисекунда|секунда|минута|час|день|неделя|месяц|год|декада|century|millennium',
//             'миллисекунд|секунд|минут|часов|дней|недель|месев|года|декад|century|millennium');

(function() {
  function byId(id) {
    return document.getElementById(id);
  }

  function formatTens(n) {
    // format integers to have at least two digits
    return (n < 10) ? '0'+n : ''+n;
  }


  function update() {
    var units = countdown.YEARS |
                countdown.MONTHS |
                countdown.DAYS;
    var elapsed = countdown( new Date(2014, 12-1, 4), null, units );
    console.log(elapsed.months)
    document.getElementById('months').innerHTML = formatTens(elapsed.months);
    document.getElementById('days').innerHTML = formatTens(elapsed.days);
    // requestAnimationFrame(update);
  }
  update();
})();
