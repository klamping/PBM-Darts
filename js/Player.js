var Player = function (playerData) {
    var self = this;
    self.hasThrowsLeft = false;

    var getTotal = function (rnds) {
        var total = 0,
            numRnds = rnds.length;
        while(numRnds--){
            total += rnds[numRnds].total;
        }
        return total;
    };

    var getRounds = function (rnds){
        var rounds = [],
            numRnds = rnds.length,
            tmpRound;
        while(numRnds--) {
            tmpRound = new Round(rnds[numRnds]);
            if (!self.hasThrowsLeft && tmpRound.throwsLeft > 0) {
                self.hasThrowsLeft = true;
            }
            rounds.push(tmpRound);
        }
        return rounds;
    }

    self.rounds = getRounds(playerData.rounds);
    self.name = playerData.name;
    self.total = getTotal(self.rounds);
};