/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest18 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Memorize previously dispatched values / forget values

        this.started.memorize = true;   //  default is false
        this.started.dispatch('foo');

        // add()/addOnce() will automatically fire listener if signal was dispatched before
        // will log "foo" since it keeps record of previously dispatched values
        this.started.addOnce(console.log, console);

        // dispatching a new value will overwrite the "memory"
        this.started.dispatch('lorem');

        // will log "lorem"
        this.started.addOnce(console.log, console);

        this.started.forget(); // forget previously dispatched values (reset signal state)
        this.started.addOnce(console.log, console); // won't log till next dispatch (since it "forgot")
        this.started.dispatch('bar'); // log "bar"

    }

    started: Signal = new Signal();

}
