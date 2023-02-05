<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP FORM</title>
</head>
<body>
    <?php
    $conn = mysqli_connect('localhost','root','');
    // if(!$conn){
    //     die('connection failed');
    // }
    // echo('connection success');

    $db_selected = mysqli_select_db($conn,'ityr3docs');
    // if(!$db_selected){
    //     die('connection failed to database');
    // }
    // echo('<br>'.'db connection successful');
    echo htmlspecialchars($_POST['FirstName']);
    echo "<br>";
    echo htmlspecialchars($_POST['MiddleName']);
    echo "<br>";
    echo htmlspecialchars($_POST['LastName']);
    echo "<br>";
    echo htmlspecialchars($_POST['Age']);
    echo "<br>";
    echo htmlspecialchars($_POST['Email']);
    echo "<br>";
    echo htmlspecialchars($_POST['IDNumber']);
    ?>
</body>
</html>