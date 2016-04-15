var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start() {
  watch.start();
  toggleBtn.textContent = 'Pause';
  document.getElementById("toggle").style.backgroundColor = "#6699FF";
  document.getElementById("toggle").style.borderColor = "#6633FF";
}

function pause() {
  watch.pause();
  toggleBtn.textContent = 'Cont..';
  document.getElementById("toggle").style.backgroundColor = "#66CC66";
  document.getElementById("toggle").style.borderColor = "#33FF66";
}

toggleBtn.addEventListener('click', function() {
  (watch.isOn) ? pause() : start();
});

resetBtn.addEventListener('click', function() {
  if (!watch.isOn) {
    watch.reset();
  }
});
