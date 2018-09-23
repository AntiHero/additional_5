module.exports = function check(str, bracketsConfig) {
    let configOpen = [];
    let configClose = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        configOpen[i] = bracketsConfig[i][0];
        configClose[i] = bracketsConfig[i][1];
    }

    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let index in configOpen) {
            if (arr[i] == configOpen[index]) {
                if (arr[i + 1] == configClose[index]) {
                    arr.splice(i, 2);
                    i = -1;
                    break;
                }
            }
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false
    }
}
