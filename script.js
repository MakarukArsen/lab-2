const inputA = document.getElementById("input-a");
const binaryA = document.getElementById("binary-a");

const inputB = document.getElementById("input-b");
const binaryB = document.getElementById("binary-b");

const andButton = document.getElementById("AND");
const orButton = document.getElementById("OR");
const xorButton = document.getElementById("XOR");
const decardButton = document.getElementById("decard");

const result = document.getElementById("result");

const UNIVERSAL_BINARY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const stringToArray = (str) => {
    return str.split(",").map((item) => +item);
};
const convertToBinary = (arr) => {
    const binary = UNIVERSAL_BINARY.map((item) => {
        if (arr.includes(item)) {
            return 1;
        } else return 0;
    });
    return binary;
};

const getAND = (arrA, arrB) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        const itemA = arrA[i];
        const itemB = arrB[i];

        if (itemA === itemB) {
            result.push(itemA);
        } else result.push(0);
    }
    return result;
};

const getOR = (arrA, arrB) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        const itemA = arrA[i];
        const itemB = arrB[i];

        if (itemA === 1 || itemB === 1) {
            result.push(1);
        } else result.push(0);
    }
    return result;
};

const getXOR = (arrA, arrB) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        const itemA = arrA[i];
        const itemB = arrB[i];

        if (itemA === itemB) {
            result.push(0);
        } else if (itemA === 1 || itemB === 1) {
            result.push(1);
        }
    }
    return result;
};

const getDecard = (arrA, arrB) => {
    const result = [];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            result.push([arrA[i], arrB[j]]);
        }
    }
    return result;
};

inputA.addEventListener("input", () => {
    const inputStringA = document.getElementById("input-a").value;
    binaryA.innerText = convertToBinary(stringToArray(inputStringA)).join(", ");
});
inputB.addEventListener("input", () => {
    const inputSTringB = document.getElementById("input-b").value;
    binaryB.innerText = convertToBinary(stringToArray(inputSTringB)).join(", ");
});

andButton.addEventListener("click", () => {
    const inputStringA = document.getElementById("input-a").value;
    const inputStringB = document.getElementById("input-b").value;

    const convertedToBinaryA = convertToBinary(stringToArray(inputStringA));
    const convertedToBinaryB = convertToBinary(stringToArray(inputStringB));

    result.innerHTML = "AND: " + getAND(convertedToBinaryA, convertedToBinaryB);
});

orButton.addEventListener("click", () => {
    const inputStringA = document.getElementById("input-a").value;
    const inputStringB = document.getElementById("input-b").value;

    const convertedToBinaryA = convertToBinary(stringToArray(inputStringA));
    const convertedToBinaryB = convertToBinary(stringToArray(inputStringB));

    result.innerHTML = "OR: " + getOR(convertedToBinaryA, convertedToBinaryB);
});

xorButton.addEventListener("click", () => {
    const inputStringA = document.getElementById("input-a").value;
    const inputStringB = document.getElementById("input-b").value;

    const convertedToBinaryA = convertToBinary(stringToArray(inputStringA));
    const convertedToBinaryB = convertToBinary(stringToArray(inputStringB));

    result.innerHTML = "XOR: " + getXOR(convertedToBinaryA, convertedToBinaryB);
});

decardButton.addEventListener("click", () => {
    const inputStringA = document.getElementById("input-a").value;
    const inputStringB = document.getElementById("input-b").value;

    const convertedToBinaryA = convertToBinary(stringToArray(inputStringA));
    const convertedToBinaryB = convertToBinary(stringToArray(inputStringB));

    result.innerHTML = "Декартовий добуток: " + getDecard(convertedToBinaryA, convertedToBinaryB);
});
