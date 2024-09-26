class Socket {
    output() {
        return '输出220V';
    }
}

abstract class Power {
    abstract charge(): string;
}
class PowerAdapter extends Power {
    constructor(public socket: Socket) {
        super();
    }
    //转换后的接口和转换前不一样
    charge() {
        return this.socket.output() + ' 经过转换 输出24V';
    }
}
let powerAdapter = new PowerAdapter(new Socket());
console.log(powerAdapter.charge());