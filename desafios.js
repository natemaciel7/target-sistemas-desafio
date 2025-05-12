// questao 1

function calcularSoma() {
  let INDICE = 13,
    SOMA = 0,
    K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
}

// questao 2

function pertenceFibonacci(numero) {
  let a = 0,
    b = 1;
  while (b < numero) {
    [a, b] = [b, a + b];
  }
  const pertence = b === numero || numero === 0;
  console.log(
    `2) O número ${numero} ${
      pertence ? "pertence" : "não pertence"
    } à sequência de Fibonacci.`
  );
}

//questao 3

const faturamentoMensal = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

function analisarFaturamento(dados) {
  const diasComFaturamento = dados.filter((d) => d.valor > 0);
  const valores = diasComFaturamento.map((d) => d.valor);

  const menor = Math.min(...valores);
  const maior = Math.max(...valores);
  const media = valores.reduce((soma, v) => soma + v, 0) / valores.length;
  const acimaDaMedia = valores.filter((v) => v > media).length;

  console.log("3) Faturamento:");
  console.log("   Menor valor:", menor.toFixed(2));
  console.log("   Maior valor:", maior.toFixed(2));
  console.log("   Dias acima da média:", acimaDaMedia);
}

// questao 4

function calcularPercentualEstados() {
  const estados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(estados).reduce((soma, valor) => soma + valor, 0);

  console.log("4) Percentual por estado:");
  for (const [estado, valor] of Object.entries(estados)) {
    const percentual = (valor / total) * 100;
    console.log(`   ${estado}: ${percentual.toFixed(2)}%`);
  }
}

// questao 5
function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  console.log("5) String invertida:", invertida);
}

//testes:

console.log("\n--- Questão 1 ---");
calcularSoma();

console.log("\n--- Questão 2 ---");
pertenceFibonacci(21); // pertence
pertenceFibonacci(22); // não pertence

console.log("\n--- Questão 3 ---");
analisarFaturamento(faturamentoMensal);

console.log("\n--- Questão 4 ---");
calcularPercentualEstados();

console.log("\n--- Questão 5 ---");
inverterString("Target Sistemas");
