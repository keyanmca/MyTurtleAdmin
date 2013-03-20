<div class='row'>
    <div class='span3'>
        <ul class="pager backlink">
            <li class="previous">
                <a href="<?= site_url($infoscreen->alias); ?>">&larr; Back</a>
            </li>
        </ul>
    </div>
    <div class='span9'>
        <h3>
            <?= $infoscreen->title; ?>&nbsp;<i class='icon-chevron-right'></i>&nbsp;<?= lang('term.left') ?>
        </h3>
    </div>
</div>
<div class='row'>
	<div class='turtle-chooser span3'>
		<h4><?= lang('turtles.available') ?></h4>
		<? foreach($turtle_types as $turtle_type){ ?>
		<div id="<?=$turtle_type->type ?>" class='turtle draggable'>
			<?= $turtle_type->name; ?>
		</div>
		<? } ?>
		<span class='note'><?= lang('turtles.drag_to_screen') ?></span>
	</div>
	<div class='turtle-holder span9'>
		<h4><?= lang('turtles.screen_title') ?></h4>
		<nav id='pane-selector'>
			<ul>
				<?
				if(count($panes) > 1){
					$active_class = "class='active'";
					foreach($panes as $pane){
						echo "<li id='pane-selector_". $pane->id ."' ". $active_class .">&bull;</li>";
						$active_class = "";
					}
				}
				?>
			</ul>
		</nav>
		<?
		$extra_class = "";
		foreach($panes as $pane){
			echo "<div id='pane_".$pane->id."' class='turtle-area droppable sortable ".$extra_class."'>";
			foreach($turtle_instances as $turtle){
				if($pane->id == $turtle->pane_id){
					echo $turtle->content;
				}
			}
			echo "</div>";
			$extra_class = "hide";
		}
		?>
		<span class='note'><?= lang('turtles.drag_to_sort') ?></span>
	</div>
</div>
<script type='text/javascript'>
    var from = new Object();
    from.lat = <?php echo $infoscreen->latitude ?>;
    from.lon = <?php echo $infoscreen->longitude ?>;
</script>