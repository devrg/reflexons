<?php
		function sendFailure($msg) {
			$output = array(
				'success' => false,
				'status' => $msg
			);
			echo(json_encode($output));
		}

		function sendSuccess($msg) {
			$output = array(
				'success' => true,
				'status' => $msg
			);
			echo(json_encode($output));
		}

		function generate_string($input, $strength = 16) 
    {
        $input_length = strlen($input);
        $random_string = '';
        for($i = 0; $i < $strength; $i++) {
            $random_character = $input[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }
     
        return $random_string;
    }

		if(!isset($_POST)) sendFailure("No values received");
		else {
			try {
				$name = empty($_POST['name']) ? '' : $_POST['name'];
				$insti = empty($_POST['insti']) ? '' : $_POST['insti'];
				$stream = empty($_POST['stream']) ? '' : $_POST['stream'];
				$course = empty($_POST['cor']) ? '' : $_POST['cor'];
				$year = empty($_POST['year']) ? '' : $_POST['year'];
				$phno = empty($_POST['phno']) ? '' : $_POST['phno'];
				$email = empty($_POST['email']) ? '' : $_POST['email'];
				$event = empty($_POST['events']) ? '' : $_POST['events'];
				$teamsize = empty($_POST['teamsize']) ? '' : $_POST['teamsize'];
				$teammember = empty($_POST['teammember']) ? '' : $_POST['teammember'];
				
				$servername = "localhost";
				$username = "id7542107_root";
				$password = "user123";
				$dbname = "id7542107_registrations";
				
				$permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
				
				$conn = new mysqli($servername, $username, $password, $dbname);
				
				if ($conn->connect_error)
				{
						die("Connection failed: " . $conn->connect_error);
				}
				
				$str = generate_string($permitted_chars,20);
				$stmt = $conn->prepare("INSERT INTO registrations (regno,regname,institution,stream,course,year,moblie,email,event,teamsize, teammembers) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
				$stmt->bind_param("sssssiissis",$str,$name,$insti,$stream,$course,$year,$phno,$email,$event,$teamsize,$teammember);
				if($stmt->execute()) {
					sendSuccess("New entry recorded");
				} else {
					sendFailure("New entry could not be recorded");
				}
				
				$stmt->close();
				$conn->close();
			} catch(Exception $e) {
				sendFailure("Could not be recorded");
			}			
		}    
?>
