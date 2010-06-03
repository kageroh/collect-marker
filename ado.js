function adoLoadText(filename, charset) {
	stream.type = adTypeText;
	stream.charset = charset;
	stream.open();
	stream.loadFromFile(filename);
	var text = stream.readText();
	stream.close();
	return text;
}
function adoLoadLinesOfText(filename, charset) {
	var lines = [];
	stream.type = adTypeText;
	stream.charset = charset;
	stream.open();
	stream.loadFromFile(filename);
	while (!stream.EOS) {
		lines.push(stream.readText(adReadLine));
	}
	stream.close();
	return lines;
}
function adoSaveText(filename, text, charset) {
	stream.type = adTypeText;
	stream.charset = charset;
	stream.open();
	stream.writeText(text);
	stream.saveToFile(filename, adSaveCreateOverWrite);
	stream.close();
}
