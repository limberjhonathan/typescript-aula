export function criaErro(): never {//nunca ira retornar nada
    throw new Error('Erro qualquer');
  }
  
  criaErro();
  
  // Module mode
  export default 1;