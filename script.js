const saudacao = document.getElementById('saudacao');
if (saudacao) {
  const hora = new Date().getHours();
  if (hora < 12) {
    saudacao.textContent = "Olá, Bom dia! 👋";
  } else if (hora < 18) {
    saudacao.textContent = "Olá, Boa tarde! 👋";
  } else {
    saudacao.textContent = "Olá, Boa noite! 👋";
  }
}

const btnTopo = document.getElementById('btn-topo');
if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const formulario = document.querySelector('.formulario');

if (formulario) {
  const mensagemEnviada = document.createElement('p');
  mensagemEnviada.textContent = "✅ Sua mensagem foi enviada com sucesso!";
  mensagemEnviada.style.color = "lightgreen";
  mensagemEnviada.style.marginTop = "10px";
  mensagemEnviada.style.display = "none";
  formulario.appendChild(mensagemEnviada);

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 
    mensagemEnviada.style.display = "block";
    formulario.reset(); 

    setTimeout(() => {
      mensagemEnviada.style.display = "none";
    }, 9000);
  });
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
