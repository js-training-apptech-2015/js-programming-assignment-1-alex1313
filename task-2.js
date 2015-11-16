function solution2(a, b) {
    var maxXor = a;

    for (var i = a; i <= b; i++) {
        for (var j = i; j <= b; j++) {
            if ((i ^ j) > maxXor) {
                maxXor = i ^ j;
            }
        }
    }

    return maxXor;
}