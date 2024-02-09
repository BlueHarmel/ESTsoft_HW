package WeeklyQuiz.Second;

public class PersonalContact extends Contact{
    private String relation;

    PersonalContact () {

    }

    PersonalContact(String name, String phoneNumber, String relation){
        this.setName(name);
        this.setPhoneNumber(phoneNumber);
        this.setRelation(relation);
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public String getRelation() {
        return relation;
    }
}
