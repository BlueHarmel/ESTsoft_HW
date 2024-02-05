package WeeklyQuiz.First;
import java.math.BigDecimal;

class LargeAppliance extends Product implements DeliveryChargeCalculator {
    public LargeAppliance(String name, BigDecimal price, double weight) {
        super(name, price, weight);
        this.setPrice(getDeliveryCharge(weight, price));
    }

    @Override
    public BigDecimal getDeliveryCharge(double weight, BigDecimal price) {
        BigDecimal deliveryCharge;

        if (weight >= 10) {
            deliveryCharge = BigDecimal.valueOf(10000);
        } else if (weight >= 3) {
            deliveryCharge = BigDecimal.valueOf(3000);
        } else {
            deliveryCharge = BigDecimal.valueOf(1000);
        }
        BigDecimal tempPrice = price.add(deliveryCharge);

        if (tempPrice.intValue() >= 100000) {
            return price;
        } else if (tempPrice.intValue() >= 30000) {
            return tempPrice.subtract(BigDecimal.valueOf(1000));
        } else {
            return tempPrice;
        }
    }
}