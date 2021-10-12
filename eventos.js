"use strict";

let dataEvento = new Date(2019, 10, 12);
let dataNascimento = new Date(1985, 1, 30);
let cursoData = new Date();
let user = "Frederico";
let idade = Number(cursoData - dataNascimento) / (1000 * 60 * 60 * 24 * 365);

let participantesEvento = ["Ana", "Paulo", "Jonas", "Moisés"];
let palestranteEvento = ["Odirlei"];

if (dataEvento > cursoData) {
  console.log("Evento Permitido!");
} else {
  console.log("Cadastro de Evento não permitido - Data Inválida");
}

if (idade >= 18) {
  console.log(`Prossiga com o cadastro do participante!`);
  console.log(
    `
Lista de Participantes: ${participantesEvento}, 
Lista de Palestrantes: ${palestranteEvento}
`
  );
  if (participantesEvento.length < 100) {
    participantesEvento.push(user);
    console.log("Cadastro do participante realizado");
    console.log(`Lista de Participantes atualizada: ${participantesEvento}`);
  } else {
    console.log(
      `Cadastro não permitido (Limite de participantes já atingido!)`
    );
  }
} else {
  console.log(`
Cadastro de participante não permitido (Menor de 18 anos)`);
}