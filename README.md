# EventTrackerProject

#Overview

This Application is designed for gamers who want to get back into playing
the best-selling video game console of all time, The Playstation 2. This
tracker is capable of tracking the PS2 games the user wants to play. The
user has a list of PS2 games and can remove them from the list once they
have completed the game. The user can view the full list of games, add,
updated, and remove any game they desire in order to keep track of their
progress.

#How to run
This Application does not have a front end at the moment, but it can be run
as a spring boot application, and functions in Postman.

#REST API

| HTTP Method | Resource URI | Request Body | Returns |
|-------------|--------------|--------------|---------|
| GET         | `api/games` |              | List&lt;Game&gt;|
| GET         | `api/games/{id}` |              |Game|
|POST|`api/games`|New Game with all fields|new Game|
|PUT|`api/games/{id}`|Game with adjusted fields|||
|DELETE|`api/games/{id}`|||

#Goals
I would like to be able to expand this application and add more functions for example:
* maintain a list of games that have been completed
* cover art for each game and the option to add cover art to added games
* Clone of application or extension of application to include different gaming systems
* review/rating/comment
* group series/category/developer/etc
* Front end
