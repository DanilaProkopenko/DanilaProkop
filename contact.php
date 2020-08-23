<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Котакты</title>
    <link rel="shortcut icon" type="image/svg" href="img/Logo 4.svg">
    <link rel="stylesheet" href="css/headFooter.css">
    <link rel="stylesheet" href="css/cart.css">
</head>
<body>
    
    <?php require_once "blocks/header.php" ?>

<div class="main">
    <div class="container">
        <div class="main-cart"> </div>
        <div class="email-field">
             <label for="ename" class="ename">Имя: </label><input type="text" id="ename"><br>
             <label for="email" class="email">e-mail:</label><input type="email" id="email"><br>
             <label for="ephone" class="ephone">Телефон: </label><input type="tel" id="ephone"><br>
             <label for="ephone" class="eadres">Адрес: </label><input type="text" id="eadres"><br>
             <p>
                 <button class="send-email">отправить</button>
             </p>
         </div>
    </div>
</div>
    
    <?php require_once "blocks/footer.php" ?>

  
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/cart.js"></script>
    
</body>
</html>