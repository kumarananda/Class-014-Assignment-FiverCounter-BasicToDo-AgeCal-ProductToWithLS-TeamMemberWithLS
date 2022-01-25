

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