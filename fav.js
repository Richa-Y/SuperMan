var listHero = JSON.parse(window.localStorage.getItem("listHero"));
console.log(listHero, "listHero");
// document.querySelector(".load").classList.add("loader");

// var resetValue = 0;

// localStorage.setItem("listHero", resetValue);
showwInfo();
$(".back2").click(function () {
  window.location.href = "index.html";
});

function showwInfo() {
  // document.querySelector(".load").classList.add("loader");
  $(".high").empty();
  listHero.forEach(function (list) {
    var favId = list.id;
    let favUpdate = list.favourite;
    if (favUpdate == true) {
      document.querySelector(".load").classList.add("loader");
      showItem(favId);
    }
  });
}
function updateStorage() {
  window.localStorage.clear();
  window.localStorage.setItem("listHero", JSON.stringify(listHero));
}

function showItem(favId) {
  let link = "https://superheroapi.com/api.php/507493863748581/" + favId;
  console.log(link);

  $.get(link, function (data) {
    console.log(data.name);
    console.log(data.image.url);
    document.querySelector(".load").classList.remove("loader");
    $(".high").append(
      `<div class="row highlight mt-3"><div class="col-md-2"><img src=${data.image.url} width="100%"> </div>  <div class="col-md-5 mt-3">${data.name}

          <button type="button" class="btn btn-danger mx-3" onclick="deleteOne(event,${favId})">Delete</button> </div></div>`
    );
  });
  // document.querySelector(".load").classList.remove("loader");
}
function deleteOne(event, favId) {
  console.log(favId);
  listHero.forEach((element) => {
    if (element.id === favId) {
      console.log("id", element.id);
      console.log(favId);
      console.log(element.favourite);
      element.favourite = false;
    }
  });
  console.log(listHero);
  updateStorage();
  showwInfo();
}
