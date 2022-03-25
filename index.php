<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

        <?php
            define("CONSTANTE", "Alô Mundo.");
            echo CONSTANTE; // mostra "Alô Mundo."


            define("GREETING", "Alô Você.",TRUE);
            echo GREETING; // mostra "Alô você."


        ?>




    <a href="<?php echo  GREETING; ?>">Link</a>
</body>
</html>