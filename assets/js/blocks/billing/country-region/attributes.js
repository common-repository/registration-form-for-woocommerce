import { __ } from '@wordpress/i18n';

export default {
	label: {
		type: String,
		default: '',
	},
	fieldWidth: {
		type: Number,
		default: 100,
	},
	description: {
		type: String,
		default: '',
	},
	placeholder: {
		type: String,
		default: __(
			'Select a country / region…',
			'registration-form-for-woocommerce'
		),
	},
	required: {
		type: Boolean,
		default: false,
	},
	hideLabel: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: '',
	},
};
