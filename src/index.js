module.exports = function toReadable(number) {
    const str = number.toString();

    const len = str.length - 1;
    // console.log(len);

    let result = "";

    const getOnce = (n) => {
        let res = "";
        if (n === "0") {
            res = "zero" + res;
        } else if (n === "1") {
            res = "one" + res;
        } else if (n === "2") {
            res = "two" + res;
        } else if (n === "3") {
            res = "three" + res;
        } else if (n === "4") {
            res = "four" + res;
        } else if (n === "5") {
            res = "five" + res;
        } else if (n === "6") {
            res = "six" + res;
        } else if (n === "7") {
            res = "seven" + res;
        } else if (n === "8") {
            res = "eight" + res;
        } else if (n === "9") {
            res = "nine" + res;
        }

        return res;
    };

    const getTen = (n) => {
        let res = "";
        if (n === "00") {
            res = "";
        } else if (n[0] === "0") {
            res = getOnce(n[1]);
        } else if (n === "10") {
            res = "ten" + res;
        } else if (n === "11") {
            res = "eleven" + res;
        } else if (n === "12") {
            res = "twelve" + res;
        } else if (n === "13") {
            res = "thirteen" + res;
        } else if (n === "14") {
            res = "fourteen" + res;
        } else if (n === "15") {
            res = "fifteen" + res;
        } else if (n === "16") {
            res = "sixteen" + res;
        } else if (n === "17") {
            res = "seventeen" + res;
        } else if (n === "18") {
            res = "eighteen" + res;
        } else if (n === "19") {
            res = "nineteen" + res;
        } else if (n === "20") {
            res = "twenty" + res;
        } else if (n[0] === "2") {
            res = "twenty " + getOnce(n[1]);
        } else if (n === "30") {
            res = "thirty" + res;
        } else if (n[0] === "3") {
            res = "thirty " + getOnce(n[1]);
        } else if (n === "40") {
            res = "forty" + res;
        } else if (n[0] === "4") {
            res = "forty " + getOnce(n[1]);
        } else if (n === "50") {
            res = "fifty" + res;
        } else if (n[0] === "5") {
            res = "fifty " + getOnce(n[1]);
        } else if (n === "60") {
            res = "sixty" + res;
        } else if (n[0] === "6") {
            res = "sixty " + getOnce(n[1]);
        } else if (n === "70") {
            res = "seventy" + res;
        } else if (n[0] === "7") {
            res = "seventy " + getOnce(n[1]);
        } else if (n === "80") {
            res = "eighty" + res;
        } else if (n[0] === "8") {
            res = "eighty " + getOnce(n[1]);
        } else if (n === "90") {
            res = "ninety" + res;
        } else if (n[0] === "9") {
            res = "ninety " + getOnce(n[1]);
        }

        return res;
    };

    if (len === 0) {
        result = getOnce(str);
    } else if (len === 1) {
        result = getTen(str);
    } else if (len === 2) {
        result = `${getOnce(str[0])} hundred${
            str.slice(1) === "00" ? "" : " "
        }${getTen(str.slice(1))}`;
    }

    // console.log(result);

    return result;
};

// console.log(toReadable(199));
