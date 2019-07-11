 document.addEventListener("DOMContentLoaded",function(){
     var nut = document.getElementsByClassName('deClick');
     var danhsach = document.getElementsByClassName('dehienthi');
    //  console.log(danhsach);
     
    
    for(var i=0;i<nut.length;i++)
    {
        nut[i].onclick = function(){
            if(this.classList[1]=="mautrang")
            {
                this.classList.remove("mautrang");
                var nd = this.getAttribute('data-thamso');
                phantuhienra = document.getElementById(nd);
                phantuhienra.classList.remove('ra');
                
            }
            else{
                for(k=0;k<nut.length;k++)
                {
                    if(k!=i)
                    {
                        nut[k].classList.remove('mautrang');
                    }
                   
                }
                this.classList.toggle('mautrang');
                
                var nd = this.getAttribute('data-thamso');
                phantuhienra = document.getElementById(nd);
                for (let j = 0; j < danhsach.length; j++) {
                        danhsach[j].classList.remove('ra');
                    
                }
                phantuhienra.classList.toggle('ra');

            }
            
           
            
        }
        

    }
    
     
 },false)
 