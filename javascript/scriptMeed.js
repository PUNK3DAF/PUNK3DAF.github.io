let r1=document.getElementById("c1");
r1.addEventListener("click", function(){
    alert("Med od lipe i Cvetni med.");
})

let r2=document.getElementById("c2");
r2.addEventListener("click", function(){
    alert("Med od žalfije i Bagremov med.");
})

let r3=document.getElementById("c3");
r3.addEventListener("click", function(){
    alert("Šumski med.");
})

let r4=document.getElementById("c4");
r4.addEventListener("click", function(){
    alert("Med od uljane repice.");
})

let r5=document.getElementById("c5");
r5.addEventListener("click", function(){
    alert("Suncokretov med.");
})

let r6=document.getElementById("c6");
r6.addEventListener("click", function(){
    alert("Med od amfore.");
})

let r7=document.getElementById("c7");
r7.addEventListener("click", function(){
    alert("Med od vreska.");
})
document.getElementById('dugme1').onclick = function(e){
    var forma=document.forms['forma']["kupac"].value;
    alert(forma + " hvala Vam na ukazanom poverenju!");
}


  document.getElementById('dugme2').onclick = function(e){
        window.location.reload();
    }
 
