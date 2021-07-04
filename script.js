// "use strict";

var input = $(".input");

var dropdown = $(".dropdown-menu");

input.keyup(function (event) {
  if (input.val().length < 3) {
    $(".dropdown-menu").empty();

    dropdown.append(
      `<li class="mt-3 dropdown-item less-char">Type atleast 3 words</li>`
    );
  } else {
    document.querySelector(".loader2").classList.add("loader3");

    $(".dropdown-item").remove();
    searchApi();
  }
});

function searchApi() {
  let data = input.val();

  if (data.trim() != 0) {
    let url = "https://superheroapi.com/api.php/507493863748581/search/" + data;

    $.get(url, function (data) {
      $(".dropdown-menu").empty();
      if (data.results == null) {
        document.querySelector(".loader2").classList.remove("loader3");

        dropdown.append(
          `<li class="mt-3 dropdown-item less-char">No Record Found of this Data</li>`
        );
        return;
      }
      var message = data.results;

      $(".dropdown-menu").empty();

      for (let hero of message) {
        document.querySelector(".loader2").classList.remove("loader3");

        var flag = false;
        for (let item of listHero) {
          if (item.id == hero.id) {
            flag = true;
            break;
          }
        }
        if (flag === false) {
          dropdown.append(
            `<li class="mt-3 dropdown-item"><img src= ${hero.image.url} width="10%">
           <span class="inside mx-3">${hero.name}</span>
          <button type="button" id="${hero.id}" class="btn btn-primary addition" 
           onclick="addToHome(event,${hero.id})">Add To Home</button></li>`
          );
        } else {
          dropdown.append(
            `<li class="mt-3 dropdown-item"><img src= ${hero.image.url} width="10%">
           <span class="inside mx-3">${hero.name}</span>
          <button type="button" id="${hero.id}" class="btn btn-primary addition" 
           onclick="addToHome(event,${hero.id})">Remove From Home</button></li>`
          );
        }
      }
      return;
    });
  }
}

var test = $(".text");

var listHero = [];
function localStorageData() {
  if (window.localStorage.getItem("listHero")) {
    listHero = JSON.parse(window.localStorage.getItem("listHero"));

    renderHome();
  }
  // console.log(listHero);
}
localStorageData();

function addToHome(event, id) {
  event.preventDefault();

  // console.log("listH", listHero);

  // console.log("listHee", listHero);
  toggle(event, id);

  $(".active").remove();
}

function home(item) {
  console.log(listHero.length);

  let link = "https://superheroapi.com/api.php/507493863748581/" + item.id;
  console.log(link);
  $.get(link, function (data) {
    document.querySelector(".load").classList.remove("loader");
    test.append(`<div class="col-md-5 mt-3 mx-3">
          <div class="card">
            <img
              src=${data.image.url}
              class="card-img-top"
              alt="..."
              width="100%" height="290px"
            />
            <div class="card-body">
              <h5 class="card-title red">${data.name}</h5>
             
              <button type="button" class="btn danger mt-3 empty know" onclick="knowMore(${
                data.id
              })">Know More</button>
              <button type="button" class="btn danger mt-3 mx-3" onclick="deleteItem(${
                data.id
              })"> Delete  <i class="fas fa-trash"></i></button>
              <button type="button" 
               style="background-color:${
                 item.favourite ? "red" : "blue"
               }"  class="btn danger2 mt-3 favItem" onclick="favourites(event,${data.id})">
                ${item.favourite ? "UnFavourites" : "Favourites"}
              </button>
            </div>
          </div>
        </div>`);
  });
}
var clicked = true;
function toggle(event, id) {
  event.preventDefault();
  // console.log(JSON.stringify(listHero));
  const list = {
    id,
    favourite: false,
  };

  let filterList = listHero.filter(function (hero) {
    return hero.id != id;
  });
  // console.log("filterlist", JSON.stringify(filterList));
  let target = document.getElementById(id);

  if (listHero.length == filterList.length) {
    // console.log("new");
    target.innerHTML = "Remove from Home";
    listHero.push(list);
  } else {
    target.innerHTML = "Add To Home";
    listHero = filterList;
  }
  window.localStorage.setItem("listHero", JSON.stringify(listHero));
  // console.log(JSON.stringify(listHero));
  renderHome();
}

//   listHero.push(list);

//   window.localStorage.setItem("listHero", JSON.stringify(listHero));
//   renderHome();
// }

function deleteItem(id) {
  listHero = listHero.filter(function (list) {
    return list.id != id;
  });
  // if (listHero.length === 0) {
  //   console.log("length");
  //   document.querySelector(".load").classList.remove("loader");
  // }
  renderHome();
  updateStorage();
}
// function toggle(event, id) {
//   event.preventDefault();

//   console.log(id);
//   const object = {
//     id,
//     favourite: false,
//   };

