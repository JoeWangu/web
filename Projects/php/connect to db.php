<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PupilRegister</title>
</head>

<body>

    <?php
    // Connect to the database
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "blescohouse";

    try {
        $conn = mysqli_connect($server, $user, $pass, $db);

        if (!$conn) {
            throw new Exception("connection to database failed", 1);
        }
    } catch (Exception $e) {
        echo 'Caught exception: ', $e->getMessage(), "\n";
    }

    // create table
    $sql = "create table pupils(
  name varchar(50),
  age integer
)";

    if ($conn->query($sql) === TRUE) {
        echo "table created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $conn->close();
    ?>
</body>

</html>