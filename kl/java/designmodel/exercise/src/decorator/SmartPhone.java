package decorator;

public class SmartPhone implements Phone{
    @Override
    public void call() {
        System.out.println("Hi, I'm doge.");
    }
}
