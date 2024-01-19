document.addEventListener("DOMContentLoaded", function () {
	const sidebarLinks = document.querySelectorAll(".sidebar-link");

	sidebarLinks.forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			const targetContentId = this.getAttribute("href").substring(1);

			document.querySelectorAll(".content-area").forEach((content) => {
				content.style.display = "none";
			});
			document.querySelectorAll(".introduction-area").forEach((content) => {
				content.style.display = "none";
			});

			document.getElementById(targetContentId).style.display = "block";
		});
	});

	document.querySelectorAll(".copy-code-btn").forEach(function (button) {
		button.addEventListener("click", function () {
			var codeBlock = this.closest(".code-container").querySelector("code");
			var codeText = codeBlock.innerText;

			var codeBtn = this;

			navigator.clipboard
				.writeText(codeText)
				.then(function () {
					// Use the stored reference
					codeBtn.innerHTML = '<i class="fa-solid fa-check"></i>  Copied!';
				})
				.catch(function (err) {
					console.error("Unable to copy code", err);
				});
		});
	});
});
