<?php get_header(); ?>
<div class="blog_title">
<div class="ta-c"><h2 class="title01 line-h5">ブログ</h2></div>
</div>

<div class="body_wrap">
<div class="content_wrap">

<?php if(have_posts()) : while (have_posts()) : the_post(); ?>
<figure><?php the_post_thumbnail('medium'); ?></figure>
<p class="data"><?php echo get_the_date(); ?></data>
<h1 class="title"><?php the_title(); ?></h1>
<div class="txt"><?php the_content(); ?></div>
<?php endwhile; endif; ?>
	</div>
<?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>