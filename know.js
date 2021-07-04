var infoId = localStorage.getItem("myId");
document.querySelector(".load").classList.add("loader");
console.log(infoId);
console.log("bb");
var resetValue = 0;

showInfo();
localStorage.setItem("myValue", resetValue);
$(".back").click(function () {
  window.location.href = "index.html";
});
function showInfo(event) {
  let link = "https://superheroapi.com/api.php/507493863748581/" + infoId;
  console.log(link);

  $.get(link, function (data) {
    console.log(data.name);

    let bio = data.appearance;
    let power = data.powerstats;
    let biography = data.biography;
    let work = data.work;
    console.log(bio.relatives);
    document.querySelector(".load").classList.remove("loader");
    $(".addingData").append(
      //           (`  <div class="card col-md-5 offset-md-3">
      //               <img src=${data.image.url} class="card-img-top" alt="..." width="100%" height="300px" />

      //             <h5 class="card-title text-center mt-3"> <span class="blue">${data.name} </span></h5>
      //             <div class="card-body">

      //                 <h3 class="text-center">Appearance</h3>
      //                 <span class="bold"> Gender: </span> <span class="blue">${bio.gender}</span><br />
      //               <span class="bold">  Race:</span>  <span class="blue">${bio.race}</span> <br /> <span class="bold"> Height:</span>  <span class="blue">${bio.height}</span><br />
      //               <span class="bold">  Weight:</span>  <span class="blue"> ${bio.weight}</span><br />
      //                <span class="bold"> Eye-Color:</span>  <span class="blue">${bio["eye-color"]}</span> <br> <span class="bold"> Hair-Color:</span>  <span class="blue">${bio["hair-color"]}</span>
      //               </div>

      //             <div class="card-body">
      //               <h3 class="text-center">Powerstats</h3>
      //                 <span class="bold">  Intelligence:</span> <span class="blue">${power.intelligence}</span> <br />
      //                 <span class="bold">  Strength:</span> <span class="blue">${power.strength} </span><br /> <span class="bold"> Speed:</span> <span class="blue">${power.speed}</span><br />
      //                 <span class="bold">  Durability:</span> <span class="blue">${power.durability}</span><br />
      //                  <span class="bold"> Power:</span> <span class="blue">${power.power}</span> <br> <span class="bold"> Combat:</span> <span class="blue">${power.combat}</span>
      //               </div>

      //             <div class="card-body">
      //               <h3 class="text-center">Biography</h3>
      //  <span class="bold">Full-Name:</span>  <span class="blue">${biography["full-name"]}</span><br>
      //  <span class="bold">Alter-Egos:</span> <span class="blue">${biography["alter-egos"]}</span><br>
      //  <span class="bold">Aliases:</span>  <span class="blue">${biography.aliases}</span><br>
      //  <span class="bold">Place-Of-Birth:</span>  <span class="blue">${biography["place-of-birth"]}</span><br>

      //  <span class="bold">First-Appearance:</span>  <span class="blue">${biography["first-appearance"]}</span><br>
      //  <span class="bold">Publisher:</span> <span class="blue">${biography.publisher}</span><br>
      //  <span class="bold">Alignment:</span>  <span class="blue">${biography.alignment}</span>
      //  </div>

      //             <div class="card-body">
      //                <h3 class="text-center">Work</h3>
      //               <span class="bold">Occupation:</span>  <span class="blue">${work.occupation}</span><br>
      // <span class="bold">Base:</span> <span class="blue">${work.base}</span>

      //             </div>
      //           </div>`);

      `<div class="card " style="width: 29rem">
              <div class="row ">
                <div class="col-md-12">
                  <img src=${data.image.url} class="card-img-top" alt="..." height="300px" />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center"><span class="red">${data.name}</span></h5>
                </div>

                <div class="col-md-6">
                  <div class="card-body">
                    <h3>Appearance</h3>
                    <span class="bold"> Gender: </span> <span class="blue">${bio.gender}</span><br />
                  <span class="bold">  Race:</span>  <span class="blue">${bio.race}</span> <br /> <span class="bold"> Height:</span>  <span class="blue">${bio.height}</span><br />
                  <span class="bold">  Weight:</span>  <span class="blue"> ${bio.weight}</span><br />
                   <span class="bold"> Eye-Color:</span>  <span class="blue">${bio["eye-color"]}</span> <br> <span class="bold"> Hair-Color:</span>  <span class="blue">${bio["hair-color"]}</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h3>Powerstats</h3>
                    <span class="bold">  Intelligence:</span> <span class="blue">${power.intelligence}</span> <br />
                    <span class="bold">  Strength:</span> <span class="blue">${power.strength} </span><br /> <span class="bold"> Speed:</span> <span class="blue">${power.speed}</span><br />
                    <span class="bold">  Durability:</span> <span class="blue">${power.durability}</span><br />
                     <span class="bold"> Power:</span> <span class="blue">${power.power}</span> <br> <span class="bold"> Combat:</span> <span class="blue">${power.combat}</span>
                  </div>
                </div>

        <div class="col-md-6">
                  <div class="card-body">
                    <h3>Biography</h3>
     <span class="bold">Full-Name:</span>  <span class="blue">${biography["full-name"]}</span><br>
     <span class="bold">Alter-Egos:</span> <span class="blue">${biography["alter-egos"]}</span><br>
     <span class="bold">Aliases:</span>  <span class="blue">${biography.aliases}</span><br>
     <span class="bold">Place-Of-Birth:</span>  <span class="blue">${biography["place-of-birth"]}</span><br>

     <span class="bold">First-Appearance:</span>  <span class="blue">${biography["first-appearance"]}</span><br>
     <span class="bold">Publisher:</span> <span class="blue">${biography.publisher}</span><br>
     <span class="bold">Alignment:</span>  <span class="blue">${biography.alignment}</span>
     </div>
                </div>

      <div class="col-md-6">
                  <div class="card-body">
                    <h3>Work</h3> <br>
                  <span class="bold">Occupation:</span>  <span class="blue">${work.occupation}</span><br>
    <span class="bold">Base:</span> <span class="blue">${work.base}</span>

     </div>
                </div>

              </div>`
    );
  });
}
