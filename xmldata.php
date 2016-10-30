<?php
$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<people>
    <person>
        <name>Captain America</name>
        <email>capt.america@example.com</email>
    </person>
    <person>
        <name>Spiderman</name>
        <email>spidey@example.com</email>
    </person>
    <person>
        <name>Ironman</name>
        <email>tony.stark@example.com</email>
    </person>
    <person>
        <name>Black Widow</name>
        <email>romanov@example.com</email>
    </person>
    <person>
        <name>Storm</name>
        <email>storm@example.com</email>
    </person>
</people>';

header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();