const addContent = document.querySelector(".js-add-content");
const skill = document.querySelector(".stage__skill");

addContent.onclick = (e) => {
    e.preventDefault();
    skill.classList.toggle("stage__skill--show");
}



