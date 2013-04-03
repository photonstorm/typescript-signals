/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest16 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Add default parameters to Signal dispatch

        var binding: SignalBinding = this.started.add(this.handler);

        //  Set the default parameters of the binding
        binding.params = ['Atari', 'Amiga'];

        //  Adds the extra parameter onto the end of the defaults
        this.started.dispatch('Super Nintendo');

    }

    started: Signal = new Signal();

    handler(a, b, c) {

        console.log(a + ' ' + b + ' ' + c);

    }

}
