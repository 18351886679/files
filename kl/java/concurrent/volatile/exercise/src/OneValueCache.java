import net.jcip.annotations.Immutable;

import java.math.BigInteger;
import java.util.Arrays;

@Immutable
public class OneValueCache {
    private final BigInteger lastNumber;
    private final BigInteger[] lastFactors;

    public OneValueCache(BigInteger lastNumber, BigInteger[] lastFactors) {
        this.lastNumber = lastNumber;
        this.lastFactors = lastFactors;
    }

    public BigInteger[] getLastFactors(BigInteger i){
        if (lastNumber == null || !lastNumber.equals(i)) {
            return null;
        } else {
            return Arrays.copyOf(lastFactors, lastFactors.length);
        }
    }
}
