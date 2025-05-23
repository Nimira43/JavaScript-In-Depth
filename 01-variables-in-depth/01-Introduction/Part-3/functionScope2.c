#include <stdio.h>
#include <stdbool.h>

// Global
int globalVariable = 10;

void outer() {
  // Local
  int globalVariable = 20;

  if (true) {
    // Local
    int globalVariable = 30;
    printf("%d\n", globalVariable);    // Prints 30
  }
  printf("%d\n", globalVariable);   // Prints 20
}

int main() {
  outer();
  printf("%d\n", globalVariable);   // Prints 10
} 
    