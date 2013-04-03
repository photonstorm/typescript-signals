/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest15 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Change listener execution context on-the-fly

        var binding: SignalBinding = this.started.add(function () { console.log(this.foo); }, this);

        //  Will log 'bar'
        this.started.dispatch();

        binding.context = this.obj;

        //  Will log 'atari' as we've changed the context binding to this.obj
        this.started.dispatch();

    }

    started: Signal = new Signal();

    foo = 'bar';
    obj = { foo: 'atari' };

}
