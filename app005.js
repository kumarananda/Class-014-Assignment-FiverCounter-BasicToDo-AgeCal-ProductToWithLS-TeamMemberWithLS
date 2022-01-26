
// Team members
// Get elements
const devsform = document.getElementById('devsform');

const devesitems = document.getElementById('devesitems')




// Devs form submit
devsform.addEventListener('submit', function (e) {
     e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let f_links = this.querySelector('input[name="flinks"]');
    let t_links = this.querySelector('input[name="tlinks"]');
    let l_links = this.querySelector('input[name="llinks"]');
    let e_links = this.querySelector('input[name="elinks"]');
 

    let skill_arry = [];
    for(let i = 0; i < skill.length; i++){
        skill_arry.push(skill[i].value); 
    }

    let data_arry;
    if(getItemFromLS('devs')){
        data_arry=  getItemFromLS('devs')
    }else{
        data_arry = [];
    }
    data_arry.push({
        Name    : name.value,
        Gender  : gender.value,
        Skills   : skill_arry,
        Photo   : photo.value,
        Facebook: f_links.value,
        Twitter : t_links.value,
        Linkedin: l_links.value,
        Email   : e_links.value
    });


    sendDataToLS('devs', data_arry);

    allDevs();

});


allDevs();
function allDevs(){

    //provlems solved with support
    let all_devs;

    if( getItemFromLS('devs') ){
        all_devs = getItemFromLS('devs');
    }else{
        all_devs= [];
    }
    
    let data = '';
    all_devs.map(d => {

        let lists = '';
        d.Skills.map(list => {
            lists += `<li class="list-group-item">`+ list +`</li>`;
        } );

        data += `
        <div class="col-lg-4 my-2">
        <div class="card">
            <img style="width: 100%; height: 200px; object-fit: cover;" class="card-image" src="${d.Photo}" alt="">
            <div class="card-body devs-card">
                <h4>${d.Name}</h4>
                <p class="devs-gender">Gender: ${d.Gender}</p>
                <h6>Skills</h6>
                <ul class="list-group">
                ${lists}
                </ul>
                <span>
                    <ul class="team-so-ic">
                        <li><a href="${d.Facebook}" class="fa fa-facebook"></a></li>
                        <li><a href="${d.Twitter}" class="fa fa-twitter"></a></li>
                        <li><a href="${d.Linkedin}" class="fa fa-linkedin"></a></li>
                        <li><a href="${d.Email}" class="fa fa-envelope"></a></li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
        `
    });
    devesitems.innerHTML = data;
}
