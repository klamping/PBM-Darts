TestCase('Function Assertion', {
    "test game": function() {
        assertFunction("Game should be a function", Game);
    },
    "test player": function() {
        assertFunction("Player should be a function", Player);
    },
    "test round": function() {
        assertFunction("Round should be a function", Round);
    },
    "test throw": function() {
        assertFunction("Throw should be a function", Throw);
    }
});

TestCase('Game Propterty Assertion', {
    "test players": function() {
        assertObject("game should have two players", Game);
    },
    "test player": function() {
        assertFunction("Player should be a function", Player);
    },
    "test round": function() {
        assertFunction("Round should be a function", Round);
    },
    "test throw": function() {
        assertFunction("Throw should be a function", Throw);
    }
});