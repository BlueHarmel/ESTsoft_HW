import java.math.BigDecimal;

public class Product {
    private String name;
    private BigDecimal price;
    private double weight;

    public Product(String name, BigDecimal price, double weight){
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String toString() {
        return """
                품목명 : %s
                배송비 포함 가격 : %s
                무게 : %f
                """.formatted(getName(),getPrice(),getWeight());
    }
}