const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

async function getData() {
  try {
    let app = new App();

    await app.initApp();
    app.runApp();
  } catch (error) {
    console.log(error.message);
  }
}

async function getDataFirstLoad() {
  try {
    let app = new App();

    await app.initApp();
    app.runAppFirstLoad();
  } catch (error) {
    console.log(error.message);
  }
}

function activeDarkBackground() {
  document.getElementById("filter").style.width = "100%";
  document.getElementById("form-container").style.zIndex = "100";
}

function inactiveDarkBackground() {
  document.getElementById("filter").style.width = "0";
  document.getElementById("form-container").style.zIndex = "2";
}

document.getElementById("filter").addEventListener("click", () => {
  inactiveDarkBackground();
});

document.getElementById("form-container").addEventListener("click", () => {
  activeDarkBackground();
});

document.getElementById("btn-search-car").addEventListener("click", () => {
  getData();
});

document.getElementById("date").addEventListener("focus", () => {
  document.getElementById("img-placeholder").style.display = "none";
});

document.getElementById("date").addEventListener("blur", () => {
  document.getElementById("img-placeholder").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  getDataFirstLoad();
});
