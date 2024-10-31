import {
	BaseControl,
	Button,
	ExternalLink,
	Spinner,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { Tooltip } from '../components';

export default () => {
	const { secretKey, siteKey, hasData } = useSelect((select) => {
		// eslint-disable-next-line no-shadow
		const { getSecretKey, getSiteKey, hasData } = select('tgwcfb/settings');
		return {
			secretKey: getSecretKey(),
			siteKey: getSiteKey(),
			hasData: hasData(),
		};
	});

	const { setSecretKey, setSiteKey } = useDispatch('tgwcfb/settings');

	if (!hasData) {
		return <Spinner />;
	}

	return (
		<>
			<BaseControl className="tgwcfb-setting">
				<BaseControl.VisualLabel>
					{__(
						'Goggle reCaptcha v2 settings',
						'registration-form-for-woocommerce'
					)}
					<Tooltip
						content={
							<>
								{__(
									'Get site key and secret key from ',
									'registration-form-for-woocommerce'
								)}
								<ExternalLink href="https://google.com/recaptcha ">
									{__('Google reCaptcha')}
								</ExternalLink>
							</>
						}
						width={215}
					>
						<Button icon="info-outline" />
					</Tooltip>
				</BaseControl.VisualLabel>
				<BaseControl
					className="tgwcfb-setting"
					label={__('Site key', 'registration-form-for-woocommerce')}
					id="tgwcfb-site-key"
				>
					<input
						className="components-text-control__input"
						type="text"
						id="tgwcfb-site-key"
						defaultValue={siteKey}
						onChange={(e) => setSiteKey(e.currentTarget.value)}
					/>
				</BaseControl>
				<BaseControl
					className="tgwcfb-setting"
					label={__('Secret key', 'registration-form-for-woocommerce')}
					id="tgwcfb-secret-key"
				>
					<input
						className="components-text-control__input"
						type="text"
						id="tgwcfb-secret-key"
						defaultValue={secretKey}
						onChange={(e) => setSecretKey(e.currentTarget.value)}
					/>
				</BaseControl>
			</BaseControl>
		</>
	);
};
