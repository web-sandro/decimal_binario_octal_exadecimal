// Troca de abas
function abrirConversor(id) {
  document.querySelectorAll(".conversor").forEach(div => div.style.display = "none");
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));

  document.getElementById(id).style.display = "block";
  event.target.classList.add("active");
}

// BINÁRIO
function decimalParaBinario() {
  let decimal = document.getElementById("decimalBin").value;
  let res = document.getElementById("resBin");
  if (decimal === "" || isNaN(decimal)) {
    document.getElementById("binario").value = "";
    res.innerHTML = "Digite um decimal válido.";
    return;
  }
  let bin = parseInt(decimal).toString(2);
  document.getElementById("binario").value = bin;
  res.innerHTML = `Decimal: <strong>${decimal}</strong> → Binário: <strong>${bin}</strong>`;
}

function binarioParaDecimal() {
  let bin = document.getElementById("binario").value.trim();
  let res = document.getElementById("resBin");
  if (!/^[01]+$/.test(bin)) {
    document.getElementById("decimalBin").value = "";
    res.innerHTML = "Digite um binário válido.";
    return;
  }
  let dec = parseInt(bin, 2);
  document.getElementById("decimalBin").value = dec;
  res.innerHTML = `Binário: <strong>${bin}</strong> → Decimal: <strong>${dec}</strong>`;
}

// OCTAL
function decimalParaOctal() {
  let decimal = document.getElementById("decimalOct").value;
  let res = document.getElementById("resOct");
  if (decimal === "" || isNaN(decimal)) {
    document.getElementById("octalNum").value = "";
    res.innerHTML = "Digite um decimal válido.";
    return;
  }
  let oct = parseInt(decimal).toString(8);
  document.getElementById("octalNum").value = oct;
  res.innerHTML = `Decimal: <strong>${decimal}</strong> → Octal: <strong>${oct}</strong>`;
}

function octalParaDecimal() {
  let oct = document.getElementById("octalNum").value.trim();
  let res = document.getElementById("resOct");
  if (!/^[0-7]+$/.test(oct)) {
    document.getElementById("decimalOct").value = "";
    res.innerHTML = "Digite um octal válido.";
    return;
  }
  let dec = parseInt(oct, 8);
  document.getElementById("decimalOct").value = dec;
  res.innerHTML = `Octal: <strong>${oct}</strong> → Decimal: <strong>${dec}</strong>`;
}

// HEXADECIMAL
function decimalParaHex() {
  let decimal = document.getElementById("decimalHex").value;
  let res = document.getElementById("resHex");
  if (decimal === "" || isNaN(decimal)) {
    document.getElementById("hexadecimal").value = "";
    res.innerHTML = "Digite um decimal válido.";
    return;
  }
  let hex = parseInt(decimal).toString(16).toUpperCase();
  document.getElementById("hexadecimal").value = hex;
  res.innerHTML = `Decimal: <strong>${decimal}</strong> → Hexadecimal: <strong>${hex}</strong>`;
}

function hexParaDecimal() {
  let hex = document.getElementById("hexadecimal").value.trim();
  let res = document.getElementById("resHex");
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    document.getElementById("decimalHex").value = "";
    res.innerHTML = "Digite um hexadecimal válido.";
    return;
  }
  let dec = parseInt(hex, 16);
  document.getElementById("decimalHex").value = dec;
  res.innerHTML = `Hexadecimal: <strong>${hex.toUpperCase()}</strong> → Decimal: <strong>${dec}</strong>`;
}

function abrirConversor(tipo) {
  // Alterar texto exibido
  document.getElementById("nomeEscolha").textContent = tipo;

  // Alterar botão ativo
  const botoes = document.querySelectorAll(".tab");
  botoes.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}