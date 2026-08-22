// ABRIR INVITACIÓN (Animación del sobre al hacer clic)
function abrirInvitacion() {
	const pantallaSobre = document.getElementById('pantalla-sobre');
	const pantallaInvitacion = document.getElementById('pantalla-invitacion');

	// Desvanecer sobre
	pantallaSobre.classList.add('fade-out');

	setTimeout(() => {
		pantallaSobre.style.display = 'none';
		pantallaInvitacion.classList.remove('hidden');
		// Activar música de fondo
		toggleMusica();
	}, 700);
}

// CONTROL DEL VIDEO
const video = document.getElementById('video-invitacion');

function toggleVideo() {
	const btnIcon = document.getElementById('btn-video-icon');

	if (video.paused) {
		video.play().then(() => {
			if (btnIcon) btnIcon.className = 'fa-solid fa-pause';
		}).catch(err => {
			console.log("Error al reproducir video:", err);
		});
	} else {
		video.pause();
		if (btnIcon) btnIcon.className = 'fa-solid fa-play';
	}
}

// ABRIR INVITACIÓN Y REPRODUCIR VIDEO
function abrirInvitacion() {
	const pantallaSobre = document.getElementById('pantalla-sobre');
	const pantallaInvitacion = document.getElementById('pantalla-invitacion');

	// Desvanecer sobre
	if (pantallaSobre) {
		pantallaSobre.classList.add('fade-out');
	}

	setTimeout(() => {
		if (pantallaSobre) {
			pantallaSobre.style.display = 'none';
		}
		if (pantallaInvitacion) {
			pantallaInvitacion.classList.remove('hidden');
		}

		// Iniciar reproducción del video al abrir
		if (video) {
			video.play().then(() => {
				const btnIcon = document.getElementById('btn-video-icon');
				if (btnIcon) btnIcon.className = 'fa-solid fa-pause';
			}).catch(err => {
				console.log("Autoplay bloqueado por navegador:", err);
			});
		}
	}, 700);
}

// CUENTA REGRESIVA (Configurada para el 22 de Agosto de 2026)
const fechaCumple = new Date("Aug 22, 2026 21:00:00").getTime();

const interval = setInterval(function() {
	const ahora = new Date().getTime();
	const distancia = fechaCumple - ahora;

	if (distancia < 0) {
		clearInterval(interval);
		document.getElementById("countdown").innerHTML = "¡HOY ES EL GRAN DÍA!";
		return;
	}

	const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
	const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
	const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

	document.getElementById("days").innerText = dias < 10 ? '0' + dias : dias;
	document.getElementById("hours").innerText = horas < 10 ? '0' + horas : horas;
	document.getElementById("minutes").innerText = minutos < 10 ? '0' + minutos : minutos;
	document.getElementById("seconds").innerText = segundos < 10 ? '0' + segundos : segundos;
}, 1000);

// MODAL CBU / DATOS
function mostrarModalCBU() {
	document.getElementById('modal-cbu').style.display = 'flex';
}

function cerrarModalCBU() {
	document.getElementById('modal-cbu').style.display = 'none';
}

// COPIAR ALIAS
function copiarAlias() {
	const alias = document.getElementById('alias-texto').innerText;
	navigator.clipboard.writeText(alias).then(() => {
		alert('¡Alias copiado al portapapeles!: ' + alias);
	}).catch(err => {
		console.error('Error al copiar: ', err);
	});
}