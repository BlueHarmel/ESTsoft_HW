package WeeklyQuiz.Three;

import java.util.Scanner;
import java.util.Stack;

public class CorrectGualho {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inputString = sc.nextLine();

        System.out.println(solution(inputString));
    }

    static boolean solution(String s) {
        boolean answer = true;
        char[] charArray = s.toCharArray();
        Stack<String> stack = new Stack<>();

        for (char c : charArray) {
            if (c == '(') {
                stack.push(String.valueOf(c));
            } else if (!stack.isEmpty()) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (!stack.isEmpty()) {
            answer = false;
        }
        return answer;
    }
}
