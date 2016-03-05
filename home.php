<?php get_header(); ?>

<section class="page">
  <div class="home-intro">
    <h1><?php echo $mattwp['title'] ?></h1>
    <h2><?php echo $mattwp['message'] ?></h2>
  </div>
</section>

<div class="fadeinModal hide">
  <a href="#" class="closeModal"><i class="fa fa-remove"></i></a>
  <div class="home-intro">
    <h2>Kontakt</h2>
    <div class="description"><?php echo $mattwp['contact'] ?></div>
  </div>
</div>

<?php get_footer(); ?>