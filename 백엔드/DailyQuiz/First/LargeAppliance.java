package DailyQuiz.First;

class LargeAppliance extends Product implements Promotion {
    public LargeAppliance(String name, int price, double weight) {
        super(name, price, weight);
        this.setPrice(this.getPrice()-getDiscountAmount());
    }
}