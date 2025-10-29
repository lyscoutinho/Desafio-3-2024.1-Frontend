const ufSelect = document.getElementById("UF");
const tabelaMunicipios = document.getElementById("municipios");

ufSelect.addEventListener("change", () => {
    const idUF = ufSelect.value;

    if (!idUF) return;

    
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios`)
    .then(resp => resp.json())
    .then(municipios => {
        tabelaMunicipios.innerHTML = "";

        for (let i = 0; i < municipios.length; i += 3) {
            let linha = "<tr>";

            for (let j = i; j < i + 3; j++) {
                if (municipios[j]) {
                    linha += `<td>${municipios[j].nome}</td>`;
                } else {
                    linha += `<td></td>`;
                }
            }

            linha += "</tr>";

            tabelaMunicipios.innerHTML += linha;
        }
    });

});
