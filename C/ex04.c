#include <stdio.h>
int main()
{
    int num;
    printf("Digite um número:\n"); 
    scanf("%d", &num); 
    switch (num)
    {
    case 1:
        printf("O número digitado foi 1, ele é válido");
        break;
    case 2:
    printf("O número digitado foi 2, ele é válido");
        break;
    case 3:
    printf("O número digitado foi 3, ele é válido");
        break;
    case 4:
    printf("O número digitado foi 4, ele é válido");
        break;
    case 5:
    printf("O número digitado foi 5, ele é válido");
        break;
    default:
        printf("o número digitado é inválido");
    }
    return 0;
}
