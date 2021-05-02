function calcularIMC() {

    const form = window.document.querySelector(`.form`);
    const table = window.document.querySelector(`.table`);
    const cálculo = window.document.querySelector(`#cálculo`);

    form.addEventListener(`submit`, function (e) {

        e.preventDefault();
        limparTabela();

        let peso = form.querySelector(`.inputPeso`);
        let altura = form.querySelector(`.inputAltura`);

        const IMC = peso.value / (altura.value ** 2);

        cálculo.innerHTML += ` ${IMC.toFixed(2)}`;

        if (IMC < 18.5) {

            let linha = table.rows[1].cells[1];

            linha.innerHTML = `<span style="background-color: crimson; 
border-radius: 10px">Abaixo do peso</span>`;

        } else if (IMC >= 18.5 && IMC <= 24.9) {

            let linha = table.rows[2].cells[1];

            linha.innerHTML = `<span style="background-color: greenyellow; 
border-radius: 10px">Peso normal</span>`;

        } else if (IMC >= 25 && IMC <= 29.9) {

            let linha = table.rows[3].cells[1];

            linha.innerHTML = `<span style="background-color: orange; 
border-radius: 10px">Sobrepeso</span>`;

        } else if (IMC >= 30 && IMC <= 34.9) {

            let linha = table.rows[4].cells[1];

            linha.innerHTML = `<span style="background-color: crimson; 
border-radius: 10px">Obesidade grau 1</span>`;

        } else if (IMC >= 35 && IMC <= 39.9) {

            let linha = table.rows[5].cells[1];

            linha.innerHTML = `<span style="background-color: crimson; 
border-radius: 10px">Obesidade grau 2</span>`;

        } else if (IMC >= 40) {

            let linha = table.rows[6].cells[1];

            linha.innerHTML = `<span style="background-color: crimson; 
border-radius: 10px">Obesidade grau 3</span>`;

        } else if (!IMC) {

            cálculo.innerHTML = `Calcule seu IMC: Valores inválidos!`;

        }

    });

    function limparTabela() {

        cálculo.innerHTML = `Calcule seu IMC:`;

        const linha1 = table.rows[1].cells[1];
        linha1.innerHTML = `Abaixo do peso`;

        const linha2 = table.rows[2].cells[1];
        linha2.innerHTML = `Peso normal`;

        const linha3 = table.rows[3].cells[1];
        linha3.innerHTML = `Sobrepeso`;

        const linha4 = table.rows[4].cells[1];
        linha4.innerHTML = `Obesidade grau 1`;

        const linha5 = table.rows[5].cells[1];
        linha5.innerHTML = `Obesidade grau 2`;

        const linha6 = table.rows[6].cells[1];
        linha6.innerHTML = `Obesidade grau 3`;

    }

}

calcularIMC();
