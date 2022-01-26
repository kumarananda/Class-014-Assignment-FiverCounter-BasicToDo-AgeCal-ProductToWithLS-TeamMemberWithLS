

// 003 Age Calculator start



const ageSubmit = document.getElementById('ageSubmit');
const ageResult = document.getElementById('ageResult');

const ageInputMess = document.getElementById('ageInputMess')

const ageNamegg = document.getElementById('ageName');

ageNamegg.addEventListener('blur', () => {
    if(ageNamegg.value == ''){
        ageNamegg.style.border = '1px solid red';
    }else{
        ageNamegg.style.border = '';
    }
    
})

ageSubmit.addEventListener('submit', function (e) {
    e.preventDefault();

    const ageName = document.getElementById('ageName').value;
    const ageBirthDate = document.getElementById('ageBirthDate').value;
    const ageCurrentDate = document.getElementById('ageCurrentDate').value;

    console.log(ageName + " " + ageBirthDate + " " + ageCurrentDate);

    if(ageName == "" || ageBirthDate == "" || ageCurrentDate == ""){
        ageInputMess.innerHTML = `
        <span class="bg-warning text-white ">All data required</span>
        `;
        ageResult.innerHTML = `
        <div class="card-body  mt-5">
        <h2 class="card-title">Hay, Please input all data</h2>
        </div>
        
        `;
        // ageInputMess.classList = "bg-warning";
        

    }else{
        
        let ageBirth = new Date(ageBirthDate).getTime();
        let ageCalDate = new Date(ageCurrentDate).getTime();

        let ageTDiff =  ageCalDate - ageBirth ;

        let liMo = 30.4375; // per four year 1461 as par month's days value
        let fullseconds = Math.floor(ageTDiff / 1000); 
        let fullminutes = Math.floor(fullseconds / 60);  
        let fullhours = Math.floor(fullminutes / 60); 
        let fulldays = Math.floor(fullhours / 24); 
        let fullmonths = Math.floor(fulldays / liMo ); 
        let years = Math.floor(fullmonths / 12);  
        // year get net value after useing Math.abs

        let ageNetmonths = fullmonths - (years * 12) ;
        let ageNetdays = fulldays - (years * 12 * liMo) - (ageNetmonths * liMo);
        let ageNethours = fullhours - (years * 12 * liMo * 24) - (ageNetmonths * liMo * 24) - (ageNetdays * 24);
        let ageNetminutes = fullminutes - (years * 12 * liMo * 24 * 60) - (ageNetmonths * liMo * 24 * 60) - (ageNetdays * 24 * 60 ) - (ageNethours * 60);
        let ageNetseconds = fullseconds - (years * 12 * liMo * 24 * 60 * 60) - (ageNetmonths * liMo * 24 * 60 *60) - (ageNetdays * 24 * 60 * 60) - (ageNethours * 60 * 60) - (ageNetminutes * 60);

        // for month and days result
        let extmonthCal = Math.floor(  ((((ageTDiff / 1000)/ 60)/60)/24)/liMo  ); // 12
        let extDayCal = ((((ageTDiff / 1000)/60)/60)/24); //365
        let extdayforMonth = Math.floor( extDayCal - (extmonthCal * liMo)  ) ;

        // for weak and days result
        let extweakCal = Math.floor(  ((((ageTDiff / 1000)/ 60)/60)/24)/7   ) ; // 52
        let extdayforWeak = Math.floor( extDayCal - ( extweakCal * 7 )   );


        
        console.log(extdayforWeak);

        ageResult.innerHTML = `
            <div class="card-body bg-info">
            <h2 class="card-title">Hi ${ageName} Your Result on progress.....</h2>
            </div>
        `;

        let ageCalResult = setTimeout( () => {
            ageResult.innerHTML = `
            <div class="card-header bg-primary text-white">
            <h4 >Hi ${ageName}</h4>
            
            </div>
            <div class="card-body bg-success text-white">
                <span>Your Age Details is bellow</span>
                <h3 class="card-title">Your date of Birth is ${ageBirthDate}</h3>
                <span class="d-block mt-2">Age:</span>
                <span class="d-block mt-2">${years} years ${ageNetmonths} months ${Math.floor(ageNetdays)} days</span>
                <span class="d-block mt-2">or ${extmonthCal} months ${extdayforMonth} days</span>
                <span class="d-block mt-2">or ${extweakCal} weeks ${extdayforWeak} days</span>
                <span class="d-block mt-2">or ${fulldays} days</span>
                <span class="d-block mt-2">or ${fullhours} hours</span>
                <span class="d-block mt-2">or ${fullminutes} minutes</span>
                <span class="d-block mt-2">or ${fullseconds} seconds</span>
            </div>
            <div class="card-footer agewelMess bg-info text-white">
                <span>${ageName}, Thanks for using our App</span>
            </div>
            `;
            

        },2000);
        // ageName.value = "" ;
        // ageBirthDate.value = "" ;
        // ageCurrentDate.value = "" ;


        
    }

    
    // console.log(years + " " + ageNetmonths + " " + ageNetdays +
    //  " " + ageNethours + " " + ageNetminutes + " " + ageNetseconds );
    //  console.log(fullmonths);


    

});
// 003 Age Calculator End

