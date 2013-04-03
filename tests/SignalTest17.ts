/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest17 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Check if Signal has specific listener

        this.started.add(this.onStart);

        var hasListener: bool = this.started.has(this.onStart);

        console.log(hasListener);

    }

    started: Signal = new Signal();

    onStart(a) {

        console.log(a);

    }

}
