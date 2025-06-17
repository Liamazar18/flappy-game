<?php
 
$servername = "localhost";
$username = "root";
$password = "";
	$salt = "oweigfh3op4igh34qogh4oeroigsldhg";
 


try {
	$conn = new PDO("mysql:host=$servername;dbname=finalProject", $username, 
															$password);
	  // set the PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	} catch(PDOException $e) {
	  echo "Connection failed: " . $e->getMessage();
	}

?>

<html>
    <head>
            <title>Highscores</title>
    </head>
    <body>
        <div class="container">
            <h1>Top 10 Best Scores</h1>
        
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            <tbody>
                <?php
                function printUsersTable():void{
                    global $conn;
                    $sql = "SELECT * FROM highscores ORDER BY score ASC LIMIT 10;";
                    $stmt = $conn->query($sql);
                    while ($row = $stmt->fetch()) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['name']) . "</td>"; // Properly close <td> tags
                        echo "<td>" . htmlspecialchars($row['score']) . "</td>";
                        //echo "<td>"; echo $row['name']; "</td>";
                        //echo "<td>"; echo $row['score']; "</td>";
                        echo "</tr>";
                    }
                    
                }
                printUsersTable();
                ?>
            </tbody>
        </table>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </body>
</html>