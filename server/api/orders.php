<?php 
    if($request['method'] === 'POST') {
        $cart = get_cart();
        $bodyInfos = getBodyInfos($request);
        $placeOrder = placeOrder($bodyInfos, $cart);
        $response['body'] = $placeOrder;
        send($response);
    }

    if($request['method'] === 'DELETE') {
        $cart = get_cart();
        $itemToRemove = getBodyInfosForRemove($request);
        $remove = removeItems($itemToRemove, $cart);
        $response['body'] = $remove;
        send($response);
    }

    //REMOVE ITEMS IN CART
    function getBodyInfosForRemove($request) {
        if (!isset($request['body']['cartItemId'])) throw new ApiError("'cartItemId' not received", 400);

        return $request['body']['cartItemId'];
    }

    function removeItems($itemToRemove, $cart) {
        $link = get_db_link();
        $sqlRemove = "DELETE FROM `cartItems` WHERE cartItemId=$itemToRemove";
        $removal= mysqli_query($link,$sqlRemove);
        $fetch_removal = mysqli_fetch_assoc($removal);

        $sqlCart = 
        "SELECT * FROM products JOIN cartItems ON products.productId = cartItems.productId WHERE cartItems.cartId =$cart";
        $resultCart = mysqli_query($link,$sqlCart);
        $fetch_Cart = mysqli_fetch_all($resultCart, MYSQLI_ASSOC);
        return $fetch_Cart;
    }

    //PLACE ORDER
    function get_cart(){
        if (isset($_SESSION['cart_id'])) {
            $cartID = $_SESSION['cart_id'];
            return $cartID;
        }
            throw new ApiError("No cart exists", 404);
    }

    function getBodyInfos($request) {
        if (!isset($request['body']['name'])) throw new ApiError("'name' not received", 400);
        if (!isset($request['body']['creditCard'])) throw new ApiError("'creditCard' not received", 400);
        if (!isset($request['body']['shippingAddress'])) throw new ApiError("'shippingAddress' not received", 400);

        return [
            'name' => $request['body']['name'],
            'creditCard' => $request['body']['creditCard'],
            'shippingAddress' => $request['body']['shippingAddress']
        ];
    }

    function placeOrder($bodyInfos, $cart) {
            $link = get_db_link();
            $sqlInsertInfos = 
                "INSERT INTO `orders`(`cartId`, `name`, `creditCard`, `shippingAddress`)
                    VALUES (?,?,?,?)
                ";

            $statement = mysqli_prepare($link, $sqlInsertInfos);
            $name = $bodyInfos['name'];
            $credit = $bodyInfos['creditCard'];
            $address = $bodyInfos['shippingAddress'];

            mysqli_stmt_bind_param($statement, 'isis', $cart, $name, $credit, $address);
            mysqli_stmt_execute($statement);
            $insertId = $link->insert_id;
            
            if(empty($insertId)){
                throw new ApiError ("Fail to insert", 400);
            } else {
                unset($_SESSION['cart_id']);
                return $insertId;
            }
            
        
    }

?>
