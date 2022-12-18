let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+[]{}\\|?/><";

let chars = [lowerCase, upperCase, numbers, symbols];
let passLength = document.getElementById("passLength");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let btncp = document.getElementById("btncp");
let checkBoxes = document.querySelectorAll('.setting input[type="checkbox"]');

/*
 **  Return Random Char From "str"
 */
const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

/*
 ** Randomize an Array
 */
function middleMix(str) {
	let currInd = str.length,
		randInd;
	while (currInd != 0) {
		randInd = Math.floor(Math.random() * currInd);
		currInd--;
		[str[currInd], str[randInd]] = [str[randInd], str[currInd]];
	}
	return str.join("");
}

function generatePass(hasLowerCase, hasUpperCase, hasNumbers, hasSymbols) {
	let password = "";

	let available = [];

	[hasLowerCase, hasUpperCase, hasNumbers, hasSymbols].forEach((e, i) => {
		if (e) available.push(chars[i]);
	});
	if (available.length == 0) return;
	for (let i = 0; i < passLength.value; i++)
		password += getRandomChar(available[i % available.length]);

	return middleMix(password.split(""));
}

/*
 **  Generate Button
 */
btn.addEventListener("click", () => {
	result.value =
		generatePass(
			checkBoxes[0].checked,
			checkBoxes[1].checked,
			checkBoxes[2].checked,
			checkBoxes[3].checked
		) || "";
});

/*
 **  Copy Button
 */
btncp.addEventListener("click", () => {
	if (result.value != "") {
		navigator.clipboard.writeText(result.value);
		result.classList.add("active");
		setTimeout(() => {
			result.classList.remove("active");
		}, 1500);
	}
});

/*
 **  input[type='range'] background size
 */
passLength.addEventListener("input", (e) => {
	let t = e.target;

	t.style.backgroundSize = `${
		((t.value - t.min) * 100) / (t.max - t.min)
	}% 100%`;
});

/*
 **  Disable checkbox
 **/
checkBoxes.forEach((el) => {
	el.addEventListener("change", () => {
		let ch = [checkBoxes[0], checkBoxes[1], checkBoxes[2], checkBoxes[3]].filter(
			(e) => e.checked
		);

		if (ch.length == 1) {
			ch[0].disabled = true;
		} else {
			checkBoxes.forEach((el) => {
				el.disabled = false;
			});
		}
	});
});
