//Sortear um número e caso o usuário acerte, falar a qtd de tentativas 
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <time.h> // pega o tempo atual
int main(int argc, char const *argv[])

{
   setlocale(LC_ALL, "portuguese");
     srand(time(NULL));// irá olhar o horário e se for diferente da primeira exc, o rand irá ser dif
     int numeroNoIntervalo = rand() % 500;
     int tentativa;
     int count = 0; 
      printf("Número aleatório (1 a 500): %d\n", numeroNoIntervalo);
    do{
        printf("Digite um número aleatório:\n");
        scanf("%d", &tentativa);
        count = count + 1;
            if(count > 10){
                break;
        }

    }
    while(tentativa != numeroNoIntervalo);
    if(count == 1 || count == 2 || count == 3){
        printf("MUTIO SORTUDO");
    }   else if(count == 4 || count == 5 || count == 6){
            printf("SORTUDO");
    }       else if(count == 7 || count == 8 || count == 9 || count == 10){
                    printf("Normal");
    }           else{
                    printf("Tente novamente");
    }
    
    // Imprimir os números

    return 0;
}
