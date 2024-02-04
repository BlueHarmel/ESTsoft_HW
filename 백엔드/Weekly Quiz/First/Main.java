import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Product shineMusket = new Grocery("샤인머스켓",new BigDecimal("10000"),3);
        Product lipstick = new Beauty("립스틱",new BigDecimal("40000"),1);
        Product airFryer = new LargeAppliance("에어 프라이어",new BigDecimal("200000"),10);

        System.out.println(shineMusket);
        System.out.println(lipstick);
        System.out.println(airFryer);
    }
}
