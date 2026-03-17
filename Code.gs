function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('나도 이제 입자!')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
