#include <stdio.h>
int main(int argc, char const *argv[])
{
    float lado[3];
    int i;
    for(i = 0; i<=2; i++){
        printf("Digite a medida do lado %d:\n", i+1);
        scanf("%f", &lado[i]);
    }
    if(lado[0] < lado[1] + lado[2] || lado[1] < lado[0] + lado[3] || lado[3] < lado[1] + lado[2]){
        printf("É possível desenhar um triângulo com essas medidas\n");
        if(lado[0] == lado[1] && lado[0] == lado[2]){
            printf("EQUILÁTERO");
        }else if(lado[0] == lado[1] || lado[1] == lado[2] || lado[2] == lado[0]){
            printf("Isósceles");
        }else{
            printf("Escaleno");
        }
    }else{
        printf("Insira novas medidas para fazer um triângulo");
    }
    
    return 0;
}
