

function setMenu(_menu) {
    var menus = document.querySelectorAll("nav li ");
    menus.forEach(function (menu) {
        menu.classList.remove('on');
    });
    document.querySelector("nav li." + _menu).classList.add("on");
    document.querySelector("main").className = _menu;
}

function setDescLength() {
    var descLengthSpan = document.querySelector("span.descLength");
    var descLengthInput = document.querySelector("input.description");
    descLengthSpan.innerHTML = + descLengthInput.value.length + "/20"
}

function showMyInfo() {
    document.querySelector("#myInfoId").innerHTML = my_info.id;
    document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
    document.querySelector("#ip-intro").value = my_info.introduction;
    document.querySelector("#sp-intro").innerHTML = my_info.introduction;
    document.querySelector("#myinfo input[type=radio][value= " + my_info.as + "]")
        .checked = true;
    document.querySelectorAll("#myinfo input[type=checkbox]")
        .forEach(function (checkbox) {
            checkbox.checked = false;
        });

    my_info.interest.forEach(function (interest) {
        document.querySelector("#myinfo input[type=checkbox][value=" + interest + "]").checked = true;
    });
}

function setEditMyInfo(on) {
    document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit"
    document.querySelectorAll("#myinfo input").forEach(function (input) {
        input.disabled = !on;
    })
    showMyInfo();
}


function updateMyInfo() {
    my_info.introduction = document.querySelector("#ip-intro").value;
    my_info.as = document.querySelector("#myinfo input[type=radio]:checked").value;
    var interests = [];
    document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checkbox) {
        interests.push(checkbox.value);
    });
    my_info.interest = interests;

    console.log(my_info);
    setEditMyInfo(false);
    showMyInfo();
}


function init() {
    showMyInfo();
}

