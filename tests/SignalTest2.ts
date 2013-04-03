/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest2 {

    constructor() {

        //  Multiple Listeners Test

        this.stopped.add(this.onStopped, this);
        this.stopped.add(this.onStopped2, this);
        this.stopped.dispatch();
        this.stopped.removeAll();

    }

    stopped: Signal = new Signal();

    onStopped() {

        alert('stopped listener 1');

    }

    onStopped2() {

        alert('stopped listener 2');

    }

}
