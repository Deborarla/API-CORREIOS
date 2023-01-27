import {
  calcularPrecoPrazo,
  consultarCep,
  rastrearEncomendas,
} from 'correios-brasil';

const { consultarCep } = require('correios-brasil');

// Cep pode ser String ou Number
const cep = '21770200'; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve

consultarCep(cep).then(response => {
  console.log(response);
});

const { calcularPrecoPrazo } = require('correios-brasil');

let args = {
  // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
  sCepOrigem: '81200100',
  sCepDestino: '21770200',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '20',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014', '04510'], //Array com os códigos de serviço
  nVlDiametro: '0',
};

calcularPrecoPrazo(args).then(response => {
  console.log(response);
});
