package decorator;

public class Meizu implements Phone{
    private Phone phone;
    public Meizu(Phone phone) {
        this.phone = phone;
    }
    @Override
    public void call() {
        System.out.printf("use meize");
        phone.call();
    }
}
