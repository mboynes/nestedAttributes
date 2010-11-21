// Call this on an element with a plural ID, which has children with singularized classes (e.g. #tasks, .task)
(function( $ ){
	$.fn.nestedAttributes = function() {
		var collection = this.attr('id');
		var s = { // settings
			'singular': collection.replace(/s$/, '')
		};
		var $this = $(this);
		$('a.add_'+s.singular).bind('click.nestedAttributes', function(){
			var content = $('#' + collection + '_fields_template').html();
			var regexp  = new RegExp('new_' + collection, 'g');
			var new_id  = new Date().getTime();
			$this.append(content.replace(regexp, new_id));    
			return false;
		});
		$('a.remove_'+s.singular).live('click.nestedAttributes', function() {
			var hidden_field = $(this).closest('.'+s.singular).children('input[type=hidden]')[0];
			if(hidden_field) { hidden_field.value = '1'; }
			$(this).closest('.'+s.singular).hide();
			return false;
		});
	};
})( jQuery );