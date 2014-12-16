function unquote(tree) {
    if (tree.$quoted) {
        var unquoted = tree.map(function (n) {
            return Array.isArray(n) ? unquote(n) : n;
        });
        delete unquoted.$quoted;
        return unquoted;
    }
    else {
        var fn = tree[0];
        var args = tree.slice(1);

        if (fn.$macro) {
            return fn.apply(null, args);
        }
        else {
            return fn.apply(null, args.map(function (n) {
                return Array.isArray(n) ? unquote(n) : n;
            }));
        }
    }
}

function quote(tree) {
    var quoted = tree.map(function (n) {
        return Array.isArray(n) ? quote(n) : n;
    });

    quoted.$quoted = true;
    return quoted;
}

function macro(fn) {
    var wrapped = function () {
        var result = fn.apply(null, arguments);
        return Array.isArray(result) ? unquote(result) : result;
    };

    wrapped.$macro = true;
    return wrapped;
}



function $mt (a, b) {
    return a > b;
}

function $add (a, b) {
    return a + b;
}

function str() {
    return [].slice.call(arguments).join('');
}

function reduce(fn, list) {
    return list.reduce(fn);
}

var $if = macro(function (expr, t, f) {
    return unquote(expr) ? t : f;
});

var res = unquote(
    [$if, [$mt, 10, 20],
        'Uh, well this is awkward.',
        [str, 'EVERYTHING IS FINE, MOVE ALONG ', [reduce, $add, quote([1, 2, 3])]]]);

console.log(res);
