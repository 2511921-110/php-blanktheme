<?php get_header(); ?>
<main>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <section>
        <?php the_title(); ?>
        <?php the_content(); ?>
      </section>
    </article>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>