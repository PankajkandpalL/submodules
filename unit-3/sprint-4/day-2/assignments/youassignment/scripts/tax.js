function tax(t){


    if(t<250000)
    {
        return "no tax will be charged"
    }
    if(t>=250000 && t<=500000)
    {
        let s = Math.floor((t*50)/100);
        let ten = Math.floor((t*10)/100);
        return "Tax to be paid: "+ ten + " and total savings are: "+ s;
    }
    if(t>500000 && t<=1000000)
    {
        let s = Math.floor((t*30)/100);
        let twenty = Math.floor((t*20)/100);
        return "Tax to be paid: "+twenty + " and total savings are: "+ s;
    }
    if(t>1000000)
    {
        let s = Math.floor((t*10)/100);
        let thirty = Math.floor((t*30)/100);
        return "Tax to be paid: "+thirty + " and total savings are: "+ s;
    }

}

export {tax}