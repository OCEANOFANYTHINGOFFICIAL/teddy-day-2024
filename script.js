setTimeout(function() {
    document.getElementById('teddy-button-to').addEventListener('click', function() {
        window.location.href = 'teddy-1/';
    });
}, 15000); // 15 seconds delay


const myPopup = new Popup({
    id: "popup-1",
    widthMultiplier: 1,
    title: "Secret Message !!!",
    content: `Click On The Teddy's belly After Reading The Letter To Get A Surprise 🥀`,
    backgroundColor: "hotpink",
    titleColor: "white",
    textColor: "white",
    borderRadius: "35px",
    borderColor: "white",
    borderWidth: "3px",
    font: "Roboto",
    css: `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`,
    showImmediately: true,
});