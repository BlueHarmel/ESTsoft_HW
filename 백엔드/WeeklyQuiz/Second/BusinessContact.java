package WeeklyQuiz.Second;

public class BusinessContact extends Contact{
    private String company;

    BusinessContact () {

    }

    BusinessContact(String name, String phoneNumber, String company){
        this.setName(name);
        this.setPhoneNumber(phoneNumber);
        this.setCompany(company);
    }
    public void setCompany(String company) {
        this.company = company;
    }

    public String getCompany() {
        return company;
    }
}
