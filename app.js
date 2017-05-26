$(() => {
  const $reset = $('#reset');
  const $box = $('.box');
  const $msg = $('#msg');
  const $1 = $('#box1');
  const $2 = $('#box2');
  const $3 = $('#box3');
  const $4 = $('#box4');
  const $5 = $('#box5');
  const $6 = $('#box6');
  const $7 = $('#box7');
  const $8 = $('#box8');
  const $9 = $('#box9');
  let player = 'X';
  let winner = null;

  $box.on('click', (e) => {
    if (winner) {
      $msg.html(player + ' already won.');
      return;
    }

    if (e.target.innerHTML !== '') return;
    $(e.target).html(player);
    checkWinner();
    if (winner) return;
    if (player === 'X') player = 'O';
    else player = 'X';
  });

  // check winner
  function checkWinner() {
    if (checkRow($1, $2, $3) ||
      checkRow($4, $5, $6) ||
      checkRow($7, $8, $9) ||
      checkRow($1, $4, $7) ||
      checkRow($2, $5, $8) ||
      checkRow($3, $6, $9) ||
      checkRow($1, $5, $9) ||
      checkRow($3, $5, $7)) {
      winner = player;
      $msg.html(player + ' wins.');
    }
  }

  function checkRow(a, b, c) {
    if (a.text() === player &&
      b.text() === player &&
      c.text() === player) {
      return true;
    }
    return false;
  }

  function reset() {
    $box.text('');
    winner = null;
    $msg.text('tic-tac-toe');
  }

  $reset.on('click', (e) => {
    e.preventDefault();
    reset();
  });
})