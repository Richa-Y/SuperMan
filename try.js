var input = $(".input");
var btn = $(".btn");
var dropdown = $(".double");
var listHero = [];

// input.keypress(function (event) {
btn.click(function (event) {
  //   event.stopPropagation();
  searchApi();
});

function searchApi(event) {
  //   event.stopPropagation();
  let data = input.val();
  console.log(data);
  if (data.trim() != 0) {
    let message = data;

    dropdown.append(
      ` <div  class="mt-3"> ${message} <button type="button" class="btn btn-primary addition"  onclick="addToHome(event,'${message}')">Add To Home</button></div>`
    );
  }
}

function addToHome(event, data) {
  event.preventDefault();

  setting(event, data);
}

var flag = true;
function setting(event, data) {
  event.preventDefault();

  const list = {
    data,
    favourite: true,
  };

  listHero.push(list);
  renderHome();
}

function renderHome() {
  $(".text").empty();
  document.querySelector(".load").classList.add("loader");

  for (let item of listHero) {
    home(item);
  }
  console.log("adsad");
  // document.querySelector(".load").classList.remove("loader");
}

function home() {
  console.log("data 1");
}
