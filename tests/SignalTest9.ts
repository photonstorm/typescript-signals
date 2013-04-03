/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest9 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Set listener priority / order

        //  default priority is 0
        this.started.add(this.handler1, this);

        //  Setting priority 2 will make handler 2 execute before handler1
        this.started.add(this.handler2, this, 2);

        this.started.dispatch();    // will log 'bar' then 'foo'

    }

    started: Signal = new Signal();

    handler1() {

        console.log('foo');

    }

    handler2() {

        console.log('bar');

    }

}
