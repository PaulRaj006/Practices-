
    const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let date = document.querySelector(".date")
    let day = document.querySelector(".day")
    let time = document.querySelector(".time")

    function dateUpdate(){
        const today = new Date();
        const date1 = today.getDate();
        const month = today.getMonth()+1;
        const year = today.getFullYear();

        date.textContent=date1 + "/" + month + "/" + year;
    }
    dateUpdate();

    function dayUpdate(){
        const today = new Date();
        const day1 = today.getDay();
        day.textContent = week[day1];
    }
    dayUpdate();

    function timeUpdate(){
        const today = new Date();

        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        let period = hour<12 ? "AM" : "PM" ;

        if(sec<10){
            sec="0" + sec;
        }
        if(min<10){
            min="0" + min;
        }
        if(hour == 0){
            hour = 12;
        }
        if(hour>12){
            hour = hour-12;
        }

        time.textContent=hour + ":" + min + ":" + sec + " " + period ;
    }
    timeUpdate();
    setInterval(()=>{
        dateUpdate();
        dayUpdate();
        timeUpdate();
    },1000)
