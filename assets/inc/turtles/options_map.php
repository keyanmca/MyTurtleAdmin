<? include 'header.php'; ?>
<div class="control-group">
    <label class="control-label" for="{{id}}-location">{{term.location}}</label>
    <div class="controls">
        <select class='map-location-type'>
            {{map-options}}
        </select>
        <input type="text" id="{{id}}-location" name="{{id}}-location" placeholder="{{turtle.mapbox_alt}}" class='input-block-level {{custom_hide}} map-location location' value="{{location}}" style='margin-top: 10px'/>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="{{id}}-limit">{{turtles.option_zoom}}</label>
    <div class="controls">
        <select name="{{id}}-zoom" class='input-small'>
            {{zoom-options}}
        </select>
    </div>
</div>
<? include 'footer.php'; ?>