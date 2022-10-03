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

    }else if(bmi2 <= 24.9){
        bmi = "وزن مثالي"
    }else if(bmi2 <= 29.9){
        bmi = "وزن زائد"

    }else if(bmi2 <= 34.9){
        bmi = "سمنة درجةأولى"

    }else if(bmi2 <= 39.9){
        bmi = "سمنة درجة ثانية"

    }else if(bmi2 > 39.9){
        bmi = "سمنة خطيرة"

    }else{
        bmi="numbers"
        bmi2="pleas write"
    }

   
    document.getElementById("shasha").innerHTML= bmi2 
    document.getElementById("shasha2").innerHTML= bmi 
   
z=h+w
console.log(z)
} )