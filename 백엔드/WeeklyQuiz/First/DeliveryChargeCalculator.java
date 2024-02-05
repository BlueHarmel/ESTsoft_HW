package WeeklyQuiz.First;
import java.math.BigDecimal;

public interface DeliveryChargeCalculator {
    BigDecimal getDeliveryCharge(double weight, BigDecimal price);
}