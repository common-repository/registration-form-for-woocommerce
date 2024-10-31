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
		default: '',
	},
	required: {
		type: Boolean,
		default: false,
	},
	hideLabel: {
		type: Boolean,
		default: false,
	},
	hasDescription: {
		type: Boolean,
		default: false,
	},
	className: {
		type: String,
		default: '',
	},
	showInOrder: {
		type: Boolean,
		default: false,
	},
	edited: {
		type: Boolean,
		default: false,
	},
	lock: {
		type: Object,
		default: {
			remove: true,
		},
	},
};
