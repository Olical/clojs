Repository for my post: [A JavaScript / Clojure mashup](http://oli.me.uk/2014/12/15/a-javascript-clojure-mashup/).

The following Clojure and JavaScript examples are equivalent. Both data structures are executed in a similar fashion and with an identical result. Please read the post for more information.

```clojure
(if (> 10 20)
  "Uh, well this is awkward."
  (str "EVERYTHING IS FINE, MOVE ALONG " (reduce + [2 2 3])))
```

```javascript
[$if, [$mt, 10, 20],
    'Uh, well this is awkward.',
    [str, 'EVERYTHING IS FINE, MOVE ALONG ', [reduce, $add, quote([1, 2, 3])]]];
```

Obviously the missing functions (`$mt`, `str`, `reduce` and `$add`. `$mt` means "more than") and the `$if` macro (yes, it's a macro. It manipulates the tree) are defined in the JavaScript file.

This isn't exactly a library, just an experiment. I may well take it further one day though because I found it really interesting.
