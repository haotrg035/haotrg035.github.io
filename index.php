<?php include './header.php' ?>

<?php
    $uri = ($_GET['site']);
    if (file_exists('./' . $uri . '.php')) {
        include './' . $uri . '.php';
    }
?>

<?php include './footer.php' ?>