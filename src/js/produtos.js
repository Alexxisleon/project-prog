// Você pode adicionar interatividade à sua página de produtos aqui.

// Vamos adicionar um evento de clique para cada produto para exibir um alerta com o nome.
document.addEventListener('DOMContentLoaded', function() {
  const productDivs = document.querySelectorAll('body > div');

  productDivs.forEach(div => {
    div.addEventListener('click', function() {
      const productName = this.querySelector('h2').textContent;
      alert(`Você clicou em: ${productName}`);
      // Aqui você pode adicionar mais lógica, como redirecionar para a página de detalhes.
    });
  });

  // Outro exemplo: Adicionar um efeito de "hover" nos produtos
  productDivs.forEach(div => {
    div.addEventListener('mouseover', function() {
      this.style.border = '2px solid #ccc';
    });

    div.addEventListener('mouseout', function() {
      this.style.border = 'none';
    });
  });

  console.log("Interatividade adicionada ao arquivo produtos.js!");
});