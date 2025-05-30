// LAGI MANTAU MALING NOOB MAU NYOLONG SCRIPT, NIH FREE BUAT KAMU <3
			function showPopup() {
				const popup = document.getElementById("popup");
				popup.style.display = "flex";
			}

			// Menutup pop-up saat klik di luar konten
			document.getElementById("popup").addEventListener("click", function (e) {
				if (e.target === this) {
					this.style.display = "none";
				}
			});

			// Tampilkan pop-up secara otomatis saat halaman dimuat
			window.onload = function () {
				showPopup();
			};
