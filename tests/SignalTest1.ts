/// <reference path="../Signal.ts" />
/// <reference path="../SignalBinding.ts" />

class SignalTest1 {

    constructor() {

        //  Add a listener to this State object
        //  onStarted is the method within this State that will be called when the signal is received
        this.started.add(this.onStarted);

        //  Note in the above that we're hitting onStarted out of context of this class, so it won't be able to see any local properties or methods.
        //  But it can also be hit like:
        //  this.started.add(this.onStarted, this);
        //  Adding 'this' as the context for the 2nd parameter means that the onStarted method can now access anything in this class

        //  Dispatch the signal, passing 2 custom parameters
        this.started.dispatch('Atari', 520);

        //  Remove our single listener
        this.started.remove(this.onStarted);

    }

    started: Signal = new Signal();

    //  This is the method that's called by the started Signal
    //  You can statically type the parameters if you wish for ease of use within this method
    //  but signal.dispatch() will NOT throw an error if they don't match
    onStarted(param1: string, param2: number) {

        alert(param1 + ' ' + param2);

    }

}
