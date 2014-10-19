function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_585";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_585 = Ti.UI.createView({
        id: "widget_585"
    });
    $.__views.widget_585 && $.addTopLevelView($.__views.widget_585);
    $.__views.__alloyId14066 = Ti.UI.createView({
        id: "__alloyId14066"
    });
    $.__views.widget_585.add($.__views.__alloyId14066);
    $.__views.__alloyId14067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14067"
    });
    $.__views.__alloyId14066.add($.__views.__alloyId14067);
    $.__views.__alloyId14068 = Ti.UI.createView({
        id: "__alloyId14068"
    });
    $.__views.__alloyId14068 && $.addTopLevelView($.__views.__alloyId14068);
    $.__views.__alloyId14069 = Ti.UI.createView({
        id: "__alloyId14069"
    });
    $.__views.__alloyId14068.add($.__views.__alloyId14069);
    $.__views.__alloyId14070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14070"
    });
    $.__views.__alloyId14069.add($.__views.__alloyId14070);
    $.__views.__alloyId14071 = Ti.UI.createView({
        id: "__alloyId14071"
    });
    $.__views.__alloyId14071 && $.addTopLevelView($.__views.__alloyId14071);
    $.__views.__alloyId14072 = Ti.UI.createView({
        id: "__alloyId14072"
    });
    $.__views.__alloyId14071.add($.__views.__alloyId14072);
    $.__views.__alloyId14073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14073"
    });
    $.__views.__alloyId14072.add($.__views.__alloyId14073);
    $.__views.__alloyId14074 = Ti.UI.createView({
        id: "__alloyId14074"
    });
    $.__views.__alloyId14074 && $.addTopLevelView($.__views.__alloyId14074);
    $.__views.__alloyId14075 = Ti.UI.createView({
        id: "__alloyId14075"
    });
    $.__views.__alloyId14074.add($.__views.__alloyId14075);
    $.__views.__alloyId14076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14076"
    });
    $.__views.__alloyId14075.add($.__views.__alloyId14076);
    $.__views.__alloyId14077 = Ti.UI.createView({
        id: "__alloyId14077"
    });
    $.__views.__alloyId14077 && $.addTopLevelView($.__views.__alloyId14077);
    $.__views.__alloyId14078 = Ti.UI.createView({
        id: "__alloyId14078"
    });
    $.__views.__alloyId14077.add($.__views.__alloyId14078);
    $.__views.__alloyId14079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14079"
    });
    $.__views.__alloyId14078.add($.__views.__alloyId14079);
    $.__views.__alloyId14080 = Ti.UI.createView({
        id: "__alloyId14080"
    });
    $.__views.__alloyId14080 && $.addTopLevelView($.__views.__alloyId14080);
    $.__views.__alloyId14081 = Ti.UI.createView({
        id: "__alloyId14081"
    });
    $.__views.__alloyId14080.add($.__views.__alloyId14081);
    $.__views.__alloyId14082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14082"
    });
    $.__views.__alloyId14081.add($.__views.__alloyId14082);
    $.__views.__alloyId14083 = Ti.UI.createView({
        id: "__alloyId14083"
    });
    $.__views.__alloyId14083 && $.addTopLevelView($.__views.__alloyId14083);
    $.__views.__alloyId14084 = Ti.UI.createView({
        id: "__alloyId14084"
    });
    $.__views.__alloyId14083.add($.__views.__alloyId14084);
    $.__views.__alloyId14085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14085"
    });
    $.__views.__alloyId14084.add($.__views.__alloyId14085);
    $.__views.__alloyId14086 = Ti.UI.createView({
        id: "__alloyId14086"
    });
    $.__views.__alloyId14086 && $.addTopLevelView($.__views.__alloyId14086);
    $.__views.__alloyId14087 = Ti.UI.createView({
        id: "__alloyId14087"
    });
    $.__views.__alloyId14086.add($.__views.__alloyId14087);
    $.__views.__alloyId14088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14088"
    });
    $.__views.__alloyId14087.add($.__views.__alloyId14088);
    $.__views.__alloyId14089 = Ti.UI.createView({
        id: "__alloyId14089"
    });
    $.__views.__alloyId14089 && $.addTopLevelView($.__views.__alloyId14089);
    $.__views.__alloyId14090 = Ti.UI.createView({
        id: "__alloyId14090"
    });
    $.__views.__alloyId14089.add($.__views.__alloyId14090);
    $.__views.__alloyId14091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14091"
    });
    $.__views.__alloyId14090.add($.__views.__alloyId14091);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;