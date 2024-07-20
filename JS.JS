

document.getElementById("send").addEventListener("click",function(){



    var w = document.getElementById("wzn").value

    var h = document.getElementById("tol").value
    console.log(h,w,bmi2)
    w = Number(w)
    h = Number(h)
    if (h>10) {
        h/=100
    }
    var bmi = w/(h*h)
    var bmi2 = w/(h*h)

    if(bmi < 18){
        bmi = "نحيف"
        h2.style.color= yellow ;
    }else if(bmi2 <= 24.9){
        bmi = "وزن مثالي"
        h2.style.color= green; 
    }else if(bmi2 <= 29.9){
        bmi = "وزن زائد"
        h2.style.color= yellow;
    }else if(bmi2 <= 34.9){
        bmi = "سمنة درجةأولى"
        h2.style.color= orange;
    }else if(bmi2 <= 39.9){
        bmi = "سمنة درجة ثانية"
        h2.style.color= red ;
    }else if(bmi2 > 39.9){
        bmi = "سمنة خطيرة"
        h2.style.color= rgb(0 , 0 139);
    }else{
        bmi="numbers"
        bmi2="pleas write"
    }

   
    document.getElementById("shasha").innerHTML= bmi2 
    document.getElementById("shasha2").innerHTML= bmi 
   
z=h+w
console.log(z)
} )

