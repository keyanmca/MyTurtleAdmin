<? include 'header.php'; ?>
<input type="hidden" id="{{id}}-data" name="{{id}}-data" class='input-block-level pricelist-data' value='{{{data}}}'/>
<div class="control-group">
    <label class="control-label">{{ term_title }}</label>
    <div class="controls">
        <input type="text" id="title" name="title" class="input-block-level" placeholder="{{turtle_pricelist_title_alt}}"/>
    </div>
    <hr/>
</div>

<div class="categories"></div>
<div class="control-group">
    <div class="controls">
        <button id="add-category" class="btn btn-small">{{ turtle_pricelist_add_category }}</button>
    </div>
</div>
<script>
    $(document).ready(function(){
        buildPriceList($('#{{id}}-data').val(), $('#{{id}}-data').parents('.turtle_pricelist'));
    });
</script>
<? include 'footer.php'; ?>