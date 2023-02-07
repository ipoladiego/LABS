function ligarDesliga(){

    var imagem = document.getElementById("lamp").src;
    var imagem_ligado ="midias/pic_bulboff.gif";
    var imagem_desligado ="midias/pic_bulbon.gif";

    if(imagem == imagem_ligado){
            document.getElementById("lamp").src = imagem_desligado;
    }else{
        document.getElementById("lamp").src = imagem_ligado;
    }
}
document.getElementById("lamp").addEventListener("click", ligarDesliga);