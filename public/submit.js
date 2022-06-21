const form = document.getElementById("form-cadastro");
const loader = document.getElementById("loader-wrapper");

function submitForm(event) {
	event.preventDefault();
	console.log(loader);
	loader.classList.add("loading-visivel");
	const data = new URLSearchParams();
	for (const pair of new FormData(form)) {
		data.append(pair[0], pair[1]);
	}
	try {
		doPostRequest("/cadastre-se", data).then(() => {
			alert("Envio feito com sucesso!");
			window.location.href = "/filmes-e-series";
		});
	} catch (error) {
		alert("Erro no envio, notifique o erro ao administrador");
		loader.classList.remove("loading-visivel");
	}
}

function doPostRequest(url, data) {
	return fetch(url, {
		method: "POST",
		headers: { "Content-type": "application/x-www-form-urlencoded" },
		body: data,
	}).then((response) => response.json());
}

form.addEventListener("submit", submitForm);
