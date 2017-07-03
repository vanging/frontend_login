function start()
{
    console.log('[ navbar ] 开始登录 ');
    window.luoc.navbar.login
    (
        {
            account:$("#login_account").val(),
            password:$("#login_password").val()
        }
    )
}

function events()
{
    document.body.addEventListener('navbar:login:ok',success);
    document.body.addEventListener('navbar:login:error',function(e)
    {
        console.log('登录出错');
        console.log(e);
    });
    document.body.addEventListener('navbar:login:args_not_valid',function(e)
    {
        console.log('登录出错');
        console.log(e);
    });
}

function success(e)
{
    console.log(e);
    $('#modal_for_login').modal('toggle');
    $("#username").text(e.message.email);
    $(".login-no").hide(0);
    $(".login-yes").show(0);
}

module.exports.start=start;
module.exports.events=events;
module.exports.success=success;