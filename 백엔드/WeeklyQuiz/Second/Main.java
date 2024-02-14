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
        String regex = "^010-\\d{4}-\\d{4}$";

        do {
            System.out.println(menu);
            System.out.print("원하는 옵션의 변호를 입력해주세요: ");
            try{
            choice = Integer.parseInt(sc.nextLine());
            } catch (NumberFormatException e){
                choice = Integer.MIN_VALUE;
            }
            switch (choice) {
                case 1:
                    System.out.print("이름을 입력하세요: ");
                    name = sc.nextLine();
                    System.out.print("전화번호를 입력하세요: ");
                    phoneNumber = sc.nextLine();
                    while (!phoneNumber.matches(regex)){
                        System.out.print("전화번호의 형식이 000-0000-0000에 맞지 않습니다. 전화번호를 다시 입력하세요: ");
                        phoneNumber = sc.nextLine();
                    }
                    System.out.print("회사명을 입력하세요: ");
                    String company = sc.nextLine();
                    BusinessContact busAddress = new BusinessContact(name, phoneNumber, company);
                    addressBook.contacts.add(busAddress);
                    break;
                case 2:
                    System.out.print("이름을 입력하세요: ");
                    name = sc.nextLine();
                    System.out.print("전화번호를 입력하세요: ");
                    phoneNumber = sc.nextLine();
                    while (!phoneNumber.matches(regex)){
                        System.out.print("전화번호의 형식이 000-0000-0000에 맞지 않습니다. 전화번호를 다시 입력하세요: ");
                        phoneNumber = sc.nextLine();
                    }
                    System.out.print("회사명을 입력하세요: ");
                    String relation = sc.nextLine();
                    PersonalContact perAddress = new PersonalContact(name, phoneNumber, relation);
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
                    while (!phoneNumber.matches(regex)){
                        System.out.print("전화번호의 형식이 000-0000-0000에 맞지 않습니다. 전화번호를 다시 입력하세요: ");
                        phoneNumber = sc.nextLine();
                    }
                    addressBook.deleteContact(name,phoneNumber);
                    break;
                case 6:
                    break;
                default:
                    System.out.println("유효하지 않은 입력입니다. 1~6사이의 숫자를 다시 입력해주세요!");
            }
        } while(choice != 6);
    }
}
