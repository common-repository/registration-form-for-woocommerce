import domReady from '@wordpress/dom-ready';
import $ from 'jquery';
import './index.scss';

domReady(() => {
	const textarea = $('textarea.tgwcfb-editor');
	if (textarea) {
		const id = textarea.attr('id');
		if (id) {
			const editor = wp.editor.initialize(id, {
				tinymce: {
					plugins:
						'charmap textcolor colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview',
					toolbar1:
						'formatselect bold italic underline bullist numlist blockquote alignleft aligncenter alignright link wp_more media wp_add_media wp_adv',
					toolbar2:
						'forecolor strikethrough wp_code wp_page removeformat charmap outdent indent undo redo wp_help ',
					height: 150,
				},
				quicktags: true,
			});
			textarea.data('editor', editor);
		}
	}
});
