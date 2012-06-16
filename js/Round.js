/*
 Round Data Example:
 [
     {
         "value" : 15,
         "hits" : 1
     },
     {
         "value" : 16,
         "hits" : 2
     }
 ]
 */

var Round = function (roundData) {
    var self = this;

    var getThrows = function (rd) {
        var throws = [],
            numThrows = rd.length;
        while(numThrows--) {
            throws.push(new Throw(rd[numThrows]));
        }
        return throws;
    };

    var getThrowsLeft = function (throws) {
        return 7 - throws.length;
    };

    var getTotal = function (throws) {
        var x = throws.length,
            total = 0;
        // loop through each throw
        while (x--) {
            total += throws[x].score;
        }
        return total;
    };

    self.throws = getThrows(roundData);
    self.throwsLeft = getThrowsLeft(self.throws);
    self.total = getTotal(self.throws);
};