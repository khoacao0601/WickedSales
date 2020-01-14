<?php

  if ($request['method'] === 'GET')  {
    if (isset($_GET['productId']))  {
          $link = get_db_link();
          $productsID = $request['query']['productId'];
          if(!is_numeric($productsID) || $productsID <= 0){
            throw new ApiError('Bad Request', 400);
          }
          $sql = "
            SELECT `productId`,
                    `name`,
                    `price`,
                    `image`,
                    `shortDescription`,
                    `longDescription`
                  FROM `products` WHERE `productId`={$productsID}
          ";
          $result = $link->query($sql);
          $products = $result->fetch_all(MYSQLI_ASSOC);
          $objectProduct = $products[0];
          $response['body']= $objectProduct;
          if(empty($products)){
            throw new ApiError('Empty', 404);
          }
          send($response);
        } else {
          $link = get_db_link();
          $sql = '
            SELECT `productId`,
                    `name`,
                    `price`,
                    `image`,
                    `shortDescription`
                  FROM `products`
          ';
          $result = $link->query($sql);
          $products = $result->fetch_all(MYSQLI_ASSOC);
          $response['body']= $products;
          send($response);
        }
  }

?>