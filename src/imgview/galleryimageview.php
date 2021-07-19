<head>
    <title>Image Viewer</title>
    <link rel="stylesheet" href="src/imageview.css">
    <link rel="shortcut icon" href="/img/icons/media.png" type="image/x-icon">

    <meta property="og:type" content="website">
	<meta property="og:title" content="Image Viewer">
	<meta property="og:description" content="A simple image viewer written in 20 minutes using PHP">
	<meta property="og:url" content="http://floppydisk.thisproject.space/">
	<meta property="og:image" content="/img/icons/media.png">
</head>

<?php
$img = htmlspecialchars($_GET["file"]);
echo "<h1>" . $img . "</h1>";
?>
<a href="wwc.html">Get me outta here!</a>
<hr>
<?php
$image = file_get_contents("./img/gallery/" . $img);
header("Content-type: image/png");
echo '<img src="./img/gallery/' . $img . '">';
?>