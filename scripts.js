function clicou(){

    var a = ['Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'Nullam tempus tincidunt elementum',
    'Vivamus rhoncus sagittis ipsum, non hendrerit', ];


     document.querySelector('h1').innerText = a[Math.floor((Math.random() * a.length))];

     


    
    // var a = document.querySelector("button");
    
}

function sendForm(){

    var texto = document.getElementById("mensagem");

    if (texto.value == ""){

        alert("preencha os campos!");
        
    }
    else{
      alert("enviado com sucesso!");  
      document.location.reload(true);
    }
    

}