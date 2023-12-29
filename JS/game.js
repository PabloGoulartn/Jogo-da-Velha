function GetCell()
{
    let cell = document.querySelectorAll('div');

    cell.forEach(element => {
        element.addEventListener('click', function()
        {
            element.style.backgroundColor = 'red';
            element.innerHTML = 'X';
        });
    });
}

GetCell();