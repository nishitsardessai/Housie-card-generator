var usedNum = new Array(91); 
window.onload = function newcard() 
{
    /*for(var i=0;i<27;i++)
    {
        var colPlace=new Array(0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8);
        newnum=colPlace[i]*10+Math.ceil(Math.random()*9);
	   document.getElementById("sq"+i).innerHTML = getNum(i);
    }*/
    
    
    for(var a=0;a<92;a++)
        usedNum[a]=0;
    
    
    for(var c=0;c<9;c++)
    {
        for( var i=c;i<27;i=i+9)
        {
            if(c==8)
            {
                do
                {
                    var n=c*10+Math.floor(Math.random()*11);
                }while(usedNum[n]==1);
                document.getElementById("sq"+i).innerHTML = n;
                usedNum[n]=1;
            }
            else if(c==0)
            {
                do
                {
                    var n=c*10+Math.ceil(Math.random()*9);
                }while(usedNum[n]==1);
                document.getElementById("sq"+i).innerHTML = n;
                usedNum[n]=1;
            }
            else
            {
                do
                {
                    var n=c*10+Math.floor(Math.random()*10);
                }while(usedNum[n]==1);
                document.getElementById("sq"+i).innerHTML = n;
                usedNum[n]=1;
            }
        }
    }
            
        
}