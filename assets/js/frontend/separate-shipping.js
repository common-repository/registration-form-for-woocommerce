import $ from 'jquery';

(() => {
	const shippingFields = $('.form-row[id^="shipping_"][id$="_field"]');

	shippingFields.hide();

	$('#separate_shipping_field')
		.find('input[name="separate_shipping"]')
		.on('change', (e) => {
			if ($(e.currentTarget).is(':checked')) {
				shippingFields.show();
				$('#shipping_country').trigger('country_to_state_changed');
			} else {
				shippingFields.hide();
			}
		});
})();
