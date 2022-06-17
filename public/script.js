const container = document.querySelector(".image-container");
let idx = 0;
let imgs;

const run = () => {
	imgs = document.querySelectorAll(".image-container img");
	const iteration = getIteration(idx);
	imgs[getCurrentIndex(iteration)].style.transform = `translateX(${
		iteration * 1500
	}px)`;

	container.style.transform = `translateX(${-idx * 500}px)`;
	idx++;
};

const getIteration = (index) => {
	const iteration = Math.floor(index / 3);
	return iteration >= 0 ? iteration : 0;
};

const getCurrentIndex = (iteration) => {
	return idx - iteration * 3;
};
function next() {
	clearInterval(interval);
	run();
	interval = setInterval(run, 800);
}
function back() {
	clearInterval(interval);
	idx -= 2;
	if (idx <= -1) {
		idx = 2;
	}
	run();
	interval = setInterval(run, 800);
}
run();
let interval = setInterval(run, 800);
document.getElementById("next").addEventListener("click", () => next());
document.getElementById("back").addEventListener("click", () => back());
