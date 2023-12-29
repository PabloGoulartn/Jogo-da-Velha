function setupGame()
{
    const cells = document.querySelectorAll('div');
    let currentPlayer = 'X';
    
    function switchPlayer()
    {
        if (currentPlayer === 'X')
        {
            currentPlayer = 'O';
        }
        else
        {
            currentPlayer = 'X';
        }
                    
    }

    function checkWinner()
    {
        if (
            (cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) ||
            (cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) ||
            (cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) ||
            (cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) ||
            (cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) ||
            (cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) ||
            (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) ||
            (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer)
        ) {
            document.querySelector('.finish-game').textContent = 'Player ' + currentPlayer + ' venceu!';
            cells.forEach(cell => {
                cell.textContent = '';
            });
        }
        if (Array.from(cells).every(cell => cell.textContent !== ''))
        {
            document.querySelector('.finish-game').textContent = 'Empate!';
            cells.forEach(cell => {
                cell.textContent = '';
            });
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', function(event)
        {
            if(event.button === 0 && cell.textContent === '')
            {
                cell.textContent = currentPlayer;

                checkWinner();
                switchPlayer();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function()
{
    setupGame();
});