<?php

$randomQuote = [
  "In order to succeed, we must first believe that we can.",
  "If you can dream it, you can do it.",
  "Always do your best. What you plant now, you will harvest later.",
  "<em>It always</em> seems impossible until its done.",
  "<em>Believe</em> in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
];

echo $randomQuote[rand(0, count($randomQuote) - 1)];
