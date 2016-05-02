"use strict";




let listView = document.getElementById("list-view");
let moreBtn = document.getElementById("moreBtn");




let songs = [];
let songs2 = [];


function loadSongs () {
  let loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
    songs = JSON.parse(this.responseText).songs
    printSongs(songs);

  });
    loader.open("GET", "mh4.json");
    loader.send();
  };


function printSongs(songs){
  for (var i = 0; i < songs.length; i++) {
    let currSong = songs[i]
    let bigString = `<div><p>${currSong.name} by ${currSong.artist} on the album ${currSong.album} <input type="button" class="delete" value="Delete"></input></div>`
    
    listView.innerHTML += bigString;
    
    deleteSongs()
  }
};

function deleteSongs(){
  let deleteBtn = document.getElementsByClassName("delete");
  for (var i = 0; i < deleteBtn.length; i++) {
    let thisBtn = deleteBtn[i]

  thisBtn.addEventListener("click", function(){
    event.target.parentElement.remove();

    })
  }
};




// more.addEventListener("click", function loadSongs2 () {
  
  console.log("more", moreBtn);
moreBtn.addEventListener("click", function (){
  // let loader = new XMLHttpRequest();
  console.log("clicked it");
  // loader.addEventListener("load", function () {
  //   songs2 = JSON.parse(this.responseText).songs
  //   printSongs2(songs2);

  });
  //   loader.open("GET", "other.json");
  //   loader.send();
  // })

// function printSongs2 (songs2){

//   console.log("sngs",songs2);
//   for (var i = 0; i < songs2.length; i++) {
//     let currSong2 = songs2[i]
//     let bigString2 = `<div><p>${currSong2.name} by ${currSong2.artist} on the album ${currSong2.album} <input type="button" class="delete2" value="Delete"></input></div>`
// //     // Javascript(4)
// //       // let deleteBtn = document.getElementsByClassName("delete");

// //       // // jQuery
// //       // console.log(deleteBtn);
// //     // Javascript(4)
//     listview.innerHTML += bigString2;
    

// //     listView.append(bigString2)
// //     // listView.append(moreButton)
// //     deleteSongs2(i)
// //   }
// }

// // function deleteSongs2(i){
// //   let deleteBtn2 = $('.delete2');
// //   deleteBtn2[i].addEventListener("click", function(){
// //     event.target.parentElement.remove()
// //   })
// }


loadSongs();






// });
