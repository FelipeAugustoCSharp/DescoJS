var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")
const valor = parametros[1].split("&") //problema tá aqui

for(let i = 0; i< valor.length;i++){
    if(valor[i].startsWith("atores=")){
        valor[i] = "atores=" + valor[i].substring(7).toUpperCase();
    }
}
console.log(valor);