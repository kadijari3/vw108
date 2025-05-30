// Fungsi untuk menampilkan pop-up
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
