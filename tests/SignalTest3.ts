/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest3 {

    constructor() {

        //  Multiple Dispatches Test

        this.started.add(this.onHit, this);
        //this.started.add(this.onHit, this);
        //this.started.add(this.onHit, this);

        this.started.dispatch();    // Will log: hits = 1
        this.started.dispatch();    // Will log: hits = 2
        this.started.dispatch();    // Will log: hits = 3
    }

    started: Signal = new Signal();
    hits: number = 1;

    onHit() {

        console.log('hits = ' + this.hits);
        this.hits++;

    }

}
