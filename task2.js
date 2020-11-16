
// Add dashes only before and after each group of odd digits
function addDashes(num) {
    var splited = num.toString().split(''), nums = [];

    splited.forEach(function (elem, i) {
        var len = nums.length, lastElem = nums[len - 1];

        if (i === 0) {
            nums.push(elem);
            return;
        }

        if ((lastElem % 2) !== (elem % 2)) {
            nums.push(elem.toString());
        } else {
            nums[len - 1] = nums[len - 1].toString() + elem.toString();
        }

    });
    return nums.join('-');
}

console.log(addDashes(645545965)); // '64-55-4-59-6-5'
console.log(addDashes(411222333)); // '4-11-222-333'
console.log(addDashes(81229576231)); // '8-1-22-957-62-31'
