$(".nav-search input").click(function () {
    var name = $(this).siblings().val()
    if (name == "手机") {
        window.location = "iPhone.html"
    } else if (name == "电视") {
        window.location = "tv.html"
    } else if (name == "笔记本") {
        window.location = "compute.html"
    } else if (name == "平板") {
        window.location = "ipad.html"
    } else if (name == "家电") {
        window.location = "home.html"
    }
})

$(".nav-search input[type=search]").keydown(function (event) {
    if (event.which === 13) {
        var name = $(this).val();
        if (name == "手机") {
            window.location = "iPhone.html";
        } else if (name == "电视") {
            window.location = "tv.html";
        } else if (name == "笔记本") {
            window.location = "compute.html";
        } else if (name == "平板") {
            window.location = "ipad.html";
        } else if (name == "家电") {
            window.location = "home.html";
        }
    }
});

$(window).scroll(function () {
    var top = $(window).scrollTop();
    console.log(top);
    if (top > 500) {
        $(".to-top").css("right", "50px")
        $(".to-top").click(function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        $(".to-top").css("right", "-100px")
    }
})

$(".clearfix a").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

var i = 0;
var checkboxSum = 0;
function validateForm() {
    if (i === 0) {
        var uid = $(".login-box #uid").val();
        var password = $(".login-box #password").val();
        var confirmPassword = $(".login-box #confirm-password").val();
        var agreement = $(".login-box .checkbox")[0];
        if (!agreement.checked) {
            alert("请勾选同意账号 用户协议 和 隐私政策");
            return false;
        }
        var storedUid = $.cookie("uid");
        var storedPassword = $.cookie("password");

        if (uid == storedUid && password == storedPassword) {
            alert("登录成功");
        } else if (uid != storedUid) {
            alert("该账号未注册,请注册账号")
            $(".signin-box").show()
            $(".login-box").hide()
            $(".login-content .login-content-item").css("height", "340px")
            i = i + 1;
            console.log(i)
            return false;
        } else {
            alert("账号或密码不正确");
            return false
        }
    } else {
        var uid = $(".signin-box #uid").val();
        var password = $(".signin-box #password").val();
        var confirmPassword = $(".signin-box #confirm-password").val();
    }

    if (uid === "") {
        alert("请输入账号");
        return false;
    }

    if (password === "") {
        alert("请输入密码");
        return false;
    }

    if (uid.length < 6) {
        alert("账号长度不能小于6位");
        return false;
    }

    if (password.length < 6) {
        alert("密码长度不能小于6位");
        return false;
    }

    if (i === 1) {
        if (password !== confirmPassword) {
            alert("确认密码与密码不一致");
            return false;
        }
    }

    return true;
}

function signIn() {
    if (i == 0) {
        $(".signin-box").show()
        $(".login-box").hide()
        $(".login-content .login-content-item").css("height", "340px")
        i = i + 1;
        console.log(i)
    } else if (i == 1) {
        $(".signin-box").hide()
        $(".login-box").show()
        $(".login-content .login-content-item").css("height", "300px")
        i = 0;
        console.log(i)
    }
}

function signInOK() {
    var isValid = validateForm();
    if (isValid) {
        alert("账号注册成功");

        var uid = $(".signin-box #uid").val()
        var password = $(".signin-box #password").val()

        console.log("uid:", uid);
        console.log("password:", password);
        $.cookie("uid", uid, { expires: 1, path: "/" });
        $.cookie("password", password, { expires: 1, path: "/" });
        $(".signin-box").hide();
        $(".login-box").show();
        $(".login-content .login-content-item").css("height", "300px");
    } else {
        alert("账号注册失败");
    }
}

function checkbox() {
    if (checkboxSum === 0) {
        $(".checkbox").attr("checked", true)
        checkboxSum = 1;
    } else {
        $(".checkbox").attr("checked", false)
        checkboxSum = 0;
    }
}

function color() {
    $(".color a").mouseenter(function () {
        var newSrc = $(this).children("img").attr("src");
        $(this).parents(".iphone-item").find(".iphone-img img").attr("src", newSrc);
    });
}

function login() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("id") === "2") {
        $(".signin-box").show()
        $(".login-box").hide()
        $(".login-content .login-content-item").css("height", "340px")
        i = i + 1;
    }
}

