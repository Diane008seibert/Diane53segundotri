const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
geraSenha();
const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
if (tamanhoSenha > 1){
/*tamanhoSenha = tamanhoSenha-1;*/
tamanhoSenha--;
}
geraSenha();
}
function aumentaTamanho(){
if (tamanhoSenha < 20){
/*tamanhoSenha = tamanhoSenha+1;*/
tamanhoSenha++;
}
geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();
function geraSenha() {
let senha = '';
for (let i = 0; i < tamanhoSenha; i++) {
let numeroAleatorio = Math.random() * letrasMaiusculas.length;
numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = senha;
}