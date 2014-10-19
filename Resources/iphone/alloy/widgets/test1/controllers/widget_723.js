function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_723";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_723 = Ti.UI.createView({
        id: "widget_723"
    });
    $.__views.widget_723 && $.addTopLevelView($.__views.widget_723);
    $.__views.__alloyId18070 = Ti.UI.createView({
        id: "__alloyId18070"
    });
    $.__views.widget_723.add($.__views.__alloyId18070);
    $.__views.__alloyId18071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18071"
    });
    $.__views.__alloyId18070.add($.__views.__alloyId18071);
    $.__views.__alloyId18072 = Ti.UI.createView({
        id: "__alloyId18072"
    });
    $.__views.__alloyId18072 && $.addTopLevelView($.__views.__alloyId18072);
    $.__views.__alloyId18073 = Ti.UI.createView({
        id: "__alloyId18073"
    });
    $.__views.__alloyId18072.add($.__views.__alloyId18073);
    $.__views.__alloyId18074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18074"
    });
    $.__views.__alloyId18073.add($.__views.__alloyId18074);
    $.__views.__alloyId18075 = Ti.UI.createView({
        id: "__alloyId18075"
    });
    $.__views.__alloyId18075 && $.addTopLevelView($.__views.__alloyId18075);
    $.__views.__alloyId18076 = Ti.UI.createView({
        id: "__alloyId18076"
    });
    $.__views.__alloyId18075.add($.__views.__alloyId18076);
    $.__views.__alloyId18077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18077"
    });
    $.__views.__alloyId18076.add($.__views.__alloyId18077);
    $.__views.__alloyId18078 = Ti.UI.createView({
        id: "__alloyId18078"
    });
    $.__views.__alloyId18078 && $.addTopLevelView($.__views.__alloyId18078);
    $.__views.__alloyId18079 = Ti.UI.createView({
        id: "__alloyId18079"
    });
    $.__views.__alloyId18078.add($.__views.__alloyId18079);
    $.__views.__alloyId18080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18080"
    });
    $.__views.__alloyId18079.add($.__views.__alloyId18080);
    $.__views.__alloyId18081 = Ti.UI.createView({
        id: "__alloyId18081"
    });
    $.__views.__alloyId18081 && $.addTopLevelView($.__views.__alloyId18081);
    $.__views.__alloyId18082 = Ti.UI.createView({
        id: "__alloyId18082"
    });
    $.__views.__alloyId18081.add($.__views.__alloyId18082);
    $.__views.__alloyId18083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18083"
    });
    $.__views.__alloyId18082.add($.__views.__alloyId18083);
    $.__views.__alloyId18084 = Ti.UI.createView({
        id: "__alloyId18084"
    });
    $.__views.__alloyId18084 && $.addTopLevelView($.__views.__alloyId18084);
    $.__views.__alloyId18085 = Ti.UI.createView({
        id: "__alloyId18085"
    });
    $.__views.__alloyId18084.add($.__views.__alloyId18085);
    $.__views.__alloyId18086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18086"
    });
    $.__views.__alloyId18085.add($.__views.__alloyId18086);
    $.__views.__alloyId18087 = Ti.UI.createView({
        id: "__alloyId18087"
    });
    $.__views.__alloyId18087 && $.addTopLevelView($.__views.__alloyId18087);
    $.__views.__alloyId18088 = Ti.UI.createView({
        id: "__alloyId18088"
    });
    $.__views.__alloyId18087.add($.__views.__alloyId18088);
    $.__views.__alloyId18089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18089"
    });
    $.__views.__alloyId18088.add($.__views.__alloyId18089);
    $.__views.__alloyId18090 = Ti.UI.createView({
        id: "__alloyId18090"
    });
    $.__views.__alloyId18090 && $.addTopLevelView($.__views.__alloyId18090);
    $.__views.__alloyId18091 = Ti.UI.createView({
        id: "__alloyId18091"
    });
    $.__views.__alloyId18090.add($.__views.__alloyId18091);
    $.__views.__alloyId18092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18092"
    });
    $.__views.__alloyId18091.add($.__views.__alloyId18092);
    $.__views.__alloyId18093 = Ti.UI.createView({
        id: "__alloyId18093"
    });
    $.__views.__alloyId18093 && $.addTopLevelView($.__views.__alloyId18093);
    $.__views.__alloyId18094 = Ti.UI.createView({
        id: "__alloyId18094"
    });
    $.__views.__alloyId18093.add($.__views.__alloyId18094);
    $.__views.__alloyId18095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18095"
    });
    $.__views.__alloyId18094.add($.__views.__alloyId18095);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;