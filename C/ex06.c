#include <stdio.h>
#include <string.h>
int main(int argc, char const *argv[])
{
    int i;
    char palavra[100]; 
    printf("Digite uma palavra:\n");
    scanf("%99s", &palavra);
    int tamanho = strlen(palavra);
    for(int i = tamanho - 1; i>=0; i--){
        printf("%c", palavra[i]);
    }
    return 0;
}
