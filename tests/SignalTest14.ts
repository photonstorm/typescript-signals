/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest14 {

    //  https://github.com/millermedeiros/js-signals/wiki/Examples

    constructor() {

        //  Advanced - Check if binding will execute only once

        var binding1: SignalBinding = this.started.add(function () { console.log('Atari ST'); });
        var binding2: SignalBinding = this.started.addOnce(function () { console.log('Commodore Amiga'); });

        //  Will log 'false'
        console.log(binding1.isOnce());

        //  Will log 'true'
        console.log(binding2.isOnce());

    }

    started: Signal = new Signal();

}
