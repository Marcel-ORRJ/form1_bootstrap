$(document).ready(function() {
    $('#telefone').click(function() {
        $('#telefone').mask('(00) 000000000')
    })
    
    $('#telefone').blur(function() {
        let valTel = ($('#telefone').val().length < 14) ? '(00) 0000-0000' : '(00) 00000-0000'
        if (valTel != '') $('#telefone').mask(valTel)
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true,
                minlength: 13
            },
            aceitoTermos: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
        },
        submitHandler: function(form) {
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#aceito-termos').prop('checked', false)

            alert("Formulário enviado com sucesso")
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe(m) ${camposIncorretos} campo(s) inválido(s)`)
            }
        }
    })
})