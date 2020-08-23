<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Товар</title>
    <link rel="shortcut icon" type="image/svg" href="img/Logo 4.svg">
    <link rel="stylesheet" href="css/headFooter.css">
    <link rel="stylesheet" href="css/tovar.css">
    <!-- Required Core Stylesheet -->
    <link rel="stylesheet" href="libs/glide-3.4.1/dist/css/glide.core.min.css">

<!-- Optional Theme Stylesheet -->
    <link rel="stylesheet" href="libs/glide-3.4.1/dist/css/glide.theme.min.css">

</head>

<body>
    <?php require_once "blocks/header.php" ?>


<div class="main">
    <!------------------КАРУСЕЛЬ---------------->
        <div class="wrapper">
            <div class="slider">
                <div class="slider__item">
                    <img src="img/1.jpg" alt="">  <!--(data-lazy)-->
                </div>
                <div class="slider__item">
                    <img src="img/2.jpg" alt="">
                </div>
                <div class="slider__item">
                    <img src="img/3.jpg" alt="">
                </div>
                <div class="slider__item">
                    <img src="img/4.jpg" alt="">
                </div>
            </div>
        </div>

    <div class="container">
        <table>
                <tbody>
                    <tr>
                        <td>описание: </td>
                        <td>эту картину я создавал будучи замешен в своих чувствах.</td>
                    </tr>
                    <tr>
                        <td>матеиал:</td>
                        <td>бумага, графит</td>
                    </tr>
                    <tr>
                        <td>размер:</td>
                        <td>40x30 мм</td>
                    </tr>
                </tbody>
            </table>
            <button>Добавить в корзину</button>
    </div>
</div>

    <?php require_once "blocks/footer.php" ?>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>