function index() {
    $(".phone").mousemove(function () {
        $(".min-banner").hide();
        $(".phone-box").css("display", "flex");
    })

    $(".tv").mousemove(function () {
        $(".min-banner").hide()
        $(".tv-box").css("width", "560px");
        $(".tv-box").css("display", "flex");
    })

    $(".compute").mousemove(function () {
        $(".min-banner").hide()
        $(".compute-box").css("width", "300px");
        $(".compute-box").css("display", "flex");
    })

    $(".ipad").mousemove(function () {
        $(".min-banner").hide()
        $(".ipad-box").css("width", "300px");
        $(".ipad-box").css("display", "flex");
    })

    $(".home").mousemove(function () {
        $(".min-banner").hide()
        $(".home-box").css("width", "300px");
        $(".home-box").css("display", "flex");
    })

    $(".top").mouseleave(function () {
        $(".min-banner").hide()
    })

    var bannerPost = 0;
    var intervalId;

    function startAutoCarousel() {
        intervalId = setInterval(function () {
            $(".switch-bot").click();
        }, 3000);
    }

    startAutoCarousel();

    function stopAutoCarousel() {
        clearInterval(intervalId);
    }

    $(".switch-top").click(function () {
        stopAutoCarousel();
        if (bannerPost < 0) bannerPost += 100;
        else if (bannerPost == 0) bannerPost = -300;
        $(".bannerList").css("left", "" + bannerPost + "%");
        console.log(bannerPost);
        startAutoCarousel();
    });

    $(".switch-bot").click(function () {
        stopAutoCarousel();
        if (bannerPost > -300) bannerPost -= 100;
        else if (bannerPost == -300) bannerPost = 0;
        $(".bannerList").css("left", "" + bannerPost + "%");
        console.log(bannerPost);
        startAutoCarousel();
    });
}

function cart() {
    var prices = $(".price").map(function () {
        return $(this).text().replace('元', '');
    }).get();

    var total = prices.reduce(function (sum, price) {
        return sum + parseFloat(price);
    }, 0);
    $(".sum").text("合计：" + total + "元")


    $(".del").click(function () {
        $(this).parent().remove();
        cart()
    })
}

function orderInfo() {
    setTimeout(function () {
        $(".active1").css("background", "#83C44E")
        setTimeout(function () {
            $(".active2").css("background", "#83C44E");
            setTimeout(function () {
                $(".active3").css("background", "#83C44E");
            }, 500)
        }, 500)
    }, 500)
}

function shopInfo() {
    var nameyes = $(".clearfix0 .active").text();
    if ($(nameyes != "")) {
        $(".name").text($(".clearfix0 .active").text())
    }

    $(".name").text($(".shopinfo .title").text())
    $(".size").text($(".clearfix1 .active").text())
    $(".colour").text($(".clearfix2 .active").text())

    $(".a1").click(function () {
        $(".img-box img").css("right", "0%")
    })
    $(".a2").click(function () {
        $(".img-box img").css("right", "100%")
    })
    $(".a3").click(function () {
        $(".img-box img").css("right", "200%")
    })
    $(".a4").click(function () {
        $(".img-box img").css("right", "300%")
    })
    $(".a5").click(function () {
        $(".img-box img").css("right", "400%")
    })

    $(".clearfix0 a").click(function () {
        $(".name").text(this.text)
    });

    $(".clearfix1 a").click(function () {
        $(".size").text(this.text)
    });

    $(".clearfix2 a").click(function () {
        $(".colour").text(this.text)
    });
    $(".addcart").click(function () {
        var cart = $(".name").text() + " " + $(".size").text() + " " + $(".colour").text()
        alert(cart + "  已加入购物车")
    })
}