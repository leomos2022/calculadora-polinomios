function obtenerPolinomio() {
    const a = parseFloat(document.getElementById('coef_a').value);
    const b = parseFloat(document.getElementById('coef_b').value);
    const c = parseFloat(document.getElementById('coef_c').value);
    const d = parseFloat(document.getElementById('coef_d').value);
    const limInf = parseFloat(document.getElementById('lim_inf').value);
    const limSup = parseFloat(document.getElementById('lim_sup').value);
    return { a, b, c, d, limInf, limSup };
}

function evaluarPolinomio(a, b, c, d, x) {
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
}

function buscarRaices() {
    const { a, b, c, d, limInf, limSup } = obtenerPolinomio();
    let iteraciones = 0;
    let error = 0.0001;
    let x1 = limInf;
    let x2 = limSup;
    let raiz;

    while ((x2 - x1) / 2 > error) {
        iteraciones++;
        raiz = (x1 + x2) / 2;
        let f1 = evaluarPolinomio(a, b, c, d, x1);
        let f2 = evaluarPolinomio(a, b, c, d, raiz);

        if (f1 * f2 < 0) {
            x2 = raiz;
        } else {
            x1 = raiz;
        }
    }

    document.getElementById('resultado').textContent = `Raíz aproximada encontrada en x = ${raiz.toFixed(4)} con ${iteraciones} iteraciones.`;
}

function buscarMaxMin() {
    const { a, b, c, d, limInf, limSup } = obtenerPolinomio();
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    let paso = 0.01;

    for (let x = limInf; x <= limSup; x += paso) {
        let valor = evaluarPolinomio(a, b, c, d, x);
        if (valor > max) max = valor;
        if (valor < min) min = valor;
    }

    document.getElementById('resultado').textContent = `Máximo valor: ${max.toFixed(4)}, Mínimo valor: ${min.toFixed(4)}.`;
}
