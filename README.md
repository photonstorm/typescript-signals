# TypeScript-Signals #

Custom event/messaging system for TypeScript.

Converted from [JS-Signals](http://millermedeiros.github.com/js-signals/) which was inspired by [AS3-Signals](https://github.com/robertpenner/as3-signals).

For a more in-depth introduction read the [JS-Signals Project Page](http://millermedeiros.github.com/js-signals/) and visit the links below.

## Getting Started ##

Copy the `Signal.ts` and `SignalBinding.ts` files into your TypeScript project.

If you wish you can place them inside a module, but by default they are set to global classes.

Reference the `Signal.ts` file in your code and then use them as normal. Look at the tests provided in the `tests` folder for plenty examples of use, or read the JS-Signals documentation.

## JS-Signals Links ##

 * [Project Page](http://millermedeiros.github.com/js-signals/)
 * [Wiki](http://github.com/millermedeiros/js-signals/wiki/)
 * [Documentation](http://millermedeiros.github.com/js-signals/docs)
 * [Changelog](http://github.com/millermedeiros/js-signals/blob/master/CHANGELOG.md)
 * [CompoundSignal - special Signal kind](https://github.com/millermedeiros/CompoundSignal)
 * [jasmine-signals](https://github.com/AdamNowotny/jasmine-signals)
   (Jasmine assertions to simplify signals testing)


## License ##

 * [MIT License](http://www.opensource.org/licenses/mit-license.php)


## Repository Structure ##

### Folder Structure ###

    |-src         ->  source files
    |-tests       ->  unit tests

## Running Tests ##

The tests are stand-alone TypeScript classes that map to the tests created for JS-Signals.
