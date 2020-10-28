<?php 

    $last_ID_intoCart = null;

 
    
    if ($request['method'] === 'POST') {
        if(!isset($request['body']['productId'])){
            throw new ApiError("Require Valid ID", 400);
            $response['body'] = [];
            send($response);
        } else {
            $link = get_db_link();
            $productsID = intval($request['body']['productId']);
            $sql = 
                "SELECT `price`
                    FROM `products`
                        WHERE `productId`={$productsID}
                    ";
            $resultPriceAll = mysqli_query($link,$sql);
            $fetch_price = mysqli_fetch_assoc($resultPriceAll);
            $price = $fetch_price['price'];

            if(!isset($_SESSION['cart_id'])){
                $sqlTimeStamp = 
                "INSERT INTO carts(createdAt) 
                    VALUES (CURRENT_TIMESTAMP)
                ";
                $resultTimeStamp = mysqli_query($link,$sqlTimeStamp);
                $last_ID_timeStamp = $link->insert_id;
                $_SESSION['cart_id'] = $last_ID_timeStamp;
            } else {
                $last_ID_timeStamp = $_SESSION['cart_id'];
            }

            $sqlIntoCart = 
                "INSERT INTO cartItems(cartId, productId, price)
                    VALUES ({$last_ID_timeStamp}, {$productsID}, {$price} )
                ";
           
            $resultIntoCart = mysqli_query($link,$sqlIntoCart);
            $last_ID_intoCart = $link->insert_id;

            $sqlJoin = "SELECT * FROM cartItems INNER JOIN products ON cartItems.productId = products.productId WHERE cartItems.cartItemId = {$last_ID_intoCart}";
            $resultJoin = mysqli_query($link,$sqlJoin);
            $fetch_join = mysqli_fetch_all($resultJoin, MYSQLI_ASSOC);
            $objectAdd = $fetch_join[0];
            $response['body'] = $objectAdd; 
            send($response);
        }
    }  

    if($request['method'] === 'DELETE') {
        if(!isset($request['query']['cartItemId']) && !isset($request['query']['productId'])){
            throw new ApiError("Require cartItemId or productId", 400);
            $response['query'] = [];
            send($response);
        } elseif (isset($request['query']['cartItemId'])){
            $link = get_db_link();
            $cartItemID = intval($request['query']['cartItemId']);
            $sqlRemove = "DELETE FROM `cartItems` WHERE `cartItemId` = {$cartItemID}"; 
            $removeItem = mysqli_query($link,$sqlRemove);
            $fetch_remove = mysqli_fetch_all($removeItem, MYSQLI_ASSOC);

            $sqlUpdate = "SELECT * FROM cartItems JOIN products ON cartItems.productId = products.productId WHERE cartItems.cartId = {$_SESSION['cart_id']}";
            $updateCart = mysqli_query($link,$sqlUpdate);
            $fetch_upadte = mysqli_fetch_all($updateCart, MYSQLI_ASSOC);
            $response['body']= $fetch_upadte;
            send($response);
        } elseif (isset($request['query']['productId'])){
            $link = get_db_link();
            $productsId= intval($request['query']['productId']);
            $sqlRemoveAll = "DELETE FROM `cartItems` WHERE `productId` = {$productsId}"; 
            $removeAllItem = mysqli_query($link,$sqlRemoveAll);
            $fetch_removeAll = mysqli_fetch_all($removeAllItem, MYSQLI_ASSOC);

            $sqlUpdate = "SELECT * FROM cartItems JOIN products ON cartItems.productId = products.productId WHERE cartItems.cartId = {$_SESSION['cart_id']}";
            $updateCart = mysqli_query($link,$sqlUpdate);
            $fetch_upadte = mysqli_fetch_all($updateCart, MYSQLI_ASSOC);
            $response['body']= $fetch_upadte;
            send($response);
        }
    }
?>
