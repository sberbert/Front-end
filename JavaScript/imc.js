
    function verificarIMC() {
      var peso = document.getElementById("peso").value;
      var altura = document.getElementById("altura").value;
      var resultado = "";
      var color = "";
      var bk = "";

      if ((peso == "") || (altura == "")) {
        alert("Peso e altura são obrigatórios!");
      } else {          
        imc =  0;                     
        imc = peso/(altura * altura);       
          
        if (imc < 18.5) {
            resultado = "Abaixo do peso. IMC = " + imc;
            color = "yellow";
        } else if ((imc > 18.6) && (imc < 24.9)) {
            resultado ="Peso ideal. Parabéns. IMC = " + imc;
            color = "green";
        } else if ((imc > 25.0) && (imc < 29.9)) {
            resultado ="Levemente acima do peso. IMC = " + imc;
            color = "orange";
        } else if ((imc > 30.0) && (imc < 34.9)) {
            resultado ="Obesidade grau I. IMC = " + imc;
            color = "red";
        } else if ((imc > 35.0) && (imc < 39.0)) {
            resultado ="Obesidade grau II (Severa). IMC = " + imc;
            color = "red";
            bk = "yellow";
        } else {
           resultado ="Obesidade grau III (Mórbida). IMC = " + imc;
           color = "white";
           bk = "red";
        }
      }

      document.getElementById("resultado").innerHTML = 
      "<b>"+resultado+"</b>";

      /*document.getElementById("resultado").textContent = 
      resultado;      */

      document.getElementById("resultado").style.color = color;
      document.getElementById("resultado").style.backgroundColor = bk;
    }
