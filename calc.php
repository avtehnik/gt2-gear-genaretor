<?php

$pitchDiameter = 96.13;
$outsideDiameter = 95.62;
$beltPitch = 2;
$nominalGrooveDepth = 0.76;
$pitchFactor = 0.41;
$rootDiameter= $outsideDiameter - ($nominalGrooveDepth * 2);
$maximumFlangeSeatDiameter = $rootDiameter - $pitchFactor;
$grooveDiameter = 1;

echo 'diametr diff: '.(($pitchDiameter-$outsideDiameter)/2).'mm'.PHP_EOL;
echo 'pitchDiameter: '.$pitchDiameter.'mm'.PHP_EOL;
echo 'outsideDiameter: '.$outsideDiameter.'mm'.PHP_EOL;
echo 'beltPitch: '.$beltPitch.'mm'.PHP_EOL;
echo 'nominalGrooveDepth: '.$nominalGrooveDepth.'mm'.PHP_EOL;
echo 'pitchFactor: '.$pitchFactor.'mm'.PHP_EOL;
//echo 'grooveDiameter: '.$grooveDiameter.'mm'.PHP_EOL;
echo 'rootDiameter: '.$rootDiameter.'mm'.PHP_EOL;
echo 'maximumFlangeSeatDiameter: '.$maximumFlangeSeatDiameter.'mm'.PHP_EOL;
