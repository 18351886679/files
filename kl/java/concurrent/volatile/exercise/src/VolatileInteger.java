public class VolatileInteger{
    public volatile int inc = 0;
    public void increase() {
        inc++;
    }
    public static void main(String[] args) throws InterruptedException {
        final VolatileInteger volatileInteger = new VolatileInteger();
        for(int i = 0; i < 10; i++) {
            new Thread() {
                public void run() {
                    for(int j = 0; j< 1000; j++) {
                        volatileInteger.increase();
                    }
                };
            }.start();
        }
        while(true) {
            Thread.sleep(1000);
            System.out.println(volatileInteger.inc);
        }
    }
}