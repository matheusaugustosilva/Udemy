#include <stdio.h>
#include <string.h> 
int main(int argc, char const *argv[])
{
    char vogal[20];
    int count = 0;
    printf("Digite uma palavra:\n");
    scanf("%19s", &vogal);
    int tamanho = strlen(vogal);
    printf("%d", tamanho);
    for(int i = tamanho - 1; i>=0; i--){ // tamanho -1 pq o último caracter em c é o /0
        if(vogal[i] == 'a' || vogal[i] == 'e' || vogal[i] == 'i' || vogal[i] == 'o' || vogal[i] == 'u'  ){
            count = count + 1;
        }
    }
    printf("A palavra %s tem %d vogais", vogal,count);
    return 0;
}
