const main = document.getElementById('main')
main.addEventListener('submit',(e) => {
  e.preventDefault();

  let nome = document.getElementById('name').value; 

  let sobrenome = document.getElementById('sobrenome').value; 


  let email = document.getElementById('email').value;

  let telefone = document.getElementById('telefone').value; 

  let endereco = document.getElementById('endereco').value; 

  
 
  let usuario = {
    nome,
    sobrenome,
    email,
    telefone,
    endereco,
  }
  let convertData = JSON.stringify(usuario);

  localStorage.setItem("usuario_1", convertData);

  let carregando = ` <h1> carregado.... </h1>`
  let pronto = `<h1>Olá ${nome} fique à vontade para escolhe seu produto</h1>`

  form.innerHTML = carregando;
  setTimeout(() => {
    form.innerHTML= pronto;
  }, 2000)
return convertData;
})

const button = document.getElementById('btn')

button.addEventListener('click',(e) => {
  e.preventDefault();
 let vasoura = button.value;
 let data = new Date(); 
 let dia = String(' Dia:'+ data.getDate()).padStart(2,'0');
 let x = localStorage.getItem('usuario_1')
 localStorage.setItem('usuario_1', x + vasoura+ dia);
    
})

const button2 = document.getElementById('btn2')

button2.addEventListener('click',(e) => {
  e.preventDefault();

  let detergente = button2.value;
  let data = new Date(); 
  let dia = String(' Dia:'+ data.getDate()).padStart(2,'0');
  let x = localStorage.getItem('usuario_1')
  localStorage.setItem('usuario_1', x + detergente + dia);
})

const button3 = document.getElementById('btn3')

button3.addEventListener('click',(e) => {
  e.preventDefault();

  let esponja = button3.value;
  let data = new Date(); 
  let dia = String(' Dia:'+ data.getDate()).padStart(2,'0');
  let x = localStorage.getItem('usuario_1')
  localStorage.setItem('usuario_1', x + esponja + dia);
})