//   let filterList = listHero.filter(function (hero) {
//     return hero.id != id;
//   });
//   console.log("filterlist", filterList);
//   console.log(listHero);
//   if (listHero.length == filterList.length) {
//     console.log("new");
//     document.querySelector(".addition").innerHTML = "Remove from Home";
//     listHero.push(object);
//   } else {
//     document.querySelector(".addition").innerHTML = "Add To Home";
//     listHero = filterList;
//   }
//   console.log(listHero);
//   renderHome();
// }

function renderHome() {
  $(".text").empty();
  document.querySelector(".load").classList.add("loader");
  if (listHero.length === 0) {
    console.log("length2");
    test.append(`<span class="mine"> Search For SuperHero !!!</span>`);
    // document.getElementById("mine").style.display = "block";

    document.querySelector(".load").classList.remove("loader");
  }
  for (let item of listHero) {
    home(item);
  }
}

// function searchApi() {
//   let data = input.val();
//   // console.log(data);
//   //   dropdown.innerHTML = "";

//   if (data.trim() != 0) {
//     let url = "https://superheroapi.com/api.php/507493863748581/search/" + data;
//     // console.log(url);

//     // $(".dropdown-item").remove();
//     $.get(url, function (data) {
//       $(".dropdown-menu").empty();
//       if (data.results == null) {
//         dropdown.append(
//           `<li class="mt-3 dropdown-item less-char">No Record Found</li>`
//         );
//         return;
//       }
//       var message = data.results;

//       $(".dropdown-menu").empty();
//       console.log("earch api", listHero);
//       for (let hero of message) {
//         var flag = false;
//         for (let item of listHero) {
//           if (item.id == hero.id) {
//             flag = true;
//             break;
//           }
//         }

//         if (listHero.length === 0 || flag === false) {
//           dropdown.append(
//             `<li class="mt-3 dropdown-item"><img src= ${hero.image.url} width="10%"> <span class="inside mx-3">${hero.name}</span><button type="button" class="btn btn-primary addition"  onclick="addToHome(event,${hero.id})">Add To Home</button></li>`
//           );
//         } else {
//           dropdown.append(
//             `<li class="mt-3 dropdown-item"><img src= ${hero.image.url} width="10%"> <span class="inside mx-3">${hero.name}</span><button type="button" class="btn btn-primary addition"  onclick="addToHome(event,${hero.id})">Remove from Home</button></li>`
//           );
//         }
//       }
//       return;
//     });
//   }
// }

// know more
function knowMore(id) {
  var sendId = id;
  console.log(id);

  localStorage.setItem("myId", sendId);

  window.location.href = "know.html";
}
// favourite next button
function favNext() {
  console.log("ss");
  console.log(listHero, "llll");

  window.localStorage.setItem("listHero", JSON.stringify(listHero));
  console.log("lilly", listHero);
  window.location.href = "fav.html";
}

function favourites(event, id) {
  listHero.forEach((element) => {
    if (element.id === id) {
      console.log("id");
      if (element.favourite === false) {
        element.favourite = true;
        event.target.innerHTML = "UnFavourite";

        event.target.style.backgroundColor = "red";
        event.target.style.color = "white";
      } else {
        event.target.innerHTML = "Favourite";
        event.target.style.backgroundColor = "blue";
        event.target.style.color = "white";

        element.favourite = false;
      }
      updateStorage();
    }
  });
}

// function favourites(id) {
//   console.log(listHero);
//   listHero.forEach((element) => {
//     if (element.id === id) {
//       console.log("id");
//       if (element.favourite === true) {
//         element.favourite = false;
//         var hero = document.getElementById(id);
//         hero.innerHTML = "UnFavourite";
//         hero.style.backgroundColor = "red";
//         hero.style.color = "white";
//       } else {
//         var hero = document.getElementById(id);
//         hero.innerHTML = "Favourite";
//         hero.style.backgroundColor = "blue";
//         hero.style.color = "white";

//         element.favourite = true;
//       }
//       updateStorage();
//     }
//   });
// }

function updateStorage() {
  window.localStorage.clear();
  window.localStorage.setItem("listHero", JSON.stringify(listHero));
}

// function favourites(id) {
//   console.log(listHero);
//   listHero.forEach((element) => {
//     if (element.id === id) {
//       console.log("id");
//       if (element.favourite === true) {
//         element.favourite = false;
//         var hero = document.getElementById(id);
//         hero.innerHTML = "UnFavourite";
//       } else {
//         var hero = document.getElementById(id);
//         hero.innerHTML = "Favourite";
//         element.favourite = true;
//       }
//     }
//   });
// }
// var obj1 = { id: 195, favourites: false };
// var obj2 = { id: 487, favourites: false };
// listHero.push(obj1);
// listHero.push(obj2);
// console.log(listHero);
// renderHome();
// var preloader = document.querySelector(".loader");
// function myFunction() {
//   preloader.classList.add("loader");
// preloader.style.display = block;
