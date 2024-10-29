const toggles = document.querySelectorAll(".toggle")
const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")

toggles.forEach(toggle => toggle.addEventListener("change", (e) => dothetrick(e.target)))

function dothetrick(clickedone) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedone) {
            fast.checked = false
        }
        if (fast === clickedone) {
            cheap.checked = false
        }
        if (cheap === clickedone) {
            good.checked = false
        }
    }
}