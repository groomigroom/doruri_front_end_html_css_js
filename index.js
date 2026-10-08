const Menu_button = document.querySelector(".Menu_button");
const header_wrap = document.querySelector(".header_wrap");

Menu_button.addEventListener("click", () => {
    header_wrap.classList.toggle("on");
    if (Menu_button.classList.contains("off")) {
        Menu_button.classList.remove("off");
        Menu_button.classList.add("on");
    } else {
        Menu_button.classList.remove("on");
        Menu_button.classList.add("off");
    }
});
