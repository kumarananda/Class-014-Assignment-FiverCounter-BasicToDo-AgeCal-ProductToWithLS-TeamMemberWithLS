
/* 001 Order Counter Start  */
function zero(valeu) {
    return valeu < 10 ? '0'+ valeu : valeu;
}
/* 001 Order Counter End  */




// 003 Product ToDo with LocalStorage Start
// function zero(valeu) {
//     return valeu < 10 ? '0'+ valeu : valeu;
// };

/**
 * Data send to localstorage
 * @param {*} key 
 * @param {*} arr 
 */


function datasend(key , arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
    return true;
};

/**
 * gate data from localstorage
 * @param {*} key 
 * @returns 
 */
function dataget(key) {
    let data = localStorage.getItem(key);
    return JSON.parse(data)
}

function salePffun(){
    
}

// 003 Product ToDo with LocalStorage End