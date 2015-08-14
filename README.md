Benchmark on PhantomJS
============

This script helpful your calculate arithmetical mean executing PHP script (or another scripts)
On your webpage need puting executing time in <tagname> ... </tagname>
tagname set in benchmark.js (6)

Example PHP script:
```
    <?php
    $start = microtime(true);
    ## Your PHP script
    $end = microtime(true) - $start;
    echo "<timegenerate>".$end."</timegenerate>";
    ?>
```
Using script: ./phantomjs benchmark.js http://example.com
