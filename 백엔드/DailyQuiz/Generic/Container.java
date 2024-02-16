package DailyQuiz.Generic;

public class Container<T>{

    private T value;

    public T get(){
        return value;
    }

    public void set(T t){
        value = t;
    }
}