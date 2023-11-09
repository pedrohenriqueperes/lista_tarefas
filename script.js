$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novoItem = $('<li>' + tarefa + '</li>');
        $('#lista-tarefas').append(novoItem);
        $('#tarefa').val('');

        
    })
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
})