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

    console.log(time_diffAbs);

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