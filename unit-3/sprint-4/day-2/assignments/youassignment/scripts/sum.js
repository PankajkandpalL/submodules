function sum(a,b){
    return a+b;
}


function timetostr(ms){

    let n = 1000;

    if(ms==1000)
    {
        return "1 Second"
    }

    if(ms<1000)
    {
        let s = ms+" "+"milliseconds"
        return s; 
    }

    if(ms==1)
    {
        return ms+" "+"millisecond"
    }

    if(ms>1000 && ms<60000)
    {
        let s = Math.floor(ms/n)
        return s+" "+"seconds";
    }

    if(ms==60000)
    {
        let s = Math.floor(ms/n)
        let m = s/60;
        return m+" "+"Minute"
    }

    if(ms>60000 && ms<3600000)
    {
        let s = Math.floor(ms/n)
        let m = Math.floor(s/60);
        let sec = s%60;
        if(sec==0)
        {
            return m + " " + "minutes" + " " + sec +"0"+ " " + "second";    
        }
        else
        {
            return m + " " + "minutes" + " " + sec + " " + "seconds";
        }
    }

    if(ms>=3600000)
    {
        let s = Math.floor(ms/n)
        let m = Math.floor(s/60);
        let hr = Math.floor(m/60);

        let min = m%60;

        if(min==0)
        {
            return hr + " " + "Hours" + " " + min +"0"+ " " + "minutes";    
        }
        else if(hr==1)
        {
            return hr + " " + "Hour" + " " + min + " " + "minutes";    
        }
        else
        {
            return hr + " " + "Hour" + " " + min + " " + "minutes";
        }
    }
}


export {sum,timetostr}