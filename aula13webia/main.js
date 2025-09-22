document.addEventListener('DOMContentLoaded', () => {
    const n1 = document.getElementById('num1');
    const n2 = document.getElementById('num2');
    const resultEl = document.getElementById('result');

    const showResult = (value) => {
        resultEl.textContent = `Resultado: ${value}`;
        resultEl.classList.add('show');
        // animação sutil: remover depois
        setTimeout(() => resultEl.classList.remove('show'), 900);
    };

    const parse = (el) => {
        const v = el.value;
        if (v === "" || v === null) return 0;
        const num = Number(v);
        return Number.isFinite(num) ? num : 0;
    };

    document.getElementById('addBtn').addEventListener('click', () => {
        showResult(parse(n1) + parse(n2));
    });
    document.getElementById('subBtn').addEventListener('click', () => {
        showResult(parse(n1) - parse(n2));
    });
    document.getElementById('mulBtn').addEventListener('click', () => {
        showResult(parse(n1) * parse(n2));
    });
    document.getElementById('divBtn').addEventListener('click', () => {
        const denom = parse(n2);
        if (denom === 0) {
            showResult('Erro — divisão por zero');
        } else {
            showResult(parse(n1) / denom);
        }
    });
    document.getElementById('clearBtn').addEventListener('click', () => {
        n1.value = '';
        n2.value = '';
        resultEl.textContent = 'Resultado: —';
    });
    // botão para área do cilindro
    document.getElementById("cylinderBtn").addEventListener("click", function () {
        const r = parseFloat(document.getElementById("num1").value);
        const h = parseFloat(document.getElementById("num2").value);

        if (isNaN(r) || isNaN(h)) {
            document.getElementById("result").innerText = "Digite valores válidos!";
            return;
        }

        const area = 2 * 3.14 * r * (r + h);
        document.getElementById("result").innerText = `Área do cilindro: ${area.toFixed(2)}`;
    });

});