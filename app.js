
/* 001 Order Counter Start  */
const fiver_order = document.getElementById('fiver_order');
const counter = document.querySelector('.counter');
const fOrder = document.querySelector('#fOrder');
const countCom = document.querySelector('.countCom')
// console.log(fOrder);

fiver_order.addEventListener('submit', function (e) {
    e.preventDefault();
    
    

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    let start_timeAbs = new Date();
    let end_timeAbs = new Date(date + " " + time);
    let time_diffAbs = end_timeAbs.getTime() - start_timeAbs.getTime() ;

    if( time_diffAbs < 0){
        // clearInterval();
        counter.innerHTML = `<p>Preivious date will not counted</p>`;
        counter.style="background-color: red;color: #fff;font-size: 16px;margin-top: 15px;padding:8px";
        countCom.innerHTML = ``;
    }else if(date == "" || time == "" ){
        // clearInterval();
        counter.innerHTML = `<p>Please Input Correct Date & Time</p>`;
        counter.style="background-color: red;color: #fff;font-size: 16px;margin-top: 15px;padding:8px";
        countCom.innerHTML = ``;
        
    }else{
        // counter.innerHTML = "";
        fOrder.style.pointerEvents = `none`; 
        
        let inte = setInterval(() => {
            let start_time = new Date();
            let end_time = new Date(date + " " + time);

            // let time_diff = Math.abs(end_time.getTime() - start_time.getTime()) ;
            let time_diff = end_time.getTime() - start_time.getTime() ;


            let seconds = Math.floor(time_diff/1000);
            let minutes = Math.floor(seconds/60); 
            let hours =Math.floor(minutes/60); 
            let days =Math.floor(hours/24); 

            let nethours = hours - (days * 24);
            let netminutes = minutes - (days * 24 * 60) - (nethours * 60);
            let netseconds = seconds - (days * 24 * 60 * 60) - (nethours * 60 * 60) - (netminutes * 60);
            
            counter.innerHTML = `
            <span id="day">${zero(days) + ':'} </span>
            <span id="hour">${zero(nethours) + ':'}</span>
            <span id="min">${zero(netminutes) + ':'} </span>
            <span id="sec">${zero(netseconds)}</span>
            `; 
            counter.style="background-color: green; color: #fff;";
            
            if(seconds < 1){
                clearInterval(inte);
                countCom.innerHTML = `<p>counter is compoit`;
                countCom.style="background-color: green;color: #fff;font-size: 16px;margin-top: 10px;";
                fOrder.style.pointerEvents = `inherit`; 
            }
            // console.log(time_diff );


        },1000);

    }

});
/* 001 Order Counter End  */

/* 002 Bsic ToDo Start  */

const do_form = document.getElementById('do_form');
const list_group = document.getElementById('list_group');
// console.log(do_form);
do_form.addEventListener('submit', function(e) {
    e.preventDefault();

    let do_name = this.querySelector('input[name="do-name"]').value;
    let opt = this.querySelector('select[name="opt"]').value;
    
    if(do_name == "" || opt == ""){
        alert('All fild are required');
    }else{
        let li = document.createElement('li');
        li.classList = "list-group-item";
        // li.classList = "doflex:";
        
        

        let closebtn = document.createElement('button');
        closebtn.innerHTML = "&times;";
        closebtn.classList = "close";

        let selectspan = document.createElement('span');
        selectspan.innerHTML = opt ;
        selectspan.style.marginLeft = '20px';

        let dotext = document.createTextNode(do_name);
        // let opttext = document.createTextNode(opt);

        li.appendChild(closebtn);
       
        li.insertBefore(dotext, closebtn);
        li.insertBefore(selectspan, closebtn);
        //dotext is inserted befor closebtn
        list_group.appendChild(li);

        this.querySelector('input[name="do-name"]').value = "";

        closebtn.addEventListener('click', function(){
            this.parentElement.remove();
        })
    }

    

    

    // console.log(list_group);

});
 /* 002 Bsic ToDo End  */

 
// 003 Product ToDo with LocalStorage Start
const add_new = document.getElementById('add_new');
const productAddBox = document.querySelector('.productAddBox');

const pList = document.getElementById('pList')

const endButton = document.getElementById('endButton');

const regular_price = document.querySelectorAll('.regular_price');
console.log(regular_price);


add_new.addEventListener('click', () => {
    productAddBox.style.display = "block"
});

endButton.addEventListener('click', () => {
    productAddBox.style.display = "none"
})

const products = [
    {
        name     : 'T-Shirt',
        price    : 121,
        sale     : 91,
        photo    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdXrdglpBZLxfb7ZlD6ThFr04uu0ZjPePSQ&usqp=CAU"
    },
    {
        name     : 'T-Shirt',
        price    : 122,
        sale     : "",
        photo    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdXrdglpBZLxfb7ZlD6ThFr04uu0ZjPePSQ&usqp=CAU"
    },
    {
        name     : 'T-Shirt',
        price    : 123,
        sale     : 93,
        photo    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdXrdglpBZLxfb7ZlD6ThFr04uu0ZjPePSQ&usqp=CAU"
    },
    {
        name     : 'T-Shirt',
        price    : 124,
        sale     : "",
        photo    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdXrdglpBZLxfb7ZlD6ThFr04uu0ZjPePSQ&usqp=CAU"
    }
];

let productData = JSON.stringify(product);
localStorage.setItem('product', productData);

datasend('product', products);
// send data to LS with function

let gotLSData = dataget('product');

gotLSData.map((data) => {
    // console.log(data.name);
    pList.innerHTML +=`

        <div class="col-md-3 my-3">
            <div class="card">
                <img class="card-image" src="${data.photo}">
                <div class="card-body">
                    <h3>${data.name}</h3>
                    <p><span class="regular_price">RegP- ${data.price}</span><span class="sale-price ml-3">SaleP- ${data.sale == "" ? data.price : data.sale}</span></p>

                    <br>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    
    `
});
// 003 Product ToDo with LocalStorage End