(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var r=e.n(t);const a=window.jQuery;var i=e.n(a);r()((function(){var e=i()("textarea.tgwcfb-editor");if(e){var t=e.attr("id");if(t){var r=wp.editor.initialize(t,{tinymce:{plugins:"charmap textcolor colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",toolbar1:"formatselect bold italic underline bullist numlist blockquote alignleft aligncenter alignright link wp_more media wp_add_media wp_adv",toolbar2:"forecolor strikethrough wp_code wp_page removeformat charmap outdent indent undo redo wp_help ",height:150},quicktags:!0});e.data("editor",r)}}}))})();