export default (props) => {
	const {
		attributes: {
			clientId,
			label,
			description,
			hideLabel,
			required,
			className,
			hasDescription,
			fieldWidth,
			options,
		},
	} = props;

	return (
		<p
			id={`radio_${clientId}_field`}
			className={`form-row field-width-${fieldWidth}${
				className && ' ' + className
			}`}
		>
			{/* eslint-disable-next-line jsx-a11y/label-has-for */}
			<label style={hideLabel ? { display: 'none' } : {}}>
				{label} {required && <span className="required">*</span>}
			</label>
			<span className="tgwcfb-options">
				{[...new Set(options)].map((option, idx) => (
					<span className="tgwcfb-option" key={idx}>
						<input
							type="radio"
							value={option}
							name={`radio_${clientId}`}
							id={`radio_${clientId}_${option.toLowerCase().replace(' ', '_')}`}
						/>
						<label
							className="tgwcfb-radio-label"
							htmlFor={`radio_${clientId}_${option
								.toLowerCase()
								.replace(' ', '_')}`}
						>
							{option}
						</label>
					</span>
				))}
			</span>
			{description && hasDescription && (
				<span
					className="input-description"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
		</p>
	);
};