
var counter=0;

var elementList=[];

GetList();
Change_display(counter);




function Count_minus()
{
    counter--;
    if (counter<0)
    {
        counter=4;
    }
   
    Change_display(counter);
   
}
function Count_plus()
{
    counter++;
    if (counter > 4) {
        counter = 0;
    }
   
    Change_display(counter);   

}

function GetList()
{
    var tcol = "tcol";
    var t_tcol = "";
    for (var i = 0; i < 5; i++) {
        t_tcol = "." + tcol + (i + 2);
        elementList[i] = document.querySelectorAll(t_tcol);
    }
   
   
}

function Repearlist()
{
     for (var p = 0; p < 5; p++) {
        for (var s = 0; s < elementList[p].length; s++) {
            if (elementList[p][s].className="tcol" + (p + 2) + "_show")
            {
                elementList[p][s].className = "tcol" + (p + 2);
                
                if (s == 0) {
                    elementList[p][s].className += " " + "txt_uper_B"
                }
                else {
                    elementList[p][s].className += " " + "txt_uper_L"
                }

            }
        }
        
        
    }
  

}

function Change_display(counter)
{
   
    Repearlist();
   
    for (var k = 0; k < 5; k++) {
        if (k == counter)
        {
            for (var j = 0; j < elementList[k].length; j++)
            {
                elementList[k][j].className = "tcol" + (k + 2) + "_show";
                if (j == 0) {
                    elementList[k][j].className += " " + "txt_uper_B"
                }
                else {
                    elementList[k][j].className += " " + "txt_uper_L"
                }

            }

        }

    }
 
}
