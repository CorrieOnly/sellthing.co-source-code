/* Input Copy Function - Start */


var copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg>';

function mailCopy() {
    var copyText = document.getElementById("email");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $('#copyMail').animate({width: "80.56px"}, "fast",function(){
        $(this).text('Copied');
    });
    setTimeout(function () {
        $('#copyMail').animate({width: "50px"}, "fast",function(){
            $(this).html(copyIcon);
        });
    }, 2000);
}

function passCopy() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $('#copyPass').animate({width: "80.56px"}, "fast",function(){
        $(this).text('Copied');
    });
    setTimeout(function () {
        $('#copyPass').animate({width: "50px"}, "fast",function(){
            $(this).html(copyIcon);
        });
    }, 2000);
}

/* $('body').on('copy',function(e) {
    if(e.target.id == "email" || e.target.id == "password"){   
    }else{
        e.preventDefault();
        return false;
    }
    
}); */
/* Input Copy Function - End */

function proxyCopy() {
    var copyText = document.getElementById("resultProxy");
    copyText.select();
    copyText.setSelectionRange(0, 999999)
    document.execCommand("copy");
    $('#copyProxi').animate("fast",function(){
        $(this).text('Copied');
    });
    setTimeout(function () {
        $('#copyProxi').animate("fast",function(){
            $(this).text('Copy');
        });
    }, 2000);
}

function copyInput(input, copyId) {
    var copyText = document.getElementById(input);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $(copyId).animate({width: "80.56px"}, "fast",function(){
        $(this).text('Copied');
    });
    setTimeout(function () {
        $(copyId).animate({width: "50px"}, "fast",function(){
            $(this).html(copyIcon);
        });
    }, 2000);
}