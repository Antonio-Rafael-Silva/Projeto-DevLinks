// Criar a função de toggle entre modo claro e modo escuro 
function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    html.classList.toggle('light') // Alterna entre claro e escuro

    // Condicional para alterar a imagem de perfil
    if (html.classList.contains('light')) {

        img.setAttribute('src', '/assets/avatar-light.png')
    } else {

        img.setAttribute('src', '/assets/avatar.png')

    }
}

