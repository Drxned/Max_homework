var  znak;
var q=1;
var p=1;
var q1,p1,z1,z2,z3,z4,z5,z6;
var chek=true;
var chek1=true;
var oper=1,rez;
window.onload=function(){
q1=document.getElementById("q");
p1=document.getElementById("p");
z1=document.getElementById("z1");
z2=document.getElementById("z2");
z3=document.getElementById("z3");
z4=document.getElementById("z4");
z5=document.getElementById("z5");
z6=document.getElementById("z6");
znak=document.getElementById("znak");
rez=document.getElementById("rez");
z1.onclick=x1;
z2.onclick=x2;
z3.onclick=x3;
z4.onclick=x4;
z5.onclick=x5;
z6.onclick=x6;
q1.onclick=q2;
p1.onclick=p2;
rez.onclick=rez2;
}
function x1(){
znak.innerHTML="Заперечення"
oper=1;
}
function x2(){
    znak.innerHTML="Конюнкція"
    oper=2;
    }
    function x3(){
        znak.innerHTML="Дизюнкція"
        oper=3;
        }
        function x4(){
            znak.innerHTML="Альтернативне або"
            oper=4;
            }
            function x5(){
                znak.innerHTML="Імплікація"
                oper=5;
                }
                function x6(){
                    znak.innerHTML="Еквівалентність"
                    oper=6;
                    }
                    function rez2(){
                        if(oper==1&&q==1&&p==1){
document.getElementById("rez1").innerHTML="F F"

                        }
                        if(oper==1&&q==0&&p==1){
                            document.getElementById("rez1").innerHTML="F T"
                            
                            }
                                                    if(oper==1&&q==1&&p==0){
               document.getElementById("rez1").innerHTML="T F"
   }
                   if(oper==1&&q==0&&p==0){
document.getElementById("rez1").innerHTML="T T"}
       if(oper==1&&q==0&&p==0){
document.getElementById("rez1").innerHTML="T T"}
    if(oper==1&&q==0&&p==0){
document.getElementById("rez1").innerHTML="T T"}   
if(oper==2&&q==1&&p==1){
    document.getElementById("rez1").innerHTML="T"}    
    if(oper==2&&q==0&&p==1){
  document.getElementById("rez1").innerHTML="F"}
if(oper==2&&q==1&&p==0){
    document.getElementById("rez1").innerHTML="F"}
   if(oper==2&&q==0&&p==0){
  document.getElementById("rez1").innerHTML="F"}    
  if(oper==3&&q==1&&p==1){
    document.getElementById("rez1").innerHTML="T"}
    if(oper==3&&q==1&&p==0){
        document.getElementById("rez1").innerHTML="T"} 
        if(oper==3&&q==0&&p==1){
            document.getElementById("rez1").innerHTML="T"} 
            if(oper==3&&q==0&&p==0){
                document.getElementById("rez1").innerHTML="F"}                                                                             
                    
                    if(oper==4&&q==1&&p==1){
                        document.getElementById("rez1").innerHTML="F"} 
                        if(oper==4&&q==1&&p==0){
                            document.getElementById("rez1").innerHTML="T"} 
                            if(oper==4&&q==0&&p==1){
                                document.getElementById("rez1").innerHTML="T"} 
                                if(oper==4&&q==0&&p==0){
                                    document.getElementById("rez1").innerHTML="F"} 
                                    if(oper==5&&q==1&&p==1){
                                        document.getElementById("rez1").innerHTML="T"}
                                        if(oper==5&&q==0&&p==1){
                                            document.getElementById("rez1").innerHTML="F"} 
                                            if(oper==5&&q==1&&p==0){
                                                document.getElementById("rez1").innerHTML="T"} 
                                                if(oper==5&&q==0&&p==0){
                                                    document.getElementById("rez1").innerHTML="T"}
                                                    if(oper==6&&q==1&&p==1){
                                                        document.getElementById("rez1").innerHTML="T"}
                                                        if(oper==6&&q==0&&p==1){
                                                            document.getElementById("rez1").innerHTML="F"} 
                                                            if(oper==6&&q==1&&p==0){
                                                                document.getElementById("rez1").innerHTML="F"} 
                                                                if(oper==6&&q==0&&p==0){
                                                                    document.getElementById("rez1").innerHTML="T"}                                                                               
                            }

function q2(){

if(chek){
q1.innerHTML="F"
q=0;
}
if(!chek){
    q1.innerHTML="T"
    q=1;
    }
chek=!chek;
}
function p2(){
    
    if(chek1){
    p1.innerHTML="F"
    p=0;
    }
    if(!chek1){
        p1.innerHTML="T"
        p=1;
        }
    chek1=!chek1;
    }