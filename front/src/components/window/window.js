class Window {
    constructor(box) {
		let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

		const header = box.querySelector(".admin-option__title")
		header.addEventListener("mousedown", (e) => {
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		});

		const elementDrag = (e) => {
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			box.style.top = (box.offsetTop - pos2) + "px";
			box.style.left = (box.offsetLeft - pos1) + "px";
		};

		const closeDragElement = (e) => {
			document.onmouseup = null;
			document.onmousemove = null;
		};
	}
}