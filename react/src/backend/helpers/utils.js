const utils = {
    replaceErrMsg: (params, string) => {
        var output = string;
        var length = params.length;
        if(length) {
            for(var i = 0; i < length; i++) {
                output = output.replace('{' + i + '}', params[i]);
            }
        }
        return output;
    },
    generateId: () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text;
    },
    getCurrentDate: (format) => {

        if(format === undefined) {
            format = 'YYYY-MM-DD';
        }
        var date = new Date();
        var month = JSON.stringify(month);

        var year = date.getFullYear();
        var month = date.getMonth() === 11 ? 12 : date.getMonth() + 1;
        month = JSON.stringify(month);
        month = month.length == 1 ? '0' + month : month;
        var day  = JSON.stringify(date.getDate());
        day = day.length == 1 ? '0' + day : day;

        var hour = JSON.stringify(date.getHours());
        hour = hour.length == 1 ? '0' + hour : hour;
        var minute = JSON.stringify(date.getMinutes());
        minute = minute.length == 1 ? '0' + minute : minute;
        var second = JSON.stringify(date.getSeconds());
        second = second.length == 1 ? '0' + second : second;

        format = format.replace('YYYY', year);
        format = format.replace('MM', month);
        format = format.replace('DD', day);
        format = format.replace('HH', hour);
        format = format.replace('II', minute);
        format = format.replace('SS', second); 
        return format
   
     },
}

export default utils;