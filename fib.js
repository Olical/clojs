[$if, [$mt, 10, 20],
    "Uh, well this is awkward.",
    [str, "EVERYTHING IS FINE, MOVE ALONG ", [reduce, $add, [1, 2, 3]]]]

(function () {
    if (10 > 20) {
        return "Uh, well this is awkward.";
    }
    else {
        return "EVERYTHING IS FINE, MOVE ALONG " + [1, 2, 3].reduce(function (a, b) {
            return a + b;
        });
    }
}());
