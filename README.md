Benchmark on PhantomJS
============

This script helpful your calculate arithmetical mean executing PHP script (or another scripts).

On your webpage need puting executing time in 
```<tagname> ... </tagname>```
tagname set in benchmark.js (20)

Example PHP script:
```
<?php
    $start = microtime(true);
    ## Your PHP script
    $end = microtime(true) - $start;
    echo "<timegenerate>".$end."</timegenerate>";
?>
```
<b>Using script:</b> ./phantomjs benchmark.js http://example.com
<img src="https://habrastorage.org/files/bfa/e16/18c/bfae1618cb894c73836d2784423686b6.png"/>
