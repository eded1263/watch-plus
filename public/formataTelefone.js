const telefoneInput = document.getElementById("input-telefone");

function permitirSomenteNumeros(event) {
	const regex = /^[0-9]*$/;
	if (regex.test(event.target.value)) {
		return;
	}
	const value = Array.from(telefoneInput.value);
	value.pop();
	telefoneInput.value = value.join("");
}

telefoneInput.addEventListener("input", permitirSomenteNumeros);
