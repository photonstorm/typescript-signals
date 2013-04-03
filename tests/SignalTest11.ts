/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest11 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Manually execute a signal handler

        var binding: SignalBinding = this.started.add(this.handler1, this);

        binding.execute();

    }

    started: Signal = new Signal();

    handler1() {

        console.log('Hello World');

    }

}
