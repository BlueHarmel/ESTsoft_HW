package DailyQuiz.Generic;

public class TwoContainer<T, U>{
    private T key;
    private U value;

    public void set(T t,U u){
        key = t;
        value = u;
    }

    public T getKey(){
        return key;
    }

    public U getValue(){
        return value;
    }
}