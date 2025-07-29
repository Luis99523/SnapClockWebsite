function changeTime(){
            let currentDate = new Date();
            let hours = currentDate.getHours().toString();
            let minutes = currentDate.getMinutes().toString();
            let seconds = currentDate.getSeconds().toString();

            if (hours.length == 1){
                "0".concat(hours);
            };
            if (minutes.length == 1){
                "0".concat(minutes);
            };
            if (seconds.length == 1){
                "0".concat(seconds);
            };
            
            let currentTime = hours.concat(":", minutes, ":", seconds)

            document.getElementById("currenttime").innerText = currentTime;
        }

setInterval(changeTime, 1000)