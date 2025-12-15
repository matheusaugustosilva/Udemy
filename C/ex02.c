#include <stdio.h>
int main()
{   
    int i;
    float nota[3], mf;
    char nome[20]; 
    printf("Digite seu nome:\n");
    scanf("%s", &nome);
    for(i = 0; i <3; i++ ){
        printf("Digite a nota da P %d:\n", i+ 1);
        scanf("%f",&nota[i]);
    }
    mf = (nota[0] + nota[1] + nota[2])/3;
    printf("%s, suas notas foram respectivamente %.2f, %.2f, %.2f\n", nome, nota[0], nota[1], nota[2]);
    if(mf>= 7){
        printf("APROVADO");
    }else if(mf >5 && mf< 7){
        printf("RECUPERAÇÃO");
    }else{
        printf("REPROVADO");
    }
    return 0;   
}
