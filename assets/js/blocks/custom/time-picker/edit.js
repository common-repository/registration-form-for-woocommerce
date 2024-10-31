import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { InspectorControls } from '../../common';
import { useClientId, useUpdateLabel } from '../../hooks';

export default (props) => {
	const {
		attributes: {
			clientId,
			label,
			description,
			placeholder,
			required,
			className,
			hasDescription,
			fieldWidth,
		},
		setAttributes,
	} = props;

	useClientId(props.clientId, setAttributes, props.attributes, 'time_picker');

	useUpdateLabel(props, __('Time picker', 'registration-form-for-woocommerce'));

	return (
		<>
			<InspectorControls {...props} />
			<div
				data-id={`input_${clientId}`}
				className={`form-row field-width-${fieldWidth}${
					className && ' ' + className
				}`}
			>
				<RichText
					className={`tgwcfb-label ${required ? 'required' : ''}`}
					value={label}
					tagName="label"
					onChange={(val) => setAttributes({ label: val })}
					htmlFor={`time_picker_${clientId}`}
					allowedFormats={[]}
					placeholder={__('Enter label', 'registration-form-for-woocommerce')}
				/>
				{!label && (
					<span
						style={{
							display: 'inline-block',
							backgroundColor: '#ff02029c',
							color: '#fff',
							padding: '0 4px',
							borderRadius: '4px',
							fontSize: '12px',
						}}
					>
						{__('Label is required', 'registration-form-for-woocommerce')}
					</span>
				)}
				<input
					type="text"
					placeholder={placeholder}
					disabled
					className="input-time tgwcfb-input"
					name={`time_picker_${clientId}`}
					id={`time_picker_${clientId}`}
				/>
				{hasDescription && (
					<RichText
						className="input-description"
						value={description}
						tagName="span"
						placeholder={__(
							'Enter description',
							'registration-form-for-woocommerce'
						)}
						onChange={(val) => setAttributes({ description: val })}
						allowedFormats={['core/italic']}
					/>
				)}
			</div>
		</>
	);
};
