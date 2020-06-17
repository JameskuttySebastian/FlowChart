class Operator {
    constructor(operatorName="operator_1", top=20, left=20, title="operator_1", body="", className="lightgrey" ) {
        this.operatorName = operatorName;
        this.top = top;
        this.left = left;
        this.title = title;
        this.body = body;
        this.className = className;
    };

    setOperatorName() {this.operatorName = operatorName};
    setTop() {this.top = top};
    setLeft() {this.left = left};
    setTitle() {this.title = title};
    setBody() {this.body = body};
    setClassName() {this.className = className};
    
    getOperatorName() {return this.operatorName};
    getTop() {return this.top};
    getLeft() {return this.left};
    getTitle() {return this.title};
    getBody() {return this.body};
    getClassName() {return this.className};

    operatorData() {
        return ({
            [this.operatorName] : {
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
};

class Node {
    constructor(nodeName="node", nodeType="type", label="1", multipleLinks=true){
        this.nodeName = nodeName;
        this.nodeType = nodeType;
        this.label = label;
        this.multipleLinks = multipleLinks;
    }
    setNodeName() {this.nodeName = nodeName};
    setNodeType() {this.nodeType = nodeType};
    setLabel() {this.label = label};
    setMultipleLinks() {this.multipleLinks = multipleLinks};

    getNodeName() {return this.operatorName};
    getNodeType() {return this.nodeType};
    getLabel() {return this.label};
    getMultipleLinks() {return this.multipleLinks};

    nodeData(){
        return({
            [this.nodeName]: {
                label: this.label,
                multipleLinks: this.multipleLinks,
              },
        })
    }
}

module.exports = {
    Operator: Operator,
    Node: Node
  };