let {defineSupportCode} = require('cucumber');
 
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
 
defineSupportCode( function({When, Then}) {
 When('I navigate to {string}', function(site) {
   return browser.get(site);
 });
 
 Then('the title should be {string}', function(title) {
   return expect(browser.getTitle()).to.eventually.eql(title);
 });
 
 When('I click the search button', function() {
   var docButton = element(by.tagName('button'));
   return browser.wait(docButton.click(), 5000);
 });

 When('I complete to {string} the search input', function(string) {
  var docInput = element(by.css('[formcontrolname="searchText"]'));
  return docInput.sendKeys(string);
});

When('I delete text to the search input', function() {
  var docInputEmpty = element(by.css('[formcontrolname="searchText"]'));
  return docInputEmpty.clear();
});

When('I click the fist item of list', function() {
  var docFirstItemList = element(by.className('item-wrapper'));
  return browser.wait(docFirstItemList.click(), 10000);
});
 

 Then('I should see a {string} article', function(title) {
   var article = element(by.id('what-is-angular'));
 
   return expect(article.getText()).to.eventually.eql(title);
 });
});