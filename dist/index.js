import { concatination } from "./concatenation";
const button = document.querySelector("button");
const input_one = document.querySelector(".input_one");
const input_two = document.querySelector(".input_two");
if (button && input_one && input_two) {
    button.addEventListener("click", () => {
        concatination(input_one.value, input_two.value);
    });
}
//# sourceMappingURL=index.js.map