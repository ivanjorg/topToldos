const currentLocation = location.href;
const menuItems = document.querySelectorAll('.directionNav a');
const menuLength = menuItems.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].className = 'directionText current';
  }
}

// seleciona o formulário e o botão de enviar
const form = document.querySelector('form');
const submitBtn = form.querySelector('button[type="submit"]');

// adiciona um ouvinte de evento para o clique no botão de enviar
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // previne o comportamento padrão do botão de enviar

  // coleta os valores do formulário
  const name = form.querySelector('input[name="name"]').value;
  const surname = form.querySelector('input[name="surname"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const product = form.querySelector('select[name="product"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // monta a mensagem com os valores do formulário
  const whatsappMsg = `Olá, meu nome é: ${name} ${surname}.\n Meu email é: ${email}.\n Meu telefone é: ${phone}.\n Estou interessado(a) no produto: ${product}.\n Minha mensagem é: ${message}`;

  // abre o WhatsApp com a mensagem pré-preenchida
  window.open(`https://wa.me/94981135132/?text=${encodeURIComponent(whatsappMsg)}`);
});
