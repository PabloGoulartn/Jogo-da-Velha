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

    cells.forEach(cell => {
        cell.addEventListener('click', function(event)
        {
            if(event.button === 0 && cell.textContent === '')
            {
                cell.textContent = currentPlayer;

                switchPlayer();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function()
{
    setupGame();
});