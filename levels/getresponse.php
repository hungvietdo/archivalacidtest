<?php
$file = 'https://web.archive.org/web/20160921194039/http://www.cs.odu.edu/~hdo/cs697/archivalacidtest/levels/';
$file_headers = @get_headers($file);
var_dump($file_headers);

echo (resCode($file));

 

function resCode($URL)
{
    $exists = true;
    $file_headers = @get_headers($URL);
    $InvalidHeaders = array('200','404', '403', '500');

    foreach($InvalidHeaders as $HeaderVal)
    {
            if(strstr($file_headers[0], $HeaderVal))
            {
                    
                    return $HeaderVal;
            }
    }
    return 0;
}

?>