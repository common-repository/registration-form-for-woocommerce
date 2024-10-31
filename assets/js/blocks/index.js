import {
	registerBillingCompanyBlock,
	registerBillingCountryRegionBlock,
	registerBillingEmailBlock,
	registerBillingFirstnameBlock,
	registerBillingLastnameBlock,
	registerBillingPhoneBlock,
	registerBillingSeparateShippingBlock,
	registerBillingStateBlock,
	registerBillingStreetAddress1Block,
	registerBillingStreetAddress2Block,
	registerBillingTownCityBlock,
	registerBillingZipCodeBlock,
} from './billing';
import './block.scss';
import {
	registerCustomCheckboxBlock,
	registerCustomEmailBlock,
	registerCustomInputBlock,
	registerCustomNumberBlock,
	registerCustomRadioBlock,
	registerCustomSelectBlock,
	registerCustomTextareaBlock,
} from './custom';
import {
	registerDefaultDisplayNameBlock,
	registerDefaultEmailBlock,
	registerDefaultFirstnameBlock,
	registerDefaultLastnameBlock,
	registerDefaultNicknameBlock,
	registerDefaultPasswordBlock,
	registerDefaultUserBioBlock,
	registerDefaultUsernameBlock,
	registerDefaultWebsiteBlock,
} from './default';
import {
	addFilters,
	addPreviewButton,
	addShortcodeToolbar,
	autoRecoverBlocks,
	hideEditorActions,
} from './helpers';
import registerPostMeta from './meta';
import {
	registerShippingCompanyBlock,
	registerShippingCountryRegionBlock,
	registerShippingFirstnameBlock,
	registerShippingLastnameBlock,
	registerShippingPhoneBlock,
	registerShippingStateBlock,
	registerShippingStreetAddress1Block,
	registerShippingStreetAddress2Block,
	registerShippingTownCityBlock,
	registerShippingZipCodeBlock,
} from './shipping';

// Add filters.
addFilters();
hideEditorActions();
addShortcodeToolbar();
addPreviewButton();
autoRecoverBlocks();

// Default fields.
registerDefaultUsernameBlock();
registerDefaultEmailBlock();
registerDefaultPasswordBlock();
registerDefaultFirstnameBlock();
registerDefaultLastnameBlock();
registerDefaultDisplayNameBlock();
registerDefaultNicknameBlock();
registerDefaultWebsiteBlock();
registerDefaultUserBioBlock();

// Billing fields.
registerBillingFirstnameBlock();
registerBillingLastnameBlock();
registerBillingCompanyBlock();
registerBillingCountryRegionBlock();
registerBillingStreetAddress1Block();
registerBillingStreetAddress2Block();
registerBillingTownCityBlock();
registerBillingStateBlock();
registerBillingZipCodeBlock();
registerBillingPhoneBlock();
registerBillingEmailBlock();
registerBillingSeparateShippingBlock();

// Shipping fields.
registerShippingFirstnameBlock();
registerShippingLastnameBlock();
registerShippingCompanyBlock();
registerShippingCountryRegionBlock();
registerShippingStreetAddress1Block();
registerShippingStreetAddress2Block();
registerShippingTownCityBlock();
registerShippingStateBlock();
registerShippingZipCodeBlock();
registerShippingPhoneBlock();

// Custom fields.
registerCustomEmailBlock();
registerCustomInputBlock();
registerCustomTextareaBlock();
registerCustomNumberBlock();
registerCustomCheckboxBlock();
registerCustomRadioBlock();
registerCustomSelectBlock();

// Register post meta fields.
registerPostMeta();
