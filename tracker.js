window.addEventListener("DOMContentLoaded", () => {
	const rickAndMorty = document.getElementById("rick-and-morty");
	const eye = document.querySelector(".eye");
	const pupils = document.querySelectorAll(".pupil");

	document.addEventListener("mousemove", (event) => {
		const x = event.clientX || event.pageX;
		const y = event.clientY || event.pageY;

		// eyes.forEach((eye) => {
		const eyeRect = eye.getBoundingClientRect();
		const eyeCenterX = eyeRect.left + eyeRect.width / 2;
		const eyeCenterY = eyeRect.top + eyeRect.height / 2;
		const deltaX = x - eyeCenterX;
		const deltaY = y - eyeCenterY;
		const angle = Math.atan2(deltaY, deltaX);
		const maxDistance = eyeRect.width / 3;
		const pupilX = Math.cos(angle) * maxDistance;
		const pupilY = Math.sin(angle) * maxDistance;

		// eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
		pupils.forEach((pupil) => {
			pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
		});
		// });
	});
});
