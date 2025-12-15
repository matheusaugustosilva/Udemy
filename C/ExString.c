//Quero que o usário digite uma string e retorne ela ao contrário 
#include <stdio.h>
#include <string.h>
int main(int argc, char const *argv[])
{
    char volta[51];
    printf("Digite uma palavra(Só serão aceitos 50 caractéres):\n");
    scanf("%50s", & volta);// %50s foi para declarar uma string de 50 caracteres aceitos, n 51, pois o último é o /0
    int tamanho = strlen(volta); //string length para pegar o tamanho da string e armazenar
    for(int i = tamanho -1; i>=0; i--){//tamanho -1 pelo menos motivo que tirei 1 de 51
        printf("%c", volta[i]);
    }
    return 0;
}
