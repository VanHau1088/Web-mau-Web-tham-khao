const main = document.querySelector(".main");

function render_login() {
    main.innerHTML += `
    <div class="login-wrap">
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Đăng nhập</label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Đăng kí</label>
        <div class="login-form">
            <div class="sign-in-htm">
                <div class="group">
                    <label for="user" class="label">TÊN NGƯỜI DÙNG</label>
                    <input id="user" type="text" class="input" placeholder="Email">
                </div>
                <div class="group">
                    <label for="pass" class="label pass">Mật khẩu</label>
                    <input id="pass" type="password" class="input" data-type="password" placeholder="Password">
                </div>
                <div class="group">
                    <input id="check" type="checkbox" class="check" checked>
                    <label for="check"><span class="icon"></span> Ghi nhớ</label>
                </div>


                <div class="group">

                    <input type="submit" value="Đăng nhập" class="btn1">
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                    <a href="#forgot" class="forgotpassword ">Quên mật khẩu?</a>
                </div>
            </div>









            
            <div class="sign-up-htm ">
                <div class="group ">
                    <label for="user " class="label">TÊN NGƯỜI DÙNG</label>
                    <input id="user " type="text " class="input" placeholder="Name">
                </div>
                <div class="group ">
                    <label for="pass " class="label ">Mật khẩu</label>
                    <input id="pass " type="password " class="input " data-type="password " placeholder="Password">
                </div>
                <div class="group ">
                    <label for="pass " class="label ">Nhập lại mật khâir</label>
                    <input id="pass " type="password " class="input " data-type="password " placeholder="Repeat Password">
                </div>
                <div class="group ">
                    <label for="pass " class="label ">Địa chỉ Email</label>
                    <input id="pass " type="text " class="input" placeholder="Email">
                </div>
                <div class="group ">
                    <input type="submit" value="Đăng kí" class="btn2">
                </div>
                <div class="hr "></div>
                <div class="foot-lnk ">
                    <label for="tab-1 "> <a href="">Đã là thành viên?</a> </a>
                </div>
            </div>
        </div>
    </div>
</div>

    `;
}

render_login();