class Car {
    constructor (f, r) {
        this.fuel = f
        console.log('Маúина создана. Бак заправлен на ' + this.fuel)
        this.ras = r
        this.exp = 0
        this.fuelLevel = 0
    }
    reFuel (q) {
        let diff = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
    }
    go (dist) {
        this.exp = this.ras/100 * dist
        return this.exp
    }
    getFuelLevel () {
        this.fuelLevel = this.fuel - this.exp
        if ( this.fuelLevel < 10) isWarning()
        if (this.fuelLevel === 0) isStop()
        return this.fuelLevel
    }
    isWarning () {
        console.log('!!!')
    }
    isStop () {
        console.log('Stop')
    }
}
    