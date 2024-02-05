package DailyQuiz.First;

public class Product implements Promotion{
    private String name;
    private int price;
    private double weight;

    public Product(String name, int price, double weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    @Override
    public int getDiscountAmount() {
        if (this.getName() == "grocery"){
            return 2000;
        } else if (this.getName() == "beauty") {
            return 10000;
        }
        return 0;
    }
}