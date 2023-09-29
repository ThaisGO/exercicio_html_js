const form = document.getElementById('form-numero');

function validaNumeros(numero1, numero2) {
    return Number(numero1) < Number(numero2)
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroA = document.getElementById('numero_A');
    const numeroB = document.getElementById('numero_B');
    const containerMenssagem = document.querySelector('#submit-message');

    const msgSuccess = `O número <b>${numeroA.value}</b> é menor que o número <b>${numeroB.value}</b>, formulário válido`
    const msgError = `O primeiro número precisa ser maior que o segundo`
    
    const formValido = validaNumeros(numeroA.value, numeroB.value)

    if(formValido) {
        containerMenssagem.innerHTML = msgSuccess
        containerMenssagem.style.display = 'block';
        containerMenssagem.classList.remove('error');
        containerMenssagem.classList.add('success');
        
        numeroA.value = ''
        numeroB.value = ''
    } else {
        containerMenssagem.innerHTML = msgError
        containerMenssagem.style.display = 'block';
        containerMenssagem.classList.remove('success');
        containerMenssagem.classList.add('error');
        console.log('menssagem error');
    }
})