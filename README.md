# Protractor with Typescript and Cucumber



## How to run tests
a) restore packages  
```bash
npm install
```
b) create a file with a name 
```bash
secrets.json
``` 
and populate that file with your values

c) compile your Typescript code to JavaScript code with a command 
```bash
npm run build
```


## Secrets file

## Environment file

## Reporting Tools

## BrowserStack integration

## How to run tests

## Naming conventions for page objects

File name which contains page object class should have an identical name to the title or header of the AUT page. The name should be in lower case separated by a dash “-”. For example, according to the Login page from the AUT, the filename will be login-page.ts.

The name of the page object class should share the same idea with the file. However, the class’s name should be in CamelCase with the first letter in uppercase. For example, the login page.

The access modifiers of all page objects’ elements should be private, on the other hand, in the base class or superclass, they should be protected. This will prevent incorrect uses of page object’s elements within test cases or somewhere else which will lead to serious maintenance problems. Remember that page object should merely expose high-level actions that encapsulate all the interactions with the AUT.

Page object’s methods should be in CamelCase with first letter in lowercase. Here are some examples: login(), loginExpectingError(), gotoCustomerPage(), registerCustomer().

Methods of page objects should return a page object. It helps remove many page object initializations inside test code and we can sequentially call other methods after the first one.
