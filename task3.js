
// an input of "$#@" should be treated as "" and "a1b@c2d" must be equal to "abcd".
function autocomplete(str, matches){
    var filtered = str.match(/[a-z]/gi), result = [];

    if(filtered !== null && matches.length > 0) {
        filtered = filtered.join('').toLowerCase();
        matches.forEach(function (elem) {
            var i = elem.length;
            while(i > 0) {
                var substr = filtered.substring(0, i);
                if(elem.toLowerCase().indexOf(substr) === 0) {
                    result.push(elem);
                    return;
                }
                i--;
            }
        });
    }
    return result;
}

// should still return ['light','lime'] because 'lira' doesn't match anything neither 'lir', but 'li' does.
console.log(autocomplete('lira', ['light','lime','slime','ball']));
