$(document).ready(function() {
    $('#chatform').submit(function(event) {

        var msg = $('#message').val()
        $("#chatarea").load('../htbin/chatsend.py', {"msg":msg})
        


        $.ajax({ 
            type: 'GET', 
            url: '../htbin/chatget.py', 
            data: { get_param: 'value' }, 
            dataType: 'json',
            success: function (data) { 
                $.each(data, function(index, msginf) {
                    $('#chatarea').append('<p class="message">' + msginf.user + ' : ' + msginf.msg + '(' + msginf.date + ' - ' + msginf.time + ') </p>')
                })
            }
        })
        event.preventDefault()
    })

})

