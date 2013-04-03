/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest5 {

    constructor() {

        //  Enable / Disable a Signal

        this.started.add(this.onHit, this);
        this.started.add(this.onHit, this);

        this.started.dispatch();    // Will log: hits = 1
        this.started.active = false;
        this.started.dispatch();    // nothing happens, because the Signal has been disabled
        this.started.active = true;
        this.started.dispatch();    // Will log: hits = 2

    }

    started: Signal = new Signal();
    hits: number = 1;

    onHit() {

        console.log('hits = ' + this.hits);
        this.hits++;

    }

}
