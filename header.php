<?php
  global $mattwp;
?>
<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php echo $mattwp['meta_description'] ?>">
  <meta name="author" content="<?php echo $mattwp['meta_author'] ?>">

  <title><?php echo bloginfo('name'); ?></title>

  <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="<?php echo MATTWP_THEME ?>assets/dist/styles/main.min.css">

  <meta property="og:title" content="<?php echo bloginfo('name') ?>" />
  <meta property="og:type" content="<?php echo $mattwp['og_type'] ?>" />
  <meta property="og:url" content="<?php echo $mattwp['og_url'] ?>" />
  <meta property="og:image" content="<?php echo $mattwp['og_image'] ?>" />
  <meta property="fb:app_id" content="<?php echo $mattwp['og_fb_app_id'] ?>">

  <?php wp_head(); ?>
</head>
<body>
  <nav>
    <a href="<?php echo home_url(); ?>" class="logo"><img src="<?php echo $mattwp['logo'] ?>" alt="logo"></a>
    <div class="nav-right">
      <a href="#"><i id="menuRemove" class="fa fa-remove"></i><i id="menuBars" class="fa fa-bars animate slideInRight" data-wow-duration="1s" data-wow-delay="1.5s"></i></a>
    </div>
    <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
  </nav>