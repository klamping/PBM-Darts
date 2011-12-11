var Darts = function () {
  var _calcScore = function (scores) {
    var score = 0,
    hits = scores.split('');

    score += hits[0] * 15;
    score += hits[1] * 16;
    score += hits[2] * 17;
    score += hits[3] * 18;
    score += hits[4] * 19;
    score += hits[4] * 20;
    score += hits[4] * 25;

    return score;
  };

  // Game History Populator
  var populateHistory = function (gameInfo) {
    var historyData = {
      p1Wins : 0,
      p2Wins : 0
    },
    gameJSON = {
      gameNumber : 0,
      p1Score : 0,
      p2Score : 0,
      p1Winner : '',
      p2Winner : ''
    },
    gameNodes = [],
    wins = [0,0],
    game = {};

    ich.grabTemplates();

    for (var i = 0, len = gameInfo.games.length; i < len; i++) {
      game = gameInfo.games[i];
      gameJSON.gameNumber = i + 1;
      gameJSON.p1Score = _calcScore(game[0]);
      gameJSON.p2Score = _calcScore(game[1]);

      if (gameJSON.p1Score > gameJSON.p2Score) {
        wins[0]++;
        gameJSON.p1Winner = ' winner';
      } else {
        wins[1]++;
        gameJSON.p2Winner = ' winner';
      }
      gameNodes.push(ich.gameResults(gameJSON));
    }

    return gameNodes;
  };

  var history = populateHistory(gameData);

  $('#history .content').prepend(history.shift(), history[0]);
}();