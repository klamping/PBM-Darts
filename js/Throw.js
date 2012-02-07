var Throw = function (throwData) {
    var self = this,
        maxHits = throwData.maxHits ? throwData.maxHits : 9,
        outOfRange = (throwData.hits < 0) || (throwData.hits > maxHits);
    self.score = !outOfRange ? throwData.hits * throwData.value : false;
};