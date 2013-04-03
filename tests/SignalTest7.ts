/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest7 {

    constructor() {

        //  Stop / Halt Propagation (method 2)

        this.started.add(this.onHit, this);
        this.started.add(this.onHit2, this);

        this.started.dispatch();    // Will log: hits = 1

    }

    started: Signal = new Signal();
    hits: number = 1;

    onHit() {

        console.log('hits = ' + this.hits);
        this.hits++;

        //  Stops the Signal, so onHit2 will never be called

        //  If a handler returns false it stops propagation
        return false;

    }

    onHit2() {

        console.log('hits = ' + this.hits);
        this.hits++;

    }

}
