<?php


require_once "database.php";

$stmt = $con->prepare("SELECT * FROM country");
$stmt->execute();

$country = $stmt->fetchAll(PDO::FETCH_OBJ); //geeft array terug (lijst)
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <style>
        #menu {
            width: 200px;
        }

        #rand1 {
            border: 1px solid black;
        }

        #rand2 {
            border: 1px solid black;
        }

        #rand3 {
            border: 1px solid black;
        }
    </style>
</head>

<body>


    <table class="table table-striped">
        <thead class="table-dark">
            <th>Id</th>
            <th>Vlag</th>
            <th>Naam</th>
        </thead>
        <tbody>
            <?php

            echo "<br>";
            echo "<h2>Crud items in een tabel</h2>";
            echo "<br>";


            // Tabel
            foreach ($country as $c) {

                echo
                "<tr>
             <td>$c->id</td>
             <td><img src='plaatjes/$c->image_name' width = 50</td>
             <td>$c->name</td>
            </tr>";
            };

            ?>
        </tbody>
    </table>
    <?php

    echo "<div id='rand1'>";
    echo "<br>";
    echo "<h2>Crud items in een dropdown menu</h2>";
    echo "<br>";


    // dropdown
    echo '
            <select class="form-select">';

    foreach ($country as $c) {
        echo "<option class='menu' value=>$c->name</option>";
    }
    echo "</select>";
    echo "<br>";
    echo "</div>";
    ?>



    <br><br>
    <!-- radio buttons -->

    <?php
    echo "<div id='rand2'>";

    echo "<br>";
    echo "<h2>Crud items in radio buttons 1</h2>";
    echo "<br>";

    foreach ($country as $c) {
        echo "
                <input type='radio' id='radio' name='radio' value='vlag'/>
                <img src='plaatjes/$c->image_name' width = 50
                <label for='name'>$c->name</label>
            <br>
            <br><br>
            ";
    }
    echo "</div>";

    ?>


    <?php

    echo "<div id='rand3'>";


    echo "<br>";
    echo "<h2>Crud items in radio buttons 2</h2>";
    echo "<br>";

    foreach ($country as $c) {
        echo "
                <input type='radio' id='radio' name='drone' value='vlag' checked />
                <img src='plaatjes/$c->image_name' width = 50
                <label for='name'>$c->name</label>
            ";
    }
    echo "<br>";
    echo "<br>";
    echo "</div id='rand3'>";

    echo "<br>";
    echo "<br>";

    ?>


    <?php
    echo "<h2>Crud items in Bootstrap tabs</h2>";
    ?>


    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <?php

        foreach ($country as $c) {
            echo "
            <li class='nav-item' role='presentation'>
              <button class='nav-link' id='tab-$c->id' data-bs-toggle='tab' data-bs-target='#content-$c->id' type='button' role='tab' aria-controls='home' aria-selected='true'>$c->name</button>
         </li>";
        }

        ?>

    </ul>
    <div class="tab-content" id="myTabContent">

        <?php

        foreach ($country as $c) {
            echo "<div class='tab-pane fade' id='content-$c->id' role='tabpanel' aria-labelledby='profile-tab'><img src='plaatjes/$c->image_name'></div>";
        }

        ?>


</body>

</html>