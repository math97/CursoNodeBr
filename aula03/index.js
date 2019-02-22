/*
0-obter um usuario
1-obter telefone a partir de um usuario
2-obter endereco a partir de um usuario




PROMISE----------------------------
    Ciclo de vida:
        Pending:Estado inicial, ainda não terminou ou ainda não foi rejeitado
        Fulfilled:Quando executou todas as operações com sucesso
        Rejected:rejeitado.Pode capturar com try catch

*/

function obterUsuario(){
    //quando der algum problema -> reject(erro)
    //quando sucesso ->Resolv
    return new Promise(function resolvePromise(resolve,reject){

        setTimeout(()=>{
            return resolve({
                id:1,
                nome:'Alladin',
                dataNascimento: new Date
            })
    
        },1000)
    })
}

function obterTelefone(idUsuario,callback){
    setTimeout(function(){
        return callback(null,{
            telefone:'88888',
            ddd:'11'
        })

    },2000);
}

function obterEndereco(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua:'Maestro',
            numero:'80',
        })
    },3000);


}

const usuarioPromise=obterUsuario()
//para manipular o sucesso usamos a funcao .then
//para manipular erros usamos o .catch
/*
esta maneira e passando o segunro parametro como erro
usuarioPromise
    .then(function(resultado){

},function(error){

})
 */
//maneira abaixo pode ter varios .then e um .catch para tratar erros
usuarioPromise
    .then(function(resultado){
        console.log('resultado',resultado);
        
    })
    .catch(function(error){
        console.log('deu ruim',error)
    })
//parei no 5'44'' do video refatorando callbacks para promisses


//abaixo foi tudo sincronizado uma dentro da outra usando funcoes com o nome Resolver referenciando os callback
/* obterUsuario(function resolverUsuario(error,usuario){

    if(error){
        console.log('Deu ruim em usuário',error);
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
        if(error1){
            console.log('Deu ruim em telefone',error1);
            return;    
        }
        obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
            if(error2){
                console.log('Deu ruim em endereco',error2);
                return; 
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},${endereco.numero}
                Telefone:(${telefone.ddd})${telefone.telefone}
            `);
            
        })
    })

}) */




