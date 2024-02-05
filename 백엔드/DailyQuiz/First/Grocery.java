package DailyQuiz.First;

class Grocery extends Product implements Promotion {
    public Grocery(String name, int price, double weight) {
        super(name, price, weight);
        this.setPrice(this.getPrice()-getDiscountAmount());
    }
}