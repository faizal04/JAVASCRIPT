const counter = (function () {
    let count = 0;
    const upcount = function () {
        count++;
    }
    const deccount = function () {
        count--;
    }
    return {
        upcount,
        deccount,
        getcount() {
            return count;
        }
    }
})();
counter.upcount();
counter.upcount();
counter.upcount();
counter.deccount();


console.log(counter.count);

const count = counter.getcount();
console.log(count);

