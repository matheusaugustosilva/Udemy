#include <stdio.h>
#include <locale.h>
#define area(a,b)(a*b)
#define espera()
int main(int argc, char const *argv[])
{
    int b,h,res;
    printf("Digite o valor da base"); 
    scanf("%d", &b); 
    printf("Digite o valor da altura"); 
    scanf("%d", &h); 
    res = area(b,h); 
    printf("A area e igual a %d", res);


    return 0;
}
//  Macro funciona como funçao, onde o  primeiro e parametro e o segundo e o return 


