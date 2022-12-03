
document.getElementById('btn-buyNow').addEventListener('click', function () {
    const penguinId = document.getElementById('penguin-id');
    const penguintext = penguinId.innerText;
    penguinId.innerText = 'I am The Penguin';
})