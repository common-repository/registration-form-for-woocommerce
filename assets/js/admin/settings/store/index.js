import { registerStore } from '@wordpress/data';

export default () => {
	const INITIAL_STATE = {
		forms: [],
		settings: {},
		formId: 0,
		checkoutFormId: 0,
		checkoutFields: [],
		hasData: false,
		secretKey: '',
		siteKey: '',
		adminEmail: window._TGWCFB_SETTINGS_.adminEmail,
	};

	const ACTIONS = {
		setForms: (forms) => ({
			type: 'SET_FORMS',
			payload: forms,
		}),
		setSettings: (settings) => ({
			type: 'SET_SETTINGS',
			payload: settings,
		}),
		setFormId: (id) => ({
			type: 'SET_FORM_ID',
			payload: id,
		}),
		setCheckoutFormId: (id) => ({
			type: 'SET_CHECKOUT_FORM_ID',
			payload: id,
		}),
		setCheckoutFields: (fields) => ({
			type: 'SET_CHECKOUT_FIELDS',
			payload: fields,
		}),
		setHasData: (hasData) => ({
			type: 'SET_HAS_DATA',
			payload: hasData,
		}),
		setSiteKey: (key) => ({
			type: 'SET_SITE_KEY',
			payload: key,
		}),
		setSecretKey: (key) => ({
			type: 'SET_SECRET_KEY',
			payload: key,
		}),
		setAdminEmail:(adminEmail)=>({
			type:'SET_ADMIN_EMAIL',
			payload:adminEmail,
		}),
	};

	const SELECTORS = {
		getForms: (state) => state.forms,
		getSettings: (state) => state.settings,
		getFormId: (state) => state.formId,
		getCheckoutFormId: (state) => state.checkoutFormId,
		getCheckoutFields: (state) => state.checkoutFields,
		hasData: (state) => state.hasData,
		getSiteKey: (state) => state.siteKey,
		getSecretKey: (state) => state.secretKey,
		getAdminEmail:(state)=>state.adminEmail
	};

	const REDUCER = (prevState = INITIAL_STATE, action) => {
		switch (action.type) {
			case 'SET_FORMS': {
				return {
					...prevState,
					forms: [...action.payload],
				};
			}
			case 'SET_SETTINGS': {
				return {
					...prevState,
					settings: { ...action.payload },
				};
			}
			case 'SET_FORM_ID': {
				return {
					...prevState,
					formId: action.payload,
				};
			}
			case 'SET_CHECKOUT_FORM_ID': {
				return {
					...prevState,
					checkoutFormId: action.payload,
				};
			}
			case 'SET_CHECKOUT_FIELDS': {
				return {
					...prevState,
					checkoutFields: [...action.payload],
				};
			}
			case 'SET_HAS_DATA': {
				return {
					...prevState,
					hasData: action.payload,
				};
			}
			case 'SET_SITE_KEY': {
				return {
					...prevState,
					siteKey: action.payload,
				};
			}
			case 'SET_SECRET_KEY': {
				return {
					...prevState,
					secretKey: action.payload,
				};
			}
			case 'SET_ADMIN_EMAIL': {
				return {
					...prevState,
					adminEmail:action.payload,
				}
			}
			default:
				return prevState;
		}
	};

	registerStore('tgwcfb/settings', {
		reducer: REDUCER,
		actions: ACTIONS,
		selectors: SELECTORS,
	});
};
