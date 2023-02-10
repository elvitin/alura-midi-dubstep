(_ => {
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
  const timSong = document.querySelector('#som_tecla_tic');

  const stepsMilliseconds = [610, 500, 150, 150, 500, 600, 0].reverse();
  const sounds = [
    pomSong,
    pomSong,
    pshSong,
    pomSong,
    pomSong,
    pshSong,
    clapSong
  ].reverse();

  let playPause = false;
  const playButton = document.querySelector('.play');
  playButton.addEventListener('click', _ => {
    let beatStep = sounds.length - 1;
    function step() {
      setTimeout(_ => {
        sounds[beatStep].currentTime = 0;
        sounds[beatStep].play();
        beatStep--;
        if (!beatStep) beatStep = sounds.length - 1;
        if (playPause) step();
      }, stepsMilliseconds[beatStep]);
    }
    playPause = !playPause;
    if (playPause) step();
  });

  document.addEventListener('keypress', e => {
    console.log(e);

    if (e.code == 'KeyQ') {
      pomSong.currentTime = 0;
      pomSong.play();
      return;
    }

    if (e.code == 'KeyW') {
      clapSong.currentTime = 0;
      clapSong.play();
      return;
    }

    if (e.code == 'KeyZ') {
      pshSong.currentTime = 0;
      pshSong.play();
      return;
    }
  });
})();

/*
//musica - 2
const pomSong = document.querySelector('#som_tecla_pom');
const clapSong = document.querySelector('#som_tecla_clap');
const pshSong = document.querySelector('#som_tecla_psh');
const stepsMilliseconds = [
  200, 500, 150, 150, 500, 600, 120, 120, 120, 120
].reverse();
const sounds = [
  pomSong,
  pomSong,
  clapSong,
  pomSong,
  pomSong,
  clapSong,
  pshSong,
  pshSong,
  pshSong,
  pshSong
].reverse();

let playPause = false;
document.querySelector('.play').addEventListener('click', _ => {
  let beatStep = sounds.length - 1;
  function step() {
    setTimeout(_ => {
      sounds[beatStep].currentTime = 0;
      sounds[beatStep].play();
      beatStep--;
      if (!beatStep) beatStep = sounds.length - 1;
      if (playPause) step();
    }, stepsMilliseconds[beatStep]);
  }
  playPause = !playPause;
  if (playPause) step();
});
*/
