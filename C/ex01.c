#include <stdio.h>
int main(int argc, char const *argv[])
{
    int num;
    printf("Digite seu número:\n");
    scanf("%d", &num);
    if(num%2 == 0){
        printf("PAR");
    }else{
        printf("ÍMPAR");
    }
    return 0;
}
