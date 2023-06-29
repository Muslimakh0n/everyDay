// Bismillah

function giveRandomTime() {

    const randomYear = Math.floor((Math.random() * 50) + 1);
    const date = Math.floor((Math.random() * 31) + 1);
    const hour = Math.floor((Math.random() * 24) + 1);
    const mins = Math.floor((Math.random() * 60) + 1);
    const secs = Math.floor((Math.random() * 60) + 1);

    return [randomYear, date, hour,  mins,  secs];
    
}

function calculateYear(year) {
    return year - 1 < 0 ? 0 : year - 1;
}

function calculateDate(date) {
    return date - 1 < 0 ? 0 : date - 1;
}

function calculateHour(hour) {
    return hour - 1 < 0 ? 0 : hour - 1;
}


function calculateMins(mins) {
    return mins - 1 < 0 ? 0 : mins - 1;
}

function calculateSecs(secs) {
    return secs - 1 < 0 ? 0 : secs - 1;
}


let [year, date, hour, mins, secs] = [0, 1, 0, 1, 0];

function countDown() {

    const id = setInterval(function() {
       
        console.log(`We have left: ${year} years ${date} days ${hour} ${hour == 1 ? 'hour' : 'hours'} ${mins} minutes ${secs} seconds`);
       
        if(secs == 0) {
            mins = calculateYear(mins);
            secs = 60;
        }

        else if(mins == 0  && secs == 0) {
            hour = calculateYear(hour)
            mins = 60;
        }

        else if(hour == 0) {
            date = calculateDate(date);
            hour = 24;
        }

        else if(date == 0 ) {
            year = calculateYear(year);

            if(year == 0) {
                date = calculateDate(date)
            }
        }

        secs = calculateSecs(secs);

    }, 1000);

    if(!year && !date && !hour && !mins && !secs) {
        clearInterval(id);
    }
}

countDown()
