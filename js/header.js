const burger = document.querySelector(".burger");

const drop_down = document.querySelector(".nav_links");

burger.addEventListener('click', () => {
    burger.classList.toggle("change_burger");
    drop_down.classList.toggle("drop_down");
});