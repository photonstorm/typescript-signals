/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest13 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Remove / Detach an Anonymous listener

        var binding: SignalBinding = this.started.add(function () { console.log('Atari ST'); });

        //  Will output 'Atari ST'
        this.started.dispatch();

        binding.detach();

        //  will log 'false'
        console.log(binding.isBound());

        //  Nothing happens now
        this.started.dispatch();

    }

    started: Signal = new Signal();

}
