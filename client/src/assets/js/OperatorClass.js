class Operator {
    constructor(name="operator_1", top=20, left=20, title="operator_1", body="", className="lightgrey" ) {
        this.name = name;
        this.top = top;
        this.left = left;
        this.title = title;
        this.body = body;
        this.className = className;
        Operator.operatorCreated++;
    };

    area() {
        return Math.pow(this.radius, 2) * Math.PI;
    };

    opData() {
        return ({
            [this.name] : {
                top: this.top,
                left: this.left,
                properties: {
                  title: this.title,
                  body: this.body,
                  class: this.className,
                }
            }
        })
    }
}