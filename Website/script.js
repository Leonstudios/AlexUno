function codeGen() {
	for (var i = 0; i < 7; i++) {
		var randOne = Math.floor(Math.random() * 100) + 1;
		var randTwo = Math.floor(Math.random() * 100) + 1;
		var randThree = Math.floor(Math.random() * 100) + 1;
		var randFour = Math.floor(Math.random() * 100) + 1;
		var randFive = Math.floor(Math.random() * 100) + 1;
		var randSix = Math.floor(Math.random() * 100) + 1;
		var randSeven = Math.floor(Math.random() * 100) + 1;
		var randEight = Math.floor(Math.random() * 100) + 1;
	}
	var code = `${randOne}A${randTwo}B${randThree}C${randFour}D${randFive}E${randSix}F${randSeven}G${randEight}`;
document.getElementById("code").innerHTML = code;
}