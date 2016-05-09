var EPUBJS = EPUBJS || {};
EPUBJS.VERSION = "0.2.14";

EPUBJS.plugins = EPUBJS.plugins || {};

EPUBJS.filePath = EPUBJS.filePath || "/epubjs/";

EPUBJS.Render = {};

(function(root) {

	var previousEpub = root.ePub || {};

	var ePub = root.ePub = function() {
		var bookPath, options;

		//-- var book = ePub("path/to/book.epub", { restore: true })
		if(typeof(arguments[0]) != 'undefined' &&
			(typeof arguments[0] === 'string' || arguments[0] instanceof ArrayBuffer)) {

			bookPath = arguments[0];

			if( arguments[1] && typeof arguments[1] === 'object' ) {
				options = arguments[1];
				options.bookPath = bookPath;
			} else {
				options = { 'bookPath' : bookPath };
			}

		}

		/*
		*   var book = ePub({ bookPath: "path/to/book.epub", restore: true });
		*
		*   - OR -
		*
		*   var book = ePub({ restore: true });
		*   book.open("path/to/book.epub");
		*/

		if( arguments[0] && typeof arguments[0] === 'object' && !(arguments[0] instanceof ArrayBuffer)) {
			options = arguments[0];
		}


		return new EPUBJS.Book(options);
	};

})(window);
