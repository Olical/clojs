function walk(tree) {
    return tree[0].apply(null, tree.slice(1).map(function (n) {
        return Array.isArray(n) ? walk(n) : n;
    }));
}

// var res = walk(
//     [$if, [$mt, 10, 20],
//         "Uh, well this is awkward.",
//         [str, "EVERYTHING IS FINE, MOVE ALONG ", [reduce, $add, [1, 2, 3]]]]);

function $mt(a, b) { return a > b; }
function $eq(a, b) { return a === b; }
var res = walk([$eq, false, [$mt, 10, 20]]);

console.log(res);
