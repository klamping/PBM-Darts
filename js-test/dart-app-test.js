var gamesData = [
    [
        {
            "name" : "Paul",
            "rounds" : [
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 2
                    },
                    {
                        "value" : 17,
                        "hits" : 0
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    }
                ],
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 2
                    },
                    {
                        "value" : 17,
                        "hits" : 0
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    },
                    {
                        "value" : 19,
                        "hits" : 0
                    },
                    {
                        "value" : 20,
                        "hits" : 0
                    },
                    {
                        "value" : 25,
                        "hits" : 6,
                        "maxHits" : 6
                    }
                ]
            ]
        },
        {
            "name" : "Kevin",
            "rounds" : []
        }
    ],
    [
        {
            "name" : "Kevin",
            "rounds" : [
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 1
                    },
                    {
                        "value" : 17,
                        "hits" : 1
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    },
                    {
                        "value" : 19,
                        "hits" : 1
                    },
                    {
                        "value" : 20,
                        "hits" : 1
                    },
                    {
                        "value" : 25,
                        "hits" : 1,
                        "maxHits" : 6
                    }
                ],
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 0
                    },
                    {
                        "value" : 17,
                        "hits" : 0
                    },
                    {
                        "value" : 18,
                        "hits" : 0
                    },
                    {
                        "value" : 19,
                        "hits" : 0
                    },
                    {
                        "value" : 20,
                        "hits" : 0
                    },
                    {
                        "value" : 25,
                        "hits" : 0,
                        "maxHits" : 6
                    }
                ],
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 1
                    },
                    {
                        "value" : 17,
                        "hits" : 1
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    },
                    {
                        "value" : 19,
                        "hits" : 1
                    },
                    {
                        "value" : 20,
                        "hits" : 1
                    },
                    {
                        "value" : 25,
                        "hits" : 1,
                        "maxHits" : 6
                    }
                ]
            ]
        },
        {
            "name" : "Paul",
            "rounds" : [
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 1
                    },
                    {
                        "value" : 17,
                        "hits" : 1
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    },
                    {
                        "value" : 19,
                        "hits" : 1
                    },
                    {
                        "value" : 20,
                        "hits" : 1
                    },
                    {
                        "value" : 25,
                        "hits" : 1,
                        "maxHits" : 6
                    }
                ],
                [
                    {
                        "value" : 15,
                        "hits" : 1
                    },
                    {
                        "value" : 16,
                        "hits" : 0
                    },
                    {
                        "value" : 17,
                        "hits" : 0
                    },
                    {
                        "value" : 18,
                        "hits" : 0
                    },
                    {
                        "value" : 19,
                        "hits" : 0
                    },
                    {
                        "value" : 20,
                        "hits" : 0
                    },
                    {
                        "value" : 25,
                        "hits" : 0,
                        "maxHits" : 6
                    }
                ],
                [
                    {
                        "value" : 15,
                        "hits" : 0
                    },
                    {
                        "value" : 16,
                        "hits" : 1
                    },
                    {
                        "value" : 17,
                        "hits" : 1
                    },
                    {
                        "value" : 18,
                        "hits" : 1
                    },
                    {
                        "value" : 19,
                        "hits" : 1
                    },
                    {
                        "value" : 20,
                        "hits" : 1
                    },
                    {
                        "value" : 25,
                        "hits" : 1,
                        "maxHits" : 6
                    }
                ]
            ]
        }
    ],
    [
        {
            "name" : "Paul",
            "rounds" : []
        },
        {
            "name" : "Kevin",
            "rounds" : []
        }
    ]
];

/*
    Throw tests
        test amount for values 15, 19 and 25
        throw should return results of value multiplied by number of hits
        each throw should take a max number of hits and limit hits to that number
        each throw shouldn't take a number below 0
*/

TestCase("Throw Functionality", {
    "test score totals" : function () {
        var dartThrowOne = new Throw({"hits" : 3, "value" : 15});
        var dartThrowTwo = new Throw({"hits" : 1, "value" : 19});
        var dartThrowThree = new Throw({"hits" : 6, "value" : 25});
        assertEquals("Score One", 45, dartThrowOne.score);
        assertEquals("Score Two", 19, dartThrowTwo.score);
        assertEquals("Score Three", 150, dartThrowThree.score);
    },
    "test default max hits" : function () {
        var overThrow = new Throw({"hits" : 10, "value" : 15});
        var maxThrow = new Throw({"hits" : 9, "value" : 10});
        assertEquals("Max Score", 90, maxThrow.score);
        assertFalse(overThrow.score);
    },
    "test custom max hits" : function () {
        var overThrow = new Throw({"hits" : 7, "value" : 25, "maxHits" : 6});
        var maxThrow = new Throw({"hits" : 6, "value" : 10, "maxHits" : 6});
        assertEquals("Max Score", 60, maxThrow.score);
        assertFalse(overThrow.score);
    },
    "test min hits" : function () {
        var underThrow = new Throw({"hits" : -2, "value" : 15});
        var zeroThrow = new Throw({"hits" : 0, "value" : 15});
        assertEquals("Zero throw", 0, zeroThrow.score);
        assertFalse(underThrow.score);
    }
});

TestCase("Round Functionality", {
    setUp : function () {
        this.roundOne = new Round(gamesData[0][0].rounds[0]);
        this.roundTwo = new Round(gamesData[0][0].rounds[1]);
    },
    "test round total" : function () {
        assertEquals("Round total", 65, this.roundOne.total);
        assertEquals("Round total", 215, this.roundTwo.total);
    },
    "test round throws left" : function () {
        assertEquals("Round throws left", 3, this.roundOne.throwsLeft);
        assertEquals("Round throws left", 0, this.roundTwo.throwsLeft);
    }
});

TestCase("Player Functionality", {
    setUp: function () {
        this.playerOne = new Player(gamesData[0][0]);
        this.playerTwo = new Player(gamesData[2][1]);
    },
    "test player name" : function () {
        assertEquals("Player One Name", "Paul", this.playerOne.name);
        assertEquals("Player Two Name", "Kevin", this.playerTwo.name);
    },
    "test player totals" : function () {
        assertEquals("Player One Total", 280, this.playerOne.total);
        assertEquals("Player Two Total", 0, this.playerTwo.total);
    }
});

TestCase("Game Functionality", {
    setUp : function () {
        this.gameOne = new Game(gamesData[0]);
        this.gameTwo = new Game(gamesData[1]);
    },
    "test game leader" : function () {
        assertEquals("Game One Leader", "Paul", this.gameOne.standings[0]);
        assertEquals("Game Two Leader", "Kevin", this.gameTwo.standings[0]);
    },
    "test game follower" : function () {
        assertEquals("Game One Follower", "Kevin", this.gameOne.standings[1]);
        assertEquals("Game Two Follower", "Paul", this.gameTwo.standings[1]);
    },
    "test game in progress" : function () {
        assertTrue("Game One in Progress", this.gameOne.isInProgress);
        assertFalse("Game Two in Progress", this.gameTwo.isInProgress);
    }
});

TestCase("Games Functionality", {

});