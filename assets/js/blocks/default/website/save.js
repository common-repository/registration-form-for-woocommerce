export default (props) => {
	const {
		attributes: {
			label,
			description,
			placeholder,
			hideLabel,
			required,
			className,
			hasDescription,
			fieldWidth,
		},
	} = props;

	return (
		<p
			id="reg_website_field"
			className={`form-row field-width-${fieldWidth}${
				className && ' ' + className
			}`}
		>
			<label htmlFor="reg_website" style={hideLabel ? { display: 'none' } : {}}>
				{label} {required && <span className="required">*</span>}
			</label>
			<input
				type="url"
				placeholder={placeholder}
				className="input-text"
				name="url"
				id="reg_website"
			/>
			{description && hasDescription && (
				<span
					className="input-description"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
		</p>
	);
};
