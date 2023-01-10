/**
Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar: 
 */
function dia5(arr, n, c){
    let max = 0;
    let indice,sw, suma, sumAnt, sucont, valor;
    for(let i = 0; i < arr.length; i++){
        indice = i + 1;
        sw = false;
        suma = arr[i];
        sucont = c - 1;
        if(suma > max && suma < n){
            max = suma
        }
        while(indice < arr.length){
            valor = arr[indice];
            if(sucont > 0){
                sumAnt = suma;
                suma = suma + valor;
                sucont--;
            }else{
                break;
            }
            if(suma > n){
                indice++;
                suma = sumAnt;
                sucont++;
            }else if(suma == n){
                max = n;
                sw = true;
                break;
            }else{
                indice++;
                if(sucont == 0 && suma > max){
                    max = suma;
                    break;
                }else if(suma > max){
                    max = suma;
                }
            }
        }
        if(sw){
            break;
        }
    }
    console.log(max);
}

dia5([12, 3, 11, 5, 7], 20, 3) 
console.log("-------20-------")// 20
dia5([50], 15, 1) 
console.log("------0------")// 0
dia5([50], 100, 1) 
console.log("------50-----")// 50
dia5([50, 70], 100, 1) 
console.log("----70---");// 70
dia5([50, 70, 30], 100, 2)
console.log("-----100-----") // 100
dia5([50, 70, 30], 100, 3) 
console.log("----100----")// 100
dia5([50, 70, 30], 100, 4) 
console.log("------100-----")// 100