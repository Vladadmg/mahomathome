
var $j = jQuery.noConflict();

$j(document).ready(function() {

	var show_text = 'Preview';
	var hide_text = 'Hide preview';
	var textarea = $j('textarea[name="comment"]');
	var textarea_id = '#' + $j(textarea).attr('id');
	var comment = '';

	$j(textarea_id).wrap('<div id="jquery-comment-wrap"></div>');
	$j(textarea_id).before('<div id="jquery-comment-preview"></div>');
	$j('#jquery-comment-preview').prepend('<div id="preview-tab"><div><a>'+ show_text +'</a></div></div>');

	$j('#preview-tab div').toggle(
		function() {
			comment = $j(textarea_id).val();
			if ($j(textarea_id).val() != '') comment = comment + '\n\n';
			comment_preview = comment.replace(/(<\/?)script/g,'$1noscript')
						.replace(/(<blockquote[^>]*>)/g, '\n$1')
			.replace(/(<\/blockquote[^>]*>)/g, '$1\n')
			.replace(/\r\n/g, '\n')
			.replace(/\r/g, '\n')
			.replace(/\n\n+/g, '\n\n')
			.replace(/\n?(.+?)(?:\n\s*\n)/g, '<p>$1</p>')
			.replace(/<p>\s*?<\/p>/g, '')
			.replace(/<p>\s*(<\/?blockquote[^>]*>)\s*<\/p>/g, '$1')
			.replace(/<p><blockquote([^>]*)>/ig, '<blockquote$1><p>')
			.replace(/<\/blockquote><\/p>/ig, '</p></blockquote>')
			.replace(/<p>\s*<blockquote([^>]*)>/ig, '<blockquote$1>')
			.replace(/<\/blockquote>\s*<\/p>/ig, '</blockquote>')
			.replace(/\s*\n\s*/g, '<br />');

			var avatar = '<img src="http://www.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=32" alt="" class="avatar" />';
			var author = $j('#author').val();
			if(!author) author = '';
			var url = $j('#url').val();
			if(!url) url = '';
			author = '<a href="'+ url +'">'+ author +'</a>';
			if (url == '') { author = $j('#author').val(); }
			var preview_html = '<ol id="comment-preview"><li>'+ avatar +'<strong>'+ author +'</strong> says:<br />'+ comment_preview +'</li></ol>';

			$j(textarea).after('<div id="textarea_clone"></div>');
			$j(textarea).clone().appendTo($j('#textarea_clone'));
			$j('#textarea_clone textarea').text(comment);
			$j('#textarea_clone').hide();
			$j(textarea).replaceWith('<div id="comment_preview"></div>');
			$j('#comment_preview').html(preview_html);
			$j('#preview-tab a').text(hide_text);
			$j('#html-editor button').hide();
		},
		function() {
			$j('#textarea_clone').remove();
			$j('#comment_preview').replaceWith(textarea);
			$j(textarea_id).text(comment);
			$j('#preview-tab a').text(show_text);
			$j('#html-editor button').show();
		}
	)


	var html_editor = '<div id="html-editor">';
	html_editor += '<button id="ed_strong" title="Bold">strong</button><button id="ed_em" title="Italic">em</button><button id="ed_a" title="Link">a[href=""]</button><button id="ed_blockquote" title="Quotation">blockquote</button><button id="ed_code" title="Code">code</button>';
	html_editor += '</div>';

	$j('#jquery-comment-preview').prepend(html_editor);

	function insert(start, end) {
		element = document.getElementById('comment');
		if (document.selection) {
			element.focus();
			sel = document.selection.createRange();
			sel.text = start + sel.text + end;
		} else if (element.selectionStart || element.selectionStart == '0') {
			element.focus();
			var startPos = element.selectionStart;
			var endPos = element.selectionEnd;
			element.value = element.value.substring(0, startPos) + start + element.value.substring(startPos, endPos) + end + element.value.substring(endPos, element.value.length);
		} else {
			element.value += start + end;
		}
	}

	$j('#html-editor button').click(function() {
		var button_id = attribs = $j(this).text();
		button_id = button_id.replace(/\[.*\]/, '');
		if (/\[.*\]/.test(attribs)) { attribs = attribs.replace(/.*\[(.*)\]/, ' $1'); } else attribs = '';
		var start = '<'+button_id+attribs+'>';
		var end = '</'+button_id+'>';
		insert(start, end);
		return false;
	})


})// end .ready(function()

