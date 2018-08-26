package decorator;

public class Mi implements Phone{
    private Phone phone;
    public Mi(Phone phone) {
        this.phone = phone;
    }
    @Override
    public void call() {
        System.out.printf("use mi");
        phone.call();
    }
}