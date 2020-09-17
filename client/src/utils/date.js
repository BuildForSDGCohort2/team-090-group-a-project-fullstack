export const getChatTime = time => {
    const UTCString = getUTCString(time);
    return fetchTime(UTCString);
}

export const getGroupTime = time => {
    const now = new Date().getTime();
    const UTCString = getUTCString(time);
    const previous = UTCString.getTime();
    const difference = now -previous;
    const week_difference = difference / (7*24*60*60*10*10*10);
    const day_difference = difference / (24*60*60*10*10*10);
    const hour_difference = difference / (60*60*10*10*10);

    if(day_difference<1){
        if(hour_difference>12 && UTCString.getHours()>12) {
        return 'Yesterday';
        } else {
            return 'Today';
        }
    }

    if(day_difference>=1 && day_difference<2){
        return 'Yesterday';
    }

    if(week_difference<=1) {
        return fetchDay(UTCString);
    }
    return fetchDate(UTCString);
}



export const getLocalTime = time => {
    const now = new Date().getTime();
    const UTCString = getUTCString(time)
    const previous = UTCString.getTime();
    const difference = now -previous;
    const second_difference = difference / (10*10*10);
    const week_difference = difference / (7*24*60*60*10*10*10);
    const day_difference = difference / (24*60*60*10*10*10);

    if(second_difference<1){
        return 'Now';
    }

    if(day_difference<1){
        return `Today at ${fetchTime(UTCString)}`;
    }

    if(day_difference>=1 && day_difference<2){
        return `Yesterday at ${fetchTime(UTCString)}`;;
    }

    if(week_difference<=1) {
        return fetchDay(UTCString);
    }
    return fetchDate(UTCString);
}

const getUTCString = (time, replace) => {
    return replace ? new Date(time.replace(/ /g,"T")+'Z') : new Date(time);
}

const fetchTime = date => {
    let suffix = 'AM';
    let time ='';
    let hours = date.getHours();
    
    if(hours>=12){
        suffix = 'PM';
    }
    
    if(hours>12){
        hours = hours-12;
    }
    let append = '';
    const min = date.getMinutes();
    if(min<10){
    append='0';
    }
    time = hours+':'+append+''+min + ' ' + suffix;

    return time;
}

const fetchDay = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

const fetchDate = date => {
    const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    return date.getDate()+'/'+months[date.getMonth()]+'/'+date.getFullYear();
}