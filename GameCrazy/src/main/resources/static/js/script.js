window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

  function init() {
    document.gameForm.lookup.addEventListener('click', function(event) {
      event.preventDefault();
      var gameId = document.gameForm.gameId.value;
      if (!isNaN(gameId) && gameId > 0) {
        console.log("Game id is: " + gameId);
        getGame(gameId);
      }
    });
    document.newGameForm.addGame.addEventListener('click', createGame);
  }

  function getGame(gameId) {
    console.log('getGame, gameId=' + gameId);
    // TODO:
    // * Use XMLHttpRequest to perform a GET request to "api/GAMEs/"
    //   with the GAMEId appended.
    let xhr = new XMLHttpRequest(); /// 0
    xhr.open('GET', 'api/games/' + gameId); /// 1
    xhr.onreadystatechange = function() {
      // console.log(xhr)
      if (xhr.readyState === 4) {
        if (xhr.status === 202) {
          // * On success, if a response was received parse the GAME data
          //   and pass the GAME object to displayGAME().
          let game = JSON.parse(xhr.responseText);
          console.log(game.title);
          displayGame(game);

        } else {
          console.error(`Game Id ${gameId} not found`);
          // * On failure, or if no response text was received, put "GAME not found"
          //   in the GAMEData div.
          displayError(`Game Id ${gameId} not found`)
        }
      }
    };
    xhr.send();
    /// 1
}

function changeForm(){
  let formName = document.getElementById('formName');
  formName.innerHTML = 'Add or Edit Game'
  // console.log(formName);

};

function displayError(msg) {
  var dataDiv = document.getElementById('gameData');
  dataDiv.textContent = '';
  // var actorDiv = document.getElementById('actorData');
  // actorDiv.textContent = '';
  let element = document.createElement('h3');
  element.textContent = msg;
  dataDiv.appendChild(element);
}

function displayGame(game) {
  var dataDiv = document.getElementById('gameData');
  dataDiv.textContent = '';
  let element = document.createElement('h1');
  element.textContent = game.title;
  dataDiv.appendChild(element);
  element = document.createElement('blockquote');
  element.textContent = game.description;
  dataDiv.appendChild(element);
  let ul = document.createElement('ul');
  dataDiv.appendChild(ul);
  let li = document.createElement('li');
  li.textContent = game.rating;
  ul.appendChild(li);
  li = document.createElement('li');
  li.textContent = game.releaseYear;
  ul.appendChild(li);
  changeForm();
  // TODO: call a getActors(GAME.id) function to use XHR, pass actors array to displayActors(actors)
  // getActors(game.id);
}

function createGame(evt) {
  evt.preventDefault();
  console.log('Creating Game');
  let form = document.newGameForm;
  let game = {
    rating: form.rating.value
  };
  game.title = form.title.value;
  game.description = form.description.value;
  game.releaseYear = form.releaseYear.value;
  postGame(game);
}
function postGame(game) {
  console.log('Posting game');
  console.log(game);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/games');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let newGame = JSON.parse(xhr.responseText);
        displayGame(newGame);
      } else {
        displayError('Error creating game: ' + xhr.status);
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(game));
}
function editGame(evt) {
  evt.preventDefault();
  console.log('Updating Game');
  let id = document.gameEditForm.gameId
  let form = document.gameEditForm;
  let game = {
    rating: form.rating.value
  };
  game.title = form.title.value;
  game.description = form.description.value;
  game.releaseYear = form.releaseYear.value;
  putGame(game);
}
function putGame(game) {
console.log('Replacing game');
console.log(game);
let xhr = new XMLHttpRequest();
xhr.open('PUT', 'api/games/' + gameId);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 201 || xhr.status === 200) {
      let editedGame = JSON.parse(xhr.responseText);
      displayGame(editedGame);
    } else {
      displayError('Error Replacing game: ' + xhr.status);
    }
  }
};
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(game));
}
function deleteGame(game){
  console.log('Deleting Game');
  console.log(game);
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'api/games/' + gameId);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let editedGame = JSON.parse(xhr.responseText);
        displayGame(editedGame);
      } else {
        displayError('Error Deleting game: ' + xhr.status);
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(game));
}
