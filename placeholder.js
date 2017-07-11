(function($) {
	$.fn.placeholder = function(config) {

		var settings = $.extend({
			color: 'red'
		}, config);

		var $this = $(this);

		/* Checking for native support */
		var isInputSupported = ('placeholder' in document.createElement('input')) ? true : false;
		var isTextareaSupported = ('placeholder' in document.createElement('textarea')) ? true : false;

		if (!(isInputSupported && isTextareaSupported)) {

			$this.each(function(index, element) {

				var $el = $(element);

				/* Set input value equal to what's in placeholder */
				$el.val($el.attr('placeholder'));

				var oldPlaceholderValue = $el.attr('placeholder');

				/* Clearing and resetting values depending on state */
				$el.focusin(function() {
					if (oldPlaceholderValue == $el.val()) {
						$el.val('');
					}
				}).focusout(function() {
					if ($el.val() == '') {
						$el.val(oldPlaceholderValue);
					}
				});
			});
		}
		return $this;
	}
})(jQuery);