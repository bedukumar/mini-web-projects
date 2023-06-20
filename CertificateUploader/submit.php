<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
try {
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";

    $conn = mysqli_connect($host, $username, $password, $dbname);

    if(isset($_POST['submit'])) {
        $regno = $_POST['reg_no'];
        $category=$_POST['category'];
        if($category ==="others"){
            $category=$_POST['SpCat'];
        }
        $doc_data = addslashes(file_get_contents($_FILES['doc_file']['tmp_name']));
        $doc_name = addslashes($_FILES['doc_file']['name']);
        $doc_size = intval($_FILES['doc_file']['size']);
        $query = "SELECT * FROM document_storage where document_name='$doc_name' and reg_no='$regno'";
        $result = $conn->query($query);
        if ($result->num_rows>0){
            echo "<Button><a href='a21.html'>Submit your doc</a></Button><br/>";
            echo "this document already exist in database with this registeration no.";
            exit();
        }
        $query = "INSERT INTO document_storage (reg_no, document , document_name,category,document_size) VALUES ('$regno','$doc_data','$doc_name', '$category', $doc_size)";
        
        if(mysqli_query($conn, $query)) {
            echo "<Button><a href='a21.html'>back</a></Button></br>";
            echo "your document ".$doc_name." size:".$doc_size." uploaded successfully.";
        } else {
            echo "Error while uploading document file: " . mysqli_error($conn);
        }
    }
    if(isset($_POST['viewSubmit'])){
        echo "<Button><a href='a21v.html'>back</a></Button> <br/>";
        $regno = $_POST['reg_no'];
        $query="SELECT * FROM document_storage where reg_no='$regno';";
        $result=$conn->query($query);
        if($result->num_rows>0){
            $i=1;
            echo "<h2>results found $result->num_rows"."</h2>";
            ?>
            <table border="1px" style="border-collapse: collapse;" cellpadding="4">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>registeration no.</th>
                        <th>Document Name</th>
                        <th>Category</th>
                        <th>downloads</th>
                    </tr>
                </thead>
            <tbody>
                <?php
                while($row = $result->fetch_assoc()) {
                    $doc=$row['document_name'];
                    ?>
                <tr>
                    <td><?php echo $i ?></td>
                    <td><?php echo $row['reg_no'] ?></td>
                    <td><?php echo $row['document_name'] ?></td>
                    <td><?php echo $row['category']?></td>
                    <td><?php echo '<a href="data:application/octet-stream;base64,' .base64_encode($row['document']). '" download="' . $row['document_name'] . '">Download File</a>' ?></td>
                </tr>
                <?php $i++;}?>
            </tbody>
            </table>
            <?php
        }
        else{
            echo "<h2>no results found</h2>";
        }
    }
} catch (Exception $e) {
    echo 'error ',  $e->getMessage(), "\n";
}
?>

</body>
</html>
