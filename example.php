<?php 

    $db_connection = mysqli_connect('localhost', 'root', 'root', 'wickedSales');

    $sql = "SELECT * FROM `products`";

    $query_result = $db_connection->query($sql);

    /* $query_result = mysqli_query($db_connection, $sql); */

    $products_data = $query_result->fetch_all(MYSQLI_ASSOC);

    $products_json = json_encode($products_data, JSON_PRETTY_PRINT);

    print_r($products_data);

?>