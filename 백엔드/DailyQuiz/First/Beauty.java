package DailyQuiz.First;

class Beauty extends Product implements Promotion {
    public Beauty(String name, int price, double weight) {
        super(name, price, weight);
        this.setPrice(this.getPrice()-getDiscountAmount());

    }
}