!function(a){a(function(){a.support.transition=(function(){var b=(function(){var e=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in d){if(e.style[c]!==undefined){return d[c]}}}());return b&&{end:b}})()})}(window.jQuery);!function(b){var a=function(d,c){this.options=c;this.$element=b(d).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};a.prototype={constructor:a,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var c=this,d=b.Event("show");this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented()){return}this.isShown=true;this.escape();this.backdrop(function(){var e=b.support.transition&&c.$element.hasClass("fade");if(!c.$element.parent().length){c.$element.appendTo(document.body)}c.$element.show();if(e){c.$element[0].offsetWidth}c.$element.addClass("in").attr("aria-hidden",false);c.enforceFocus();e?c.$element.one(b.support.transition.end,function(){c.$element.focus().trigger("shown")}):c.$element.focus().trigger("shown")})},hide:function(d){d&&d.preventDefault();var c=this;d=b.Event("hide");this.$element.trigger(d);if(!this.isShown||d.isDefaultPrevented()){return}this.isShown=false;this.escape();b(document).off("focusin.modal");this.$element.removeClass("in").attr("aria-hidden",true);b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var c=this;b(document).on("focusin.modal",function(d){if(c.$element[0]!==d.target&&!c.$element.has(d.target).length){c.$element.focus()}})},escape:function(){var c=this;if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(d){d.which==27&&c.hide()})}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")}}},hideWithTransition:function(){var c=this,d=setTimeout(function(){c.$element.off(b.support.transition.end);c.hideModal()},500);this.$element.one(b.support.transition.end,function(){clearTimeout(d);c.hideModal()})},hideModal:function(c){this.$element.hide().trigger("hidden");this.backdrop()},removeBackdrop:function(){this.$backdrop.remove();this.$backdrop=null},backdrop:function(f){var e=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var c=b.support.transition&&d;this.$backdrop=b('<div class="modal-backdrop '+d+'" />').appendTo(document.body);this.$backdrop.click(this.options.backdrop=="static"?b.proxy(this.$element[0].focus,this.$element[0]):b.proxy(this.hide,this));if(c){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");c?this.$backdrop.one(b.support.transition.end,f):f()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(this.removeBackdrop,this)):this.removeBackdrop()}else{if(f){f()}}}}};b.fn.modal=function(c){return this.each(function(){var f=b(this),e=f.data("modal"),d=b.extend({},b.fn.modal.defaults,f.data(),typeof c=="object"&&c);if(!e){f.data("modal",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}else{if(d.show){e.show()}}})};b.fn.modal.defaults={backdrop:true,keyboard:true,show:true};b.fn.modal.Constructor=a;b(document).on("click.modal.data-api",'[data-toggle="modal"]',function(h){var g=b(this),d=g.attr("href"),c=b(g.attr("data-target")||(d&&d.replace(/.*(?=#[^\s]+$)/,""))),f=c.data("modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},c.data(),g.data());h.preventDefault();c.modal(f).one("hide",function(){g.focus()})})}(window.jQuery);!function(e){var b="[data-toggle=dropdown]",a=function(g){var f=e(g).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){f.parent().removeClass("open")})};a.prototype={constructor:a,toggle:function(i){var h=e(this),g,f;if(h.is(".disabled, :disabled")){return}g=d(h);f=g.hasClass("open");c();if(!f){g.toggleClass("open");h.focus()}return false},keydown:function(k){var j,l,f,i,h,g;if(!/(38|40|27)/.test(k.keyCode)){return}j=e(this);k.preventDefault();k.stopPropagation();if(j.is(".disabled, :disabled")){return}i=d(j);h=i.hasClass("open");if(!h||(h&&k.keyCode==27)){return j.click()}l=e("[role=menu] li:not(.divider) a",i);if(!l.length){return}g=l.index(l.filter(":focus"));if(k.keyCode==38&&g>0){g--}if(k.keyCode==40&&g<l.length-1){g++}if(!~g){g=0}l.eq(g).focus()}};function c(){e(b).each(function(){d(e(this)).removeClass("open")})}function d(h){var f=h.attr("data-target"),g;if(!f){f=h.attr("href");f=f&&/#/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,"")}g=e(f);g.length||(g=h.parent());return g}e.fn.dropdown=function(f){return this.each(function(){var h=e(this),g=h.data("dropdown");if(!g){h.data("dropdown",(g=new a(this)))}if(typeof f=="string"){g[f].call(h)}})};e.fn.dropdown.Constructor=a;e(document).on("click.dropdown.data-api touchstart.dropdown.data-api",c).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(f){f.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",b,a.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)}(window.jQuery);!function(b){function a(f,e){var g=b.proxy(this.process,this),c=b(f).is("body")?b(window):b(f),d;this.options=b.extend({},b.fn.scrollspy.defaults,e);this.$scrollElement=c.on("scroll.scroll-spy.data-api",g);this.selector=(this.options.target||((d=b(f).attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";this.$body=b("body");this.refresh();this.process()}a.prototype={constructor:a,refresh:function(){var c=this,d;this.offsets=b([]);this.targets=b([]);d=this.$body.find(this.selector).map(function(){var f=b(this),e=f.data("target")||f.attr("href"),g=/^#\w/.test(e)&&b(e);return(g&&g.length&&[[g.position().top,e]])||null}).sort(function(f,e){return f[0]-e[0]}).each(function(){c.offsets.push(this[0]);c.targets.push(this[1])})},process:function(){var h=this.$scrollElement.scrollTop()+this.options.offset,e=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,g=e-this.$scrollElement.height(),f=this.offsets,c=this.targets,j=this.activeTarget,d;if(h>=g){return j!=(d=c.last()[0])&&this.activate(d)}for(d=f.length;d--;){j!=c[d]&&h>=f[d]&&(!f[d+1]||h<=f[d+1])&&this.activate(c[d])}},activate:function(e){var d,c;this.activeTarget=e;b(this.selector).parent(".active").removeClass("active");c=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]';d=b(c).parent("li").addClass("active");if(d.parent(".dropdown-menu").length){d=d.closest("li.dropdown").addClass("active")}d.trigger("activate")}};b.fn.scrollspy=function(c){return this.each(function(){var f=b(this),e=f.data("scrollspy"),d=typeof c=="object"&&c;if(!e){f.data("scrollspy",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.scrollspy.Constructor=a;b.fn.scrollspy.defaults={offset:10};b(window).on("load",function(){b('[data-spy="scroll"]').each(function(){var c=b(this);c.scrollspy(c.data())})})}(window.jQuery);!function(b){var a=function(c){this.element=b(c)};a.prototype={constructor:a,show:function(){var i=this.element,f=i.closest("ul:not(.dropdown-menu)"),d=i.attr("data-target"),g,c,h;if(!d){d=i.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}if(i.parent("li").hasClass("active")){return}g=f.find(".active:last a")[0];h=b.Event("show",{relatedTarget:g});i.trigger(h);if(h.isDefaultPrevented()){return}c=b(d);this.activate(i.parent("li"),f);this.activate(c,c.parent(),function(){i.trigger({type:"shown",relatedTarget:g})})},activate:function(e,d,h){var c=d.find("> .active"),g=h&&b.support.transition&&c.hasClass("fade");function f(){c.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");e.addClass("active");if(g){e[0].offsetWidth;e.addClass("in")}else{e.removeClass("fade")}if(e.parent(".dropdown-menu")){e.closest("li.dropdown").addClass("active")}h&&h()}g?c.one(b.support.transition.end,f):f();c.removeClass("in")}};b.fn.tab=function(c){return this.each(function(){var e=b(this),d=e.data("tab");if(!d){e.data("tab",(d=new a(this)))}if(typeof c=="string"){d[c]()}})};b.fn.tab.Constructor=a;b(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault();b(this).tab("show")})}(window.jQuery);!function(b){var a=function(d,c){this.init("tooltip",d,c)};a.prototype={constructor:a,init:function(f,e,d){var g,c;this.type=f;this.$element=b(e);this.options=this.getOptions(d);this.enabled=true;if(this.options.trigger=="click"){this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this))}else{if(this.options.trigger!="manual"){g=this.options.trigger=="hover"?"mouseenter":"focus";c=this.options.trigger=="hover"?"mouseleave":"blur";this.$element.on(g+"."+this.type,this.options.selector,b.proxy(this.enter,this));this.$element.on(c+"."+this.type,this.options.selector,b.proxy(this.leave,this))}}this.options.selector?(this._options=b.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()},getOptions:function(c){c=b.extend({},b.fn[this.type].defaults,c,this.$element.data());if(c.delay&&typeof c.delay=="number"){c.delay={show:c.delay,hide:c.delay}}return c},enter:function(d){var c=b(d.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show){return c.show()}clearTimeout(this.timeout);c.hoverState="in";this.timeout=setTimeout(function(){if(c.hoverState=="in"){c.show()}},c.options.delay.show)},leave:function(d){var c=b(d.currentTarget)[this.type](this._options).data(this.type);if(this.timeout){clearTimeout(this.timeout)}if(!c.options.delay||!c.options.delay.hide){return c.hide()}c.hoverState="out";this.timeout=setTimeout(function(){if(c.hoverState=="out"){c.hide()}},c.options.delay.hide)},show:function(){var g,c,i,e,h,d,f;if(this.hasContent()&&this.enabled){g=this.tip();this.setContent();if(this.options.animation){g.addClass("fade")}d=typeof this.options.placement=="function"?this.options.placement.call(this,g[0],this.$element[0]):this.options.placement;c=/in/.test(d);g.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element);i=this.getPosition(c);e=g[0].offsetWidth;h=g[0].offsetHeight;switch(c?d.split(" ")[1]:d){case"bottom":f={top:i.top+i.height,left:i.left+i.width/2-e/2};break;case"top":f={top:i.top-h,left:i.left+i.width/2-e/2};break;case"left":f={top:i.top+i.height/2-h/2,left:i.left-e};break;case"right":f={top:i.top+i.height/2-h/2,left:i.left+i.width};break}g.offset(f).addClass(d).addClass("in")}},setContent:function(){var d=this.tip(),c=this.getTitle();d.find(".tooltip-inner")[this.options.html?"html":"text"](c);d.removeClass("fade in top bottom left right")},hide:function(){var c=this,d=this.tip();d.removeClass("in");function e(){var f=setTimeout(function(){d.off(b.support.transition.end).detach()},500);d.one(b.support.transition.end,function(){clearTimeout(f);d.detach()})}b.support.transition&&this.$tip.hasClass("fade")?e():d.detach();return this},fixTitle:function(){var c=this.$element;if(c.attr("title")||typeof(c.attr("data-original-title"))!="string"){c.attr("data-original-title",c.attr("title")||"").removeAttr("title")}},hasContent:function(){return this.getTitle()},getPosition:function(c){return b.extend({},(c?{top:0,left:0}:this.$element.offset()),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,c=this.$element,d=this.options;e=c.attr("data-original-title")||(typeof d.title=="function"?d.title.call(c[0]):d.title);return e},tip:function(){return this.$tip=this.$tip||b(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(d){var c=b(d.currentTarget)[this.type](this._options).data(this.type);c[c.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};b.fn.tooltip=function(c){return this.each(function(){var f=b(this),e=f.data("tooltip"),d=typeof c=="object"&&c;if(!e){f.data("tooltip",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.tooltip.Constructor=a;b.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:false}}(window.jQuery);!function(b){var a=function(d,c){this.init("popover",d,c)};a.prototype=b.extend({},b.fn.tooltip.Constructor.prototype,{constructor:a,setContent:function(){var e=this.tip(),d=this.getTitle(),c=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](d);e.find(".popover-content > *")[this.options.html?"html":"text"](c);e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var d,c=this.$element,e=this.options;d=c.attr("data-content")||(typeof e.content=="function"?e.content.call(c[0]):e.content);return d},tip:function(){if(!this.$tip){this.$tip=b(this.options.template)}return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});b.fn.popover=function(c){return this.each(function(){var f=b(this),e=f.data("popover"),d=typeof c=="object"&&c;if(!e){f.data("popover",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.popover.Constructor=a;b.fn.popover.defaults=b.extend({},b.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function(b){var a=function(d,c){this.options=b.extend({},b.fn.affix.defaults,c);this.$window=b(window).on("scroll.affix.data-api",b.proxy(this.checkPosition,this)).on("click.affix.data-api",b.proxy(function(){setTimeout(b.proxy(this.checkPosition,this),1)},this));this.$element=b(d);this.checkPosition()};a.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var g=b(document).height(),i=this.$window.scrollTop(),c=this.$element.offset(),j=this.options.offset,e=j.bottom,f=j.top,h="affix affix-top affix-bottom",d;if(typeof j!="object"){e=f=j}if(typeof f=="function"){f=j.top()}if(typeof e=="function"){e=j.bottom()}d=this.unpin!=null&&(i+this.unpin<=c.top)?false:e!=null&&(c.top+this.$element.height()>=g-e)?"bottom":f!=null&&i<=f?"top":false;if(this.affixed===d){return}this.affixed=d;this.unpin=d=="bottom"?c.top-i:null;this.$element.removeClass(h).addClass("affix"+(d?"-"+d:""))};b.fn.affix=function(c){return this.each(function(){var f=b(this),e=f.data("affix"),d=typeof c=="object"&&c;if(!e){f.data("affix",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.affix.Constructor=a;b.fn.affix.defaults={offset:0};b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var d=b(this),c=d.data();c.offset=c.offset||{};c.offsetBottom&&(c.offset.bottom=c.offsetBottom);c.offsetTop&&(c.offset.top=c.offsetTop);d.affix(c)})})}(window.jQuery);!function(c){var b='[data-dismiss="alert"]',a=function(d){c(d).on("click",b,this.close)};a.prototype.close=function(i){var h=c(this),f=h.attr("data-target"),g;if(!f){f=h.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}g=c(f);i&&i.preventDefault();g.length||(g=h.hasClass("alert")?h:h.parent());g.trigger(i=c.Event("close"));if(i.isDefaultPrevented()){return}g.removeClass("in");function d(){g.trigger("closed").remove()}c.support.transition&&g.hasClass("fade")?g.on(c.support.transition.end,d):d()};c.fn.alert=function(d){return this.each(function(){var f=c(this),e=f.data("alert");if(!e){f.data("alert",(e=new a(this)))}if(typeof d=="string"){e[d].call(f)}})};c.fn.alert.Constructor=a;c(document).on("click.alert.data-api",b,a.prototype.close)}(window.jQuery);!function(b){var a=function(d,c){this.$element=b(d);this.options=b.extend({},b.fn.button.defaults,c)};a.prototype.setState=function(f){var h="disabled",c=this.$element,e=c.data(),g=c.is("input")?"val":"html";f=f+"Text";e.resetText||c.data("resetText",c[g]());c[g](e[f]||this.options[f]);setTimeout(function(){f=="loadingText"?c.addClass(h).attr(h,h):c.removeClass(h).removeAttr(h)},0)};a.prototype.toggle=function(){var c=this.$element.closest('[data-toggle="buttons-radio"]');c&&c.find(".active").removeClass("active");this.$element.toggleClass("active")};b.fn.button=function(c){return this.each(function(){var f=b(this),e=f.data("button"),d=typeof c=="object"&&c;if(!e){f.data("button",(e=new a(this,d)))}if(c=="toggle"){e.toggle()}else{if(c){e.setState(c)}}})};b.fn.button.defaults={loadingText:"loading..."};b.fn.button.Constructor=a;b(document).on("click.button.data-api","[data-toggle^=button]",function(d){var c=b(d.target);if(!c.hasClass("btn")){c=c.closest(".btn")}c.button("toggle")})}(window.jQuery);!function(a){var b=function(d,c){this.$element=a(d);this.options=a.extend({},a.fn.collapse.defaults,c);if(this.options.parent){this.$parent=a(this.options.parent)}this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var c=this.$element.hasClass("width");return c?"width":"height"},show:function(){var f,c,e,d;if(this.transitioning){return}f=this.dimension();c=a.camelCase(["scroll",f].join("-"));e=this.$parent&&this.$parent.find("> .accordion-group > .in");if(e&&e.length){d=e.data("collapse");if(d&&d.transitioning){return}e.collapse("hide");d||e.data("collapse",null)}this.$element[f](0);this.transition("addClass",a.Event("show"),"shown");a.support.transition&&this.$element[f](this.$element[0][c])},hide:function(){var c;if(this.transitioning){return}c=this.dimension();this.reset(this.$element[c]());this.transition("removeClass",a.Event("hide"),"hidden");this.$element[c](0)},reset:function(c){var d=this.dimension();this.$element.removeClass("collapse")[d](c||"auto")[0].offsetWidth;this.$element[c!==null?"addClass":"removeClass"]("collapse");return this},transition:function(g,d,e){var f=this,c=function(){if(d.type=="show"){f.reset()}f.transitioning=0;f.$element.trigger(e)};this.$element.trigger(d);if(d.isDefaultPrevented()){return}this.transitioning=1;this.$element[g]("in");a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,c):c()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};a.fn.collapse=function(c){return this.each(function(){var f=a(this),e=f.data("collapse"),d=typeof c=="object"&&c;if(!e){f.data("collapse",(e=new b(this,d)))}if(typeof c=="string"){e[c]()}})};a.fn.collapse.defaults={toggle:true};a.fn.collapse.Constructor=b;a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(h){var g=a(this),c,f=g.attr("data-target")||h.preventDefault()||(c=g.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),d=a(f).data("collapse")?"toggle":g.data();g[a(f).hasClass("in")?"addClass":"removeClass"]("collapsed");a(f).collapse(d)})}(window.jQuery);!function(a){var b=function(d,c){this.$element=a(d);this.options=c;this.options.slide&&this.slide(this.options.slide);this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(c){if(!c){this.paused=false}this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval));return this},to:function(g){var c=this.$element.find(".item.active"),d=c.parent().children(),e=d.index(c),f=this;if(g>(d.length-1)||g<0){return}if(this.sliding){return this.$element.one("slid",function(){f.to(g)})}if(e==g){return this.pause().cycle()}return this.slide(g>e?"next":"prev",a(d[g]))},pause:function(c){if(!c){this.paused=true}if(this.$element.find(".next, .prev").length&&a.support.transition.end){this.$element.trigger(a.support.transition.end);this.cycle()}clearInterval(this.interval);this.interval=null;return this},next:function(){if(this.sliding){return}return this.slide("next")},prev:function(){if(this.sliding){return}return this.slide("prev")},slide:function(j,d){var l=this.$element.find(".item.active"),c=d||l[j](),i=this.interval,k=j=="next"?"left":"right",f=j=="next"?"first":"last",g=this,h;this.sliding=true;i&&this.pause();c=c.length?c:this.$element.find(".item")[f]();h=a.Event("slide",{relatedTarget:c[0]});if(c.hasClass("active")){return}if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(h);if(h.isDefaultPrevented()){return}c.addClass(j);c[0].offsetWidth;l.addClass(k);c.addClass(k);this.$element.one(a.support.transition.end,function(){c.removeClass([j,k].join(" ")).addClass("active");l.removeClass(["active",k].join(" "));g.sliding=false;setTimeout(function(){g.$element.trigger("slid")},0)})}else{this.$element.trigger(h);if(h.isDefaultPrevented()){return}l.removeClass("active");c.addClass("active");this.sliding=false;this.$element.trigger("slid")}i&&this.cycle();return this}};a.fn.carousel=function(c){return this.each(function(){var g=a(this),f=g.data("carousel"),d=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),e=typeof c=="string"?c:d.slide;if(!f){g.data("carousel",(f=new b(this,d)))}if(typeof c=="number"){f.to(c)}else{if(e){f[e]()}else{if(d.interval){f.cycle()}}}})};a.fn.carousel.defaults={interval:5000,pause:"hover"};a.fn.carousel.Constructor=b;a(document).on("click.carousel.data-api","[data-slide]",function(h){var g=a(this),d,c=a(g.attr("data-target")||(d=g.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},c.data(),g.data());c.carousel(f);h.preventDefault()})}(window.jQuery);!function(a){var b=function(d,c){this.$element=a(d);this.options=a.extend({},a.fn.typeahead.defaults,c);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.$menu=a(this.options.menu).appendTo("body");this.source=this.options.source;this.shown=false;this.listen()};b.prototype={constructor:b,select:function(){var c=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(c)).change();return this.hide()},updater:function(c){return c},show:function(){var c=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});this.$menu.css({top:c.top+c.height,left:c.left});this.$menu.show();this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(d){var c;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source;return c?this.process(c):this},process:function(c){var d=this;c=a.grep(c,function(e){return d.matcher(e)});c=this.sorter(c);if(!c.length){return this.shown?this.hide():this}return this.render(c.slice(0,this.options.items)).show()},matcher:function(c){return ~c.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var f=[],d=[],c=[],g;while(g=e.shift()){if(!g.toLowerCase().indexOf(this.query.toLowerCase())){f.push(g)}else{if(~g.indexOf(this.query)){d.push(g)}else{c.push(g)}}}return f.concat(d,c)},highlighter:function(c){var d=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return c.replace(new RegExp("("+d+")","ig"),function(e,f){return"<strong>"+f+"</strong>"})},render:function(c){var d=this;c=a(c).map(function(e,f){e=a(d.options.item).attr("data-value",f);e.find("a").html(d.highlighter(f));return e[0]});c.first().addClass("active");this.$menu.html(c);return this},next:function(d){var e=this.$menu.find(".active").removeClass("active"),c=e.next();if(!c.length){c=a(this.$menu.find("li")[0])}c.addClass("active")},prev:function(d){var e=this.$menu.find(".active").removeClass("active"),c=e.prev();if(!c.length){c=this.$menu.find("li").last()}c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",a.proxy(this.keydown,this))}this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},eventSupported:function(c){var d=c in this.$element;if(!d){this.$element.setAttribute(c,"return;");d=typeof this.$element[c]==="function"}return d},move:function(c){if(!this.shown){return}switch(c.keyCode){case 9:case 13:case 27:c.preventDefault();break;case 38:c.preventDefault();this.prev();break;case 40:c.preventDefault();this.next();break}c.stopPropagation()},keydown:function(c){this.suppressKeyPressRepeat=!~a.inArray(c.keyCode,[40,38,9,13,27]);this.move(c)},keypress:function(c){if(this.suppressKeyPressRepeat){return}this.move(c)},keyup:function(c){switch(c.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.lookup()}c.stopPropagation();c.preventDefault()},blur:function(d){var c=this;setTimeout(function(){c.hide()},150)},click:function(c){c.stopPropagation();c.preventDefault();this.select()},mouseenter:function(c){this.$menu.find(".active").removeClass("active");a(c.currentTarget).addClass("active")}};a.fn.typeahead=function(c){return this.each(function(){var f=a(this),e=f.data("typeahead"),d=typeof c=="object"&&c;if(!e){f.data("typeahead",(e=new b(this,d)))}if(typeof c=="string"){e[c]()}})};a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};a.fn.typeahead.Constructor=b;a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(d){var c=a(this);if(c.data("typeahead")){return}d.preventDefault();c.typeahead(c.data())})}(window.jQuery);var pathname=window.location.pathname;var sortableIn=0;$(".turtle-area.sortable").sortable({cursor:"pointer",update:sort_turtles,receive:function(b,c){if(sortableIn==1){var a=c.item;var e=$(this);var d=a.attr("id");var f=e.attr("id").split("_")[1];$(".turtle",e).html("<div style='padding:20px;'><i class='loading'></i> Adding turtle </div>");$.ajax({url:pathname+"/create",dataType:"html",type:"POST",data:{type:d,pane:f},success:function(h){var g=$(h);g.hide();$(".turtle",e).replaceWith(g);bind_event_to_turtles();g.slideDown(400);$(".turtle-area.sortable").sortable("refresh")},error:function(h,g){alert("Could not create turtle: "+g)}})}},over:function(a,b){sortableIn=1},out:function(a,b){sortableIn=0}});function sort_turtles(c,d){var a=$(".turtle-area.sortable").sortable("toArray");for(var b=0;b<a.length;b++){a[b]=a[b].split("_")[1]}$.ajax({url:pathname+"/sort",type:"POST",data:{order:a}})}$(".turtle-chooser .draggable").draggable({revert:true,helper:function(a){helper=$(a.target).clone();helper.css("padding","30px");helper.css("min-width","100px");helper.css("line-height","0px");helper.css("display","block");return helper},stack:".turtle-chooser .turtle",connectToSortable:".turtle-area.sortable"});$("#pane-selector li").on("click",function(b){var a=$(this).attr("id").split("_")[1];if(!$(this).hasClass("active")){$("#pane-selector li").removeClass("active");$(this).addClass("active");$(".turtle-area").fadeOut(0);$("#pane_"+a).fadeIn()}});function bind_event_to_turtles(){$(".delijn-location").autocomplete({minLength:4,source:function(b,a){$.ajax({url:"http://data.irail.be/DeLijn/Stations.json",type:"GET",dataType:"json",data:{name:b.term},success:function(c){a($.map(c.Stations,function(d){return{label:d.name,value:d.name}}))}})}});$(".turtle_instance .title").off().on("click",function(){$(".autocomplete").autocomplete("close");$(".edit_area",$(this).parent()).slideToggle(200)});$(".turtle_instance form").off().on("submit",function(a){a.preventDefault();$(".turtle_save",$(this)).click()});$(".turtle_instance .turtle_save").off().on("click",function(g){g.preventDefault();var d=$(this).parents(".turtle_instance");var c=$(this);if(c.attr("disabled")!="disabled"){c.attr("disabled","disabled").addClass("disable");$(".loading",d).animate({opacity:1},200);var f=d.attr("id").split("_")[1];var b=new Object();var a=$("form :input",d);a.each(function(){var e=$(this).attr("name").split(f+"-")[1];b[e]=$(this).val()});$.ajax({url:pathname+"/update",type:"POST",data:{id:f,options:b},success:function(e){$(".loading",d).animate({opacity:0},200);c.removeAttr("disabled").removeClass("disable")},error:function(h,e){alert("Could not save at this moment: "+e);$(".loading",d).animate({opacity:0},200);c.removeAttr("disabled").removeClass("disable")}})}});$(".turtle_instance .delete").off().on("click",function(c){c.preventDefault();if(confirm("Are you sure you want tot delete this turtle?")){var a=$(this).parents(".turtle_instance");var b=a.attr("id").split("_")[1];$(this).off();$.ajax({url:pathname+"/delete",type:"POST",data:{id:b},success:function(d){a.slideUp(300,function(){a.remove()})},error:function(e,d){alert("Could not delete the turtle at this moment: "+d)}})}})}bind_event_to_turtles();$(".help-popover").popover();if($("#inputColor")[0]){$("#inputColor").spectrum({showInput:true})}$("#messageModal input").keypress(function(a){if(a.which==13){$("#btnSendMessage").click()}});$("#btnSendMessage").click(function(b){b.preventDefault();var a=window.location.pathname;if($("#btnSendMessage").attr("disabled")!="disabled"){$("#btnSendMessage").attr("disabled","disabled").addClass("disable");$.ajax({type:"POST",url:a+"/plugin/message",data:{message:$("#the_message").val()},success:function(c){setTimeout(function(){$("#btnToggleClock i").toggleClass("active");$("#btnSendMessage").removeAttr("disabled")},1000);$("#messageModal").modal("hide");$("#btnSendMessage").removeAttr("disabled").removeClass("disable")}})}});$("#btnToggleClock").click(function(b){b.preventDefault();if($("#btnToggleClock").attr("disabled")!="disabled"){var a=window.location.pathname;$("#btnToggleClock").attr("disabled","disabled").addClass("disable");$.ajax({type:"POST",url:a+"/plugin/clock",data:{action:(($("#btnToggleClock i").hasClass("active"))?"off":"on")},success:function(c){setTimeout(function(){$("#btnToggleClock i").toggleClass("active");$("#btnToggleClock").removeAttr("disabled")},100)}})}});$("#btnToggleScreen").click(function(b){b.preventDefault();if($("#btnToggleScreen").attr("disabled")!="disabled"){var a=window.location.pathname;$("#btnToggleScreen").attr("disabled","disabled").addClass("disable");$.ajax({type:"POST",url:a+"/plugin/screen_power",data:{action:(($("#btnToggleScreen i").hasClass("active"))?"off":"on")},success:function(c){setTimeout(function(){$("#btnToggleScreen i").toggleClass("active").removeClass("icon-eye-close").removeClass("icon-eye-open");var d="close";if($("#btnToggleScreen i").hasClass("active")){d="open"}$("#btnToggleScreen i").addClass("icon-eye-"+d);$("#btnToggleScreen").removeAttr("disabled")},400)}})}});