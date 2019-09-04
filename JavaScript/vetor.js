        //Faça um script para alimentar um vetor com prompt. Depois exiba os dados informados pelo usuário.
                
        var vetor = new Array(5);

        for(var i = 0; i < vetor.length; i++) { 
          vetor[i] = prompt("Valor da posição["+i+"]:");
        }

        atualizaTela();

        //2inn fez fora da função
        function atualizaTela() {
          var vetorHTML = "<b>Dados do Vetor:</b><br><br>";
          
          for(var i = 0; i < vetor.length; i++) { 
            vetorHTML = vetorHTML + vetor[i] + "<br>";
          }

          var spanVetor = document.getElementById("exibeVetor");          
          spanVetor.innerHTML = vetorHTML;           
        }        


        function addPrimeiraPos() {
          var valor = document.getElementById("txtValor").value;           
          vetor.unshift(valor);
          atualizaTela();    
        }  

        function removePrimeiro() {
          vetor.shift();
          atualizaTela();
        }

        function addUltimaPos() {
          var valor = document.getElementById("txtValor").value;           
          vetor.push(valor);
          atualizaTela();    
        }  

        function removeUltimo() {
          vetor.pop();
          atualizaTela();
        }         