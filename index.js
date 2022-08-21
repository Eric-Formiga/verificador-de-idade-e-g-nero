
function substituir(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("textano") 
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "masculino"
            if(idade >= 0 && idade <= 12){
                img.setAttribute("src", "./images/crianca-m.jpg") 
            } else if(idade < 21){
                img.setAttribute("src", "./images/jovem-m.jpg") 
            } else if(idade > 21 && idade < 65){
                img.setAttribute("src", "./images/adulto-m.jpg") 
            }else {
                img.setAttribute("src", "./images/velho-m.jpg") 
            }
        }else if(fsex[1].checked){
            genero = "feminino"
            if(idade >= 0 && idade <= 12){
                img.setAttribute("src", "./images/crianca-f.jpg")  
            } else if(idade < 21){
                img.setAttribute("src", "./images/jovem-f.jpg") 
            } else if(idade > 21 && idade < 65){
                img.setAttribute("src", "./images/adulto-f.jpg") 
            }else {
                img.setAttribute("src", "./images/velho-f.jpg") 
            }
        }
        res.style.textAlign = 'center'
       
        
        res.innerHTML = `Sua idade é ${idade} anos,e gênero ${genero}`

        res.appendChild(img)
        
    }


}

