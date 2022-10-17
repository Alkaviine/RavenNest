const Skill = document.querySelectorAll(".skill");

for(let i = 0; i < Skill.length; i++){
	let desc = Skill[i].querySelector(".description");
	desc.style.bottom = desc.clientHeight + 70 + "px";
}