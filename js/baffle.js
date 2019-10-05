$(document).ready(function () {
    const text = baffle(".introduction");
    text.set({
        characters: '▓▓▓ ▒▓██▓ <>▒░▓ █▒█ ▒/█░░ ▒░▒█ ░░░ ▒░▒░ ░█▓█',
        speed: 100
    });
    text.start();
    text.reveal(1500);
});