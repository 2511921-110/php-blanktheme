<?php
/**
 * Template Name: トップページ */
?>
<?php get_header(); ?>
<main>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <section>
        <?php the_title(); ?>
        <?php the_content(); ?>
      </section>
    <?php endwhile; endif; ?>
  </article>
</main>
<?php get_footer(); ?>