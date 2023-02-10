document.querySelectorAll('.teclado button').forEach(item => {
  const audio = document.querySelector(`#som_${item.classList[1]}`);
  item.addEventListener('click', _ => {
    audio.currentTime = 0;
    audio.play();
  });
});

const pomSong = document.querySelector('#som_tecla_pom');
const clapSong = document.querySelector('#som_tecla_clap');
const pshSong = document.querySelector('#som_tecla_psh');
const stepsMilliseconds = [200, 500, 150, 150, 500, 600, 120, 120, 120];
const sounds = [
  pomSong,
  pomSong,
  clapSong,
  pomSong,
  pomSong,
  clapSong,
  pshSong,
  pshSong,
  pshSong
];

document.querySelector('#play').addEventListener('click', _ => {
  let beatStep = 0;
  function step() {
    setTimeout(_ => {
      sounds[beatStep].currentTime = 0;
      sounds[beatStep].play();
      beatStep++;
      if (beatStep == stepsMilliseconds.length) beatStep = 0;

      step();
    }, stepsMilliseconds[beatStep]);
  }
  step();
});
