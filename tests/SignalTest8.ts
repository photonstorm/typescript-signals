/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest8 {

    constructor() {

        //  Set execution context of the listener handler

        this.started.add(this.handler1, this);

        //  Set a different execution context (this.obj)
        this.started.add(this.handler1, this.obj);

        this.started.dispatch();    // first handler will log 'fruit', second will log 'machine'

    }

    started: Signal = new Signal();

    foo: string = 'fruit';
    obj = { foo: 'machine' };

    handler1() {

        console.log(this.foo);

    }

    handler2() {

        console.log(this.foo);

    }

}
