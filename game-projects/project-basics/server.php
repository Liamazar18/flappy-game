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


	// INSERT INTO `mvn_users`(`Email`, `Password`, `Age`, `Username`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]');
	
	/*
		$email = 'foo@foo.com';
		$password = 'foofoo';
		$age = 18;
		$username = 'fubar';
	*/
	
	
	function register(string $name, int $score) {
	global $conn;
	global $salt;
	
		
	
	// sql query with placeholders
	
	$sql = "INSERT INTO `highscores`(`name`, `score`) VALUES (?,?);";
	
	// prepare the sql statement
	
	$stmt = $conn->prepare($sql);
	// execute the query with the values
	$stmt->execute([$name, $score]);
		
		}
	// register('foo@foo5.com', 'bleh', 17, 'foo4');

    $_GET['name'];
    $_GET['score'];
if (isset($_GET['name']) && isset($_GET['score'])) {
    $name = $_GET['name'];
    $score = (int)$_GET['score'];
    register($name, $score);
}
?>
<?php
// register('maximo', 1000);

?>
