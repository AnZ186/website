async function hitung(rumus) {
    let nilai = {};
    const hasilElement = document.getElementById(`hasil-${rumus}`);

    if (rumus === "lingkaran") {
    nilai.radius = document.getElementById("radius").value;
    } else if (rumus === "segitiga") {
    nilai.alas = document.getElementById("alas").value;
    nilai.tinggi = document.getElementById("tinggi").value;
    } else if (rumus === "persegi") {
    nilai.sisi = document.getElementById("sisi").value;
    }

    try {
    const response = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rumus, nilai }),
    });
    const data = await response.json();
    hasilElement.textContent = `Hasil: ${data.hasil}`;
    } catch (error) {
    hasilElement.textContent = "Error!";
    }
}