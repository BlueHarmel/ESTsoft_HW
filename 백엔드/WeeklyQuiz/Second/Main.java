package WeeklyQuiz.Second;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        AddressBook addressBook = new AddressBook();
        Scanner sc = new Scanner(System.in);
        String name;
        String phoneNumber;
        int choice;
        String menu = """
                1. 비즈니스 연락처 추가
                2. 개인 연락처 추가
                3. 연락처 출력
                4. 연락처 검색
                5. 연락처 삭제
                6. 종료
                """;

        do {
            System.out.println(menu);
            System.out.print("원하는 옵션의 변호를 입력해주세요: ");
            try{
            choice = Integer.parseInt(sc.nextLine());
            } catch (NumberFormatException e){
                choice = 8;
            }
            switch (choice) {
                case 1:
                    System.out.print("이름을 입력하세요: ");
                    name = sc.nextLine();
                    System.out.print("전화번호를 입력하세요: ");
                    phoneNumber = sc.nextLine();
                    System.out.print("회사명을 입력하세요: ");
                    String company = sc.nextLine();
                    BusinessContact busAddress = new BusinessContact(name, phoneNumber, company);
                    addressBook.contacts.add(busAddress);
                    break;
                case 2:
                    PersonalContact perAddress = new PersonalContact();
                    System.out.print("이름을 입력하세요: ");
                    perAddress.setName(sc.nextLine());
                    System.out.print("전화번호를 입력하세요: ");
                    perAddress.setPhoneNumber(sc.nextLine());
                    System.out.print("관계를 입력하세요: ");
                    perAddress.setRelation(sc.nextLine());
                    addressBook.contacts.add(perAddress);
                    break;
                case 3:
                    addressBook.displayContacts();
                    break;
                case 4:
                    System.out.print("검색할 이름을 입력하세요: ");
                    addressBook.searchContact(sc.nextLine());
                    break;
                case 5:
                    System.out.print("삭제할 사람의 이름을 입력하세요: ");
                    name = sc.nextLine();
                    System.out.print("삭제할 사람의 전화번호를 입력하세요: ");
                    phoneNumber = sc.nextLine();
                    addressBook.deleteContact(name,phoneNumber);
                    break;
                case 6:
                    break;
                default:
                    System.out.println("유효하지 않은 입력입니다. 다시 입력해주세요!");
            }
        } while(choice != 6);
    }
}
