// data do cadastro
let inserirData = new Date ( );
let data = ('2021-12-10')

if (inserirData > data) {
    console.log('Cadastro inválido')
}else {
    console.log('Continuar cadastro.')
}

 // idade
 let idadeDaPessoa = "22"
 if (idadeDaPessoa >= 18) {
     console.log('Idade permitida, continue com o cadastro! ')
 }else { 
     console.log('Idade não permitida para o cadastro')
}

//vagas para o evento
let listaDeParticipantes = ["Filipe", "Maria", "Jhon", "Raphael"]
if (listaDeParticipantes.length <= 99) {
    console.log ('Cadastro realizado, você foi adicionado a lista')
}else {
    console.log('Cadastro não realizado, não há mais vagas')
}
