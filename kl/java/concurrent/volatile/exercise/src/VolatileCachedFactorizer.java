import net.jcip.annotations.ThreadSafe;

import java.math.BigInteger;

@ThreadSafe
public class VolatileCachedFactorizer{
    private volatile OneValueCache cache = new OneValueCache(null, null);
    public void service(BigInteger i) {
        BigInteger[] factors = cache.getLastFactors(i);
        if (factors == null){
            // factors = factor(i);
            cache = new OneValueCache(i, factors);
        }
    }
}
