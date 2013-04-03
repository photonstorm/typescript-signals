/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest12 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Retrieve anonymous listener

        var binding: SignalBinding = this.started.add(function () { console.log('Atari ST'); });

        //  handler will now contain a reference to the anonymous function (that outputs Atari ST) ...
        var handler = binding.getListener();

        //  ... which we can execute like this:
        handler();

    }

    started: Signal = new Signal();

}
