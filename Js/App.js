const estados = ["☀️", "☁️", "🌧️", "⛈️", "❄️", "🌬️"];

// Datos ficticios
const ciudades = [
  { nombre: "Rocket-racoon", temp: 22, estado: "Soleado", icono: "☀️" },
  { nombre: "Xandar", temp: -2, estado: "Nevado", icono: "❄️" },
  { nombre: "knowhere", temp: 15, estado: "Ventoso", icono: "🌬️" },
  { nombre: "Groot", temp: 7, estado: "Nublado", icono: "☁️" },
  { nombre: "Ego", temp: 1, estado: "Despejado", icono: "🌕" },
  { nombre: "Floor", temp: 18, estado: "Soleado", icono: "☀️" },
  { nombre: "Lyla", temp: 25, estado: "Húmedo", icono: "💧" },
  { nombre: "teefs", temp: -20, estado: "Congelado", icono: "🧊" },
  { nombre: "89P13", temp: 12, estado: "Nublado", icono: "☁️" },
  { nombre: "Nebula", temp: 28, estado: "Congelado", icono: "🧊" },
  { nombre: "Start-Lord", temp: 50, estado: "Soleado", icono: "☀️" },
  { nombre: "Motorniko-Galaxy", temp: 32, estado: "Nevado", icono: "❄️"}
];

// home
if (document.getElementById("cards-container")) {

  const contenedor = document.getElementById("cards-container");

  ciudades.forEach((c) => {
    contenedor.innerHTML += `
      <article class="col">
        <div class="card p-3" onclick="verDetalle('${c.nombre}')">
          <h3>${c.icono} ${c.nombre}</h3>
          <p class="m-0"><strong>${c.temp}°C</strong></p>
          <small>${c.estado}</small>
        </div>
      </article>
    `;
  });
}

// Navegación
function verDetalle(nombre) {
  localStorage.setItem("ciudadSeleccionada", nombre);
  window.location = "detalle.html";
}


// detalle
if (document.getElementById("city-title")) {

  const nombre = localStorage.getItem("ciudadSeleccionada");
  document.getElementById("city-title").textContent = nombre;

  const ciudad = ciudades.find((c) => c.nombre === nombre);

  // Clima actual
  document.getElementById("current-weather").innerHTML = `
    <div>Temperatura: ${ciudad.temp}°C</div>
    <div>Estado: ${ciudad.estado}</div>
    <div>Viento: ${Math.floor(Math.random() * 30)} km/h</div>
    <div>Humedad: ${Math.floor(Math.random() * 100)}%</div>`;

  // Pronóstico semanal
  const semana = ["Lunar", "Marcian", "Mierita", "Juester", "Viercenaz", "Sabiro", "Domoro"];

  semana.forEach((dia) => {
    const iconoRandom = estados[Math.floor(Math.random() * estados.length)];
    const tempRandom = ciudad.temp + (Math.floor(Math.random() * 6) - 3);

    document.getElementById("week-forecast").innerHTML += `
      <article class="col-6 col-md-4 col-lg-3 mb-3">
        <div class="card p-3 text-center">
          <h5>${dia}</h5>
          <p>${iconoRandom}</p>
          <p>${tempRandom}°C</p>
        </div>
      </article>
    `;
  });
}
