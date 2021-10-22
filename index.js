var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");

card1.innerHTML = "&nbsp;";
card2.innerHTML = "&nbsp;";
card3.innerHTML = "&nbsp;";
card4.innerHTML = "&nbsp;";
card5.innerHTML = "&nbsp;";
card6.innerHTML = "&nbsp;";
card7.innerHTML = "&nbsp;";
card8.innerHTML = "&nbsp;";

let chosen = { element1: "", element2: "", firstCardID: "" };
let isElement1Defined = false;
let isElement2Defined = false;

let numArray = [1, 1, 2, 2, 3, 3, 4, 4];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let shuffledArray = shuffle(numArray);

function waitInSeconds(func, n) {
  setTimeout(func, n * 1000);
}

function checkIfSame(firstCardID, secondCardID) {
  let firstCard;
  let secondCard;
  if (firstCardID == "card1") {
    firstCard = card1;
  } else if (firstCardID == "card2") {
    firstCard = card2;
  } else if (firstCardID == "card3") {
    firstCard = card3;
  } else if (firstCardID == "card4") {
    firstCard = card4;
  } else if (firstCardID == "card5") {
    firstCard = card5;
  } else if (firstCardID == "card6") {
    firstCard = card6;
  } else if (firstCardID == "card7") {
    firstCard = card7;
  } else if (firstCardID == "card8") {
    firstCard = card8;
  }

  if (secondCardID == "card1") {
    secondCard = card1;
  } else if (secondCardID == "card2") {
    secondCard = card2;
  } else if (secondCardID == "card3") {
    secondCard = card3;
  } else if (secondCardID == "card4") {
    secondCard = card4;
  } else if (secondCardID == "card5") {
    secondCard = card5;
  } else if (secondCardID == "card6") {
    secondCard = card6;
  } else if (secondCardID == "card7") {
    secondCard = card7;
  } else if (secondCardID == "card8") {
    secondCard = card8;
  }

  if (firstCard.innerHTML == secondCard.innerHTML) {
    //do nothing
  } else {
    firstCard.innerHTML = "&nbsp;";
    secondCard.innerHTML = "&nbsp;";
  }
}

function onClick(e) {
  if (chosen["element1"] == "" && chosen["element2"] == "") {
    isElement1Defined = false;
    isElement2Defined = false;
  } else if (chosen["element1"] != "" && chosen["element2"] != "") {
    isElement1Defined = true;
    isElement2Defined = true;
    chosen["element1"] = "";
    chosen["element2"] = "";
    chosen["firstCardID"] = "";
    isElement1Defined = false;
    isElement2Defined = false;
  } else if (chosen["element1"] == "" && chosen["element2"] != "") {
    isElement1Defined = false;
    isElement2Defined = true;
  } else if (chosen["element1"] != "" && chosen["element2"] == "") {
    isElement1Defined = true;
    isElement2Defined = false;
  }

  if (e.target.id == "card1") {
    card1.innerHTML = shuffledArray[0];

    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[0];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[0];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card2") {
    card2.innerHTML = shuffledArray[1];

    if (isElement1Defined == false && isElement2Defined == false) {
      console.log("test");
      chosen["element1"] = shuffledArray[1];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[1];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card3") {
    card3.innerHTML = shuffledArray[2];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[2];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[2];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card4") {
    card4.innerHTML = shuffledArray[3];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[3];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[3];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card5") {
    card5.innerHTML = shuffledArray[4];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[4];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[4];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card6") {
    card6.innerHTML = shuffledArray[5];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[5];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[5];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card7") {
    card7.innerHTML = shuffledArray[6];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[6];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[6];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  } else if (e.target.id == "card8") {
    card8.innerHTML = shuffledArray[7];
    if (isElement1Defined == false && isElement2Defined == false) {
      chosen["element1"] = shuffledArray[7];
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined == true && isElement2Defined == false) {
      chosen["element2"] = shuffledArray[7];
      waitInSeconds(function () {
        checkIfSame(chosen.firstCardID, e.target.id);
      }, 1);
    }
  }

  waitInSeconds(function () {
    didWin(card1, card2, card3, card4, card5, card6, card7, card8);
  }, 1);
}

function didWin(card1, card2, card3, card4, card5, card6, card7, card8) {
  if (
    card1.innerHTML != "&nbsp;" &&
    card2.innerHTML != "&nbsp;" &&
    card3.innerHTML != "&nbsp;" &&
    card4.innerHTML != "&nbsp;" &&
    card5.innerHTML != "&nbsp;" &&
    card6.innerHTML != "&nbsp;" &&
    card7.innerHTML != "&nbsp;" &&
    card8.innerHTML != "&nbsp;"
  ) {
    alert("You won!");
  }
}

card1.addEventListener("click", onClick);
card2.addEventListener("click", onClick);
card3.addEventListener("click", onClick);
card4.addEventListener("click", onClick);
card5.addEventListener("click", onClick);
card6.addEventListener("click", onClick);
card7.addEventListener("click", onClick);
card8.addEventListener("click", onClick);
