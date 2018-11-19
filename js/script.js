$('.toolbar a').click(function () {
    var command = $(this).data('command');
    if(command== 'p' || command == 'h1' || command == 'h2' || command == 'h3' || command == 'h4' || command == 'h5' || command == 'h6') {
        document.execCommand('formatBlock', false, command);
    }
    if (command == 'createlink' || command == 'insertimage') {
        url = prompt('Enter the link here: ', 'http:\/\/');
        document.execCommand($(this).data('command'), false, url);
    } else document.execCommand($(this).data('command'), false, null);
});
$('#heading').click(function () {
    $('.hidethem').toggle();
    $('.hiddenheading').toggle();
});

$('#counter').on('input', function () {
    var text = this.textContent,
    count = text.trim().replace(/\s+/g, ' ').split(' ').length;
    $('#count').text(count);
})