jQuery(document).ready(function(t){function e(e){0===t('#modularity-sorted-by select optgroup[label="Post fields"]').length&&t("#modularity-sorted-by select").prepend('<optgroup label="Post fields">').append("</optgroup>"),t.post(ajaxurl,e,function(e){t('#modularity-sorted-by select option[value^="_metakey_"], #modularity-sorted-by select optgroup[label="Post meta"]').remove(),e.meta_keys.length>2&&(t("#modularity-sorted-by select").append('<optgroup label="Post meta">'),t.each(e.meta_keys,function(a,o){var l=o.meta_key==e.curr.replace("_metakey_","")?"selected":"";t("#modularity-sorted-by select").append('<option value="_metakey_'+o.meta_key+'" '+l+">"+o.meta_key+"</option>")}),t("#modularity-sorted-by select").append("</optgroup>"))},"json")}function a(e){t("#modularity-latest-taxonomy select").empty(),t("#modularity-latest-taxonomy .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,function(e){return 0===e.types.length?void t("#modularity-latest-taxonomy .acf-label label .spinner").remove():(t.each(e.types,function(a,o){var l=o.name==e.curr?"selected":"";t("#modularity-latest-taxonomy select").append('<option value="'+o.name+'" '+l+">"+o.label+"</option>")}),t("#modularity-latest-taxonomy .acf-label label .spinner").remove(),void o({action:"get_taxonomy_values",tax:t("#modularity-latest-taxonomy select").val(),post:modularity_current_post_id}))},"json")}function o(e){t("#modularity-latest-taxonomy-value select").empty(),t("#modularity-latest-taxonomy-value .acf-label label").prepend('<span class="spinner" style="visibility: visible; float: none; margin: 0 5px 0 0;"></span>'),t.post(ajaxurl,e,function(e){t.each(e.tax,function(a,o){var l=t.inArray(o.name,e.curr)>-1?"selected":"";t("#modularity-latest-taxonomy-value select").append('<option value="'+o.name+'" '+l+">"+o.name+"</option>")}),t("#modularity-latest-taxonomy-value .acf-label label .spinner").remove()},"json")}e({action:"get_sortable_meta_keys",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",function(){e({action:"get_sortable_meta_keys",posttype:t(this).val(),post:modularity_current_post_id})}),a({action:"get_taxonomy_types",posttype:t("#modularity-latest-post-type select").val(),post:modularity_current_post_id}),t("#modularity-latest-post-type select").on("change",function(){a({action:"get_taxonomy_types",posttype:t(this).val(),post:modularity_current_post_id})}),t("#modularity-latest-taxonomy select").on("change",function(){o({action:"get_taxonomy_values",tax:t(this).val(),post:modularity_current_post_id})})});