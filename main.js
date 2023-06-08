function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  };

  console.log(getTimeFromSeconds(1))

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      startClock();
    }

    if (element.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }

    if (element.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  })
};
relogio()