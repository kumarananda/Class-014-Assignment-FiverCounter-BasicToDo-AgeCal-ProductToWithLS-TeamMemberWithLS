

// 004 Product ToDo with LocalStorage Start


const productAddBox = document.querySelector('.productAddBox');
const add_new = document.getElementById('add_new');

const fromClose = document.getElementById('fromClose');
const pList = document.getElementById('pList');

const product = document.getElementById('product');




add_new.addEventListener('click', function (e) {
    productAddBox.style.display = 'block';
});

fromClose.addEventListener('click', function (e) {
    productAddBox.style.display = 'none';
});







product.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = this.querySelector('input[name="name"]').value;
    let rPrice = this.querySelector('input[name="rPrice"]').value;
    let sPrice = this.querySelector('input[name="sPrice"]').value;
    let photo = this.querySelector('input[name="photo"]').value;


    let product_arry;
    if(getItemFromLS('product')){
        product_arry = getItemFromLS('product')
    }else{
        product_arry = [];
    }

    product_arry.unshift({
        name : name,
        price : rPrice,
        sale : sPrice,
        photo : photo

    });
    // product_arry.push({
    //     name : name,
    //     price : rPrice,
    //     sale : sPrice,
    //     photo : photo

    // });
    
    sendDataToLS('product', product_arry);

    allProducts();




});


allProducts();

function allProducts() {
    
    let productLS = getItemFromLS('product'); 

    let data = '';

    productLS.map(pdata => {
        data += `
        <div class="col-lg-3 my-3">
            <div class="card ">
                <img class="card-img" src="${pdata.photo}" alt="">
                <div class="card-body">
                    <h3>${pdata.name}</h3>
                    <p>Regular Price 
                        <span class="regular_price"> ${pdata.price}</span>
                        <br>
                        Sale Price 
                        <span class="sale_price"> ${pdata.sale}</span>
                    </p>
        
                    <br>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
        `;
    })
    // console.log(data);
    pList.innerHTML = data;


}
// 004 Product ToDo with LocalStorage End
