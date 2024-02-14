package WeeklyQuiz.Second;

import java.util.ArrayList;
import java.util.List;

public class AddressBook {
    List<Contact> contacts = new ArrayList<>();
    private int cnt;

    public void displayContacts() {
        if (contacts.isEmpty()) {
            System.out.println("연락처가 비어있습니다.");
            return;
        }
        for (Contact pInfo : contacts) {
            if(pInfo instanceof BusinessContact){
                System.out.printf("이름: %s,전화번호: %s, 회사: %s%n", pInfo.getName(), pInfo.getPhoneNumber(), ((BusinessContact) pInfo).getCompany());
            } else {
                System.out.printf("이름: %s,전화번호: %s, 관계: %s%n", pInfo.getName(), pInfo.getPhoneNumber(), ((PersonalContact) pInfo).getRelation());
            }
        }
    }

    public void deleteContact(String name, String phoneNumber) {
        cnt = 0;
        for (Contact pInfo : contacts) {
            if (name.equals(pInfo.getName()) && phoneNumber.equals(pInfo.getPhoneNumber())) {
                contacts.remove(pInfo);
                System.out.println("연락처가 성공적으로 삭제되었습니다.");
                cnt++;
                break;
            }
        }
        if (cnt == 0) {
            System.out.println("연락처가 존재하지 않습니다.");
        }
    }

    public void searchContact(String name) {
        cnt = 0;
        for (Contact pInfo : contacts) {
            if (name.equals(pInfo.getName())) {
                if(pInfo instanceof BusinessContact) {
                    System.out.printf("이름: %s,전화번호: %s, 회사: %s%n", pInfo.getName(), pInfo.getPhoneNumber(), ((BusinessContact) pInfo).getCompany());
                    cnt++;
                } else {
                    System.out.printf("이름: %s,전화번호: %s, 관계: %s%n", pInfo.getName(), pInfo.getPhoneNumber(), ((PersonalContact) pInfo).getRelation());
                    cnt++;
                }
            }
        }
        if (cnt == 0) {
            System.out.println("연락처를 찾을 수 없습니다.");
        }
    }
}
