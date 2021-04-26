// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    // get radius() {
    //     return this.radius
    // }

    // set radius(r) {
    //     this.radius = r
    // }

    get diameter() {
        return 2 * this.radius 
    }

    set diameter(diam) {
        this.radius = diam/2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    set circumference(num) {
        this.radius = num/(Math.PI * 2)
    }

    get area() {
        return Math.PI * this.radius**2
    }
}