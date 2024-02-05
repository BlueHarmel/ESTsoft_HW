package DailyQuiz.First;

public class Cart {
    Product[] products;

    Cart(Product[] products) {
        this.products = products;
    }

    public int calculateDeliveryCharge() {
        int deliveryCharge = 0;
        double weight = 0;
        int price = 0;

        for (int i = 0; i < 3; i++) {
            weight += this.products[i].getWeight();
            price += this.products[i].getPrice();
        }

        if (weight >= 10) {
            deliveryCharge = 10000;
        } else if (weight >= 3) {
            deliveryCharge = 3000;
        } else {
            deliveryCharge = 1000;
        }

        if (price >= 100000)
            deliveryCharge = 0;
        else if (price >= 30000) {
            deliveryCharge -= 1000;
        }
        return deliveryCharge;
    }
}
