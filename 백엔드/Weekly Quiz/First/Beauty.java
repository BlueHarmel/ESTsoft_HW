import java.math.BigDecimal;

class Beauty extends Product implements DeliveryChargeCalculator {
    public Beauty(String name, BigDecimal price, double weight){
        super(name,price,weight);
        this.setPrice(getDeliveryCharge(weight,price));
    }
    @Override
    public BigDecimal getDeliveryCharge(double weight, BigDecimal price) {
        BigDecimal deliveryCharge;
        if (weight >= 10) {
            deliveryCharge = new BigDecimal("10000");
        } else if (weight >= 3) {
            deliveryCharge = new BigDecimal("3000");
        } else{
            deliveryCharge = new BigDecimal("1000");
        }
        BigDecimal tempPrice = price.add(deliveryCharge);

        if (tempPrice.intValue() >= 100000) {
            return price;
        } else if (tempPrice.intValue() >= 30000) {
            return tempPrice.subtract(new BigDecimal("1000"));
        } else {
            return tempPrice;
        }
    }
}