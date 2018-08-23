public class MemoryVisible {

    private boolean status;

    public MemoryVisible() {
        status = false;
    }

    /**
     * 状态切换为true
     */
    public void changeStatus(){
        status = true;
    }

    /**
     * 若状态为true，则running。
     */
    public void run(){
        while (true){
            System.out.println("status = " + status);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        MemoryVisible memoryVisible = new MemoryVisible();
        new Thread(new Runnable() {
            @Override
            public void run() {
                memoryVisible.changeStatus();
                while (true) {
                    System.out.println("set status = true");
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }).start();
        memoryVisible.run();
    }
}