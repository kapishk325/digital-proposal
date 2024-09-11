document.getElementById('yesBtn').addEventListener('click', function () {
    window.location.href = "love.html";
});

let noClicks = 0;

document.getElementById('noBtn').addEventListener('click', function () {
    if (noClicks === 0) {
        alert("Are you sure? Please reconsider. 😢");
        noClicks++;
    } else {
        alert("Please, say yes... 😢");
        document.getElementById('noBtn').style.display = 'none';
    }
});
