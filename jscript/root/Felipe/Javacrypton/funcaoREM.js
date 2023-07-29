function Confirmar(){
    let entrar = window.confirm("Deseja excluir o item??");
    var botao = document.querySelector("#MainButton");
    
        if(entrar){
            alert("O Item foi excluído");
            var item = document.querySelector(".Objeto").style.display = 'none';
            
            document.getElementById("item1").innerHTML = 'Item Excluído';
        }
        else
            alert("Operação foi cancelada");
    
}