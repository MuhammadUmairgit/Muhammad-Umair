<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style (2).css">
    <title>Next</title>
</head>
<body>
    <form action="GET_PHP_SCRIPT (2).PHP" method="get">
        <h2> Hi <?php echo $_GET["name"];?>! </h2><br>
        <h2>Your email address is: <?php echo $_GET["email"];?> </h2><br>
        <h2>Your Age is: <?php echo $_GET ["age"];?> </h2><br>
        <h2> Your Password is: <?php echo $_GET ["password"];?></h2><br>
        <input type="submit" id="button">
        
    </form>

        <script>
            alert('confirm all');
        </script>
</body>
</html>