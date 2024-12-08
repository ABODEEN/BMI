

/*
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
        h2.style.color= "yellow" ;
    }else if(bmi2 <= 24.9){
        bmi = "وزن مثالي"
        h2.style.color= "green" ;
    }else if(bmi2 <= 29.9){
        bmi = "وزن زائد"
        h2.style.color= "yellow" ;
    }else if(bmi2 <= 34.9){
        bmi = "سمنة درجةأولى"
        h2.style.color= "orange" ;
    }else if(bmi2 <= 39.9){
        bmi = "سمنة درجة ثانية"
        h2.style.color= "red" ;
    }else if(bmi2 > 39.9){
        bmi = "سمنة خطيرة"
        h2.style.color= "rgb(0 , 0 139)" ;
    }else{
        bmi="numbers"
        bmi2="pleas write"
    }
    document.getElementById("shasha").innerHTML= bmi2
    document.getElementById("shasha2").innerHTML= bmi
z=h+w
console.log(z)
} )


*/


document.getElementById("send").addEventListener("click", function() {
      // الحصول على القيم المدخلة
      var w = document.getElementById("wzn").value;
      var h = document.getElementById("tol").value;
      
      // تحويل القيم إلى أرقام
      w = Number(w);
      h = Number(h);
      
      // تعديل الطول إذا كان أكبر من 10
      if (h > 10) {
          h /= 100;
      }
      
      // حساب مؤشر كتلة الجسم (BMI)
      var bmi = w / (h * h);
      
      // تحديد الفئة اللونية لمؤشر كتلة الجسم
      var category;
      var color;
      if (bmi < 18) {
          category = "نحيف";
          color = "yellow";
      } else if (bmi <= 24.9) {
          category = "وزن مثالي";
          color = "green";
      } else if (bmi <= 29.9) {
          category = "وزن زائد";
          color = "yellow";
      } else if (bmi <= 34.9) {
          category = "سمنة درجة أولى";
          color = "#22f5e3";
      } else if (bmi <= 39.9) {
          category = "سمنة درجة ثانية";
          color = "orange";
      } else {
          category = "سمنة خطيرة";
          color = "rgb(250, 0, 0)";
      }
      
      // عرض مؤشر كتلة الجسم والفئة الخاصة به
      document.getElementById("shasha").innerHTML = bmi.toFixed(2);
      document.getElementById("shasha2").innerHTML = category;
      
      // تغيير لون النص للفئة الخاصة بمؤشر كتلة الجسم
      document.getElementById("shasha2").style.color = color;
      
      // معلومات التصحيح (اختياري)
      console.log(h, w, bmi);
      var z = h + w;
      console.log(z);
  });
