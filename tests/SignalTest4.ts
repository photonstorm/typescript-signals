/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest4 {

    constructor() {

        //  Multiple Dispatches + addOnce Test

        this.started.addOnce(this.onHit, this);
        this.started.addOnce(this.onHit, this);
        this.started.addOnce(this.onHit, this);

        this.started.dispatch();    // Will log: hits = 1
        this.started.dispatch();    // nothing happens, because the method onHit can only be added to the Signal once

    }

    started: Signal = new Signal();
    hits: number = 1;

    onHit() {

        console.log('hits = ' + this.hits);
        this.hits++;

    }

}
