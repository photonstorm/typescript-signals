/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest10 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Enable/Disable a single SignalBinding

        var binding1: SignalBinding = this.started.add(this.handler1, this);

        this.started.add(this.handler2, this);
        this.started.dispatch();    // will log 'foo bar' then 'lorem ipsum'

        console.log('Disabling single binding');
        binding1.active = false;    //  disable a single binding
        this.started.dispatch();    // will log 'lorem ipsum'

        console.log('Enabling single binding');
        binding1.active = true;    //  disable a single binding
        this.started.dispatch();    // will log 'foo bar' then 'lorem ipsum'

    }

    started: Signal = new Signal();

    handler1() {

        console.log('foo bar');

    }

    handler2() {

        console.log('lorem ipsum');

    }

}
