package DailyQuiz.Generic;

public class Util {

    // (제네릭 메소드를 작성해주세요)
    public static <T extends Pair<K, V>, K, V> V getValue(T pair, K key) {
        if (pair != null && key != null && key.equals(pair.getKey())) {
            return pair.getValue();
        }
        return null;
    }
}