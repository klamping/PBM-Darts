TestCase("Game Functionality", {
    setUp:function () {
        this.gameData = {
            games : [
                [{
                    player: "Paul",
                    throws: [1234567,1234567,2234567]
                },
                {
                    player: "Kevin",
                    throws: [1234567,1234567,1234567]
                }],
                [{
                    player: "Paul",
                    throws: [1234567,1234567,1234567]
                },
                {
                    player: "Kevin",
                    throws: [1234567,1234567,2234567]
                }],

            ],
            hitValue: [15,16,17,18,19,20,25]
        };
        this.games = new Games(this.gameData);
    },
    "test that Game is an array": function () {
        assertArray("Game", this.games.games);
    },
    "test that Games is two long": function () {
        assertEquals("Number of games", "2", this.games.games.length);
    },
    "test that all games have winner property" : function () {
    "test that all games have winner property" : function () {
    "test that all games have winner property" : function () {
        // todo loop through the games
        assertNotUndefined("Game winner", this.games.games[0].winner);
    },
    "test that Game 1 winner is Kevin" : function () {
        assertEquals("Game winner", "Kevin", this.games.games[0].winner);
    },
    "test that Game 2 winner is Paul" : function () {
        assertEquals("Game winner", "Paul", this.games.games[1].winner);
    },
    "test that all games have loser property" : function () {
        // todo loop through the games
        assertNotUndefined("Game loser", this.games.games[0].loser);
    },
    "test that Game loser is Paul" : function () {
        assertEquals("Game loser", "Paul", this.games.games[0].loser);
    },
    "test that Game has players property":function () {
        assertNotUndefined("Game players", this.games.games[0].players);
    },
    "test that Game players is an array":function () {
        assertArray("Players", this.games.games[0].players);
    },
    "test that Game has two players":function () {
        assertEquals("Number of players", "2", this.games.games[0].players.length);
    },
    "test that name of player one of game one is Paul":function () {
        assertEquals("Name of game one player one", "Paul", this.games.games[0].players[0].name);
    }
});