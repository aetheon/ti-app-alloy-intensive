function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_62";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_62 = Ti.UI.createView({
        id: "widget_62"
    });
    $.__views.widget_62 && $.addTopLevelView($.__views.widget_62);
    $.__views.__alloyId15080 = Ti.UI.createView({
        id: "__alloyId15080"
    });
    $.__views.widget_62.add($.__views.__alloyId15080);
    $.__views.__alloyId15081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15081"
    });
    $.__views.__alloyId15080.add($.__views.__alloyId15081);
    $.__views.__alloyId15082 = Ti.UI.createView({
        id: "__alloyId15082"
    });
    $.__views.__alloyId15082 && $.addTopLevelView($.__views.__alloyId15082);
    $.__views.__alloyId15083 = Ti.UI.createView({
        id: "__alloyId15083"
    });
    $.__views.__alloyId15082.add($.__views.__alloyId15083);
    $.__views.__alloyId15084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15084"
    });
    $.__views.__alloyId15083.add($.__views.__alloyId15084);
    $.__views.__alloyId15085 = Ti.UI.createView({
        id: "__alloyId15085"
    });
    $.__views.__alloyId15085 && $.addTopLevelView($.__views.__alloyId15085);
    $.__views.__alloyId15086 = Ti.UI.createView({
        id: "__alloyId15086"
    });
    $.__views.__alloyId15085.add($.__views.__alloyId15086);
    $.__views.__alloyId15087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15087"
    });
    $.__views.__alloyId15086.add($.__views.__alloyId15087);
    $.__views.__alloyId15088 = Ti.UI.createView({
        id: "__alloyId15088"
    });
    $.__views.__alloyId15088 && $.addTopLevelView($.__views.__alloyId15088);
    $.__views.__alloyId15089 = Ti.UI.createView({
        id: "__alloyId15089"
    });
    $.__views.__alloyId15088.add($.__views.__alloyId15089);
    $.__views.__alloyId15090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15090"
    });
    $.__views.__alloyId15089.add($.__views.__alloyId15090);
    $.__views.__alloyId15091 = Ti.UI.createView({
        id: "__alloyId15091"
    });
    $.__views.__alloyId15091 && $.addTopLevelView($.__views.__alloyId15091);
    $.__views.__alloyId15092 = Ti.UI.createView({
        id: "__alloyId15092"
    });
    $.__views.__alloyId15091.add($.__views.__alloyId15092);
    $.__views.__alloyId15093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15093"
    });
    $.__views.__alloyId15092.add($.__views.__alloyId15093);
    $.__views.__alloyId15094 = Ti.UI.createView({
        id: "__alloyId15094"
    });
    $.__views.__alloyId15094 && $.addTopLevelView($.__views.__alloyId15094);
    $.__views.__alloyId15095 = Ti.UI.createView({
        id: "__alloyId15095"
    });
    $.__views.__alloyId15094.add($.__views.__alloyId15095);
    $.__views.__alloyId15096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15096"
    });
    $.__views.__alloyId15095.add($.__views.__alloyId15096);
    $.__views.__alloyId15097 = Ti.UI.createView({
        id: "__alloyId15097"
    });
    $.__views.__alloyId15097 && $.addTopLevelView($.__views.__alloyId15097);
    $.__views.__alloyId15098 = Ti.UI.createView({
        id: "__alloyId15098"
    });
    $.__views.__alloyId15097.add($.__views.__alloyId15098);
    $.__views.__alloyId15099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15099"
    });
    $.__views.__alloyId15098.add($.__views.__alloyId15099);
    $.__views.__alloyId15100 = Ti.UI.createView({
        id: "__alloyId15100"
    });
    $.__views.__alloyId15100 && $.addTopLevelView($.__views.__alloyId15100);
    $.__views.__alloyId15101 = Ti.UI.createView({
        id: "__alloyId15101"
    });
    $.__views.__alloyId15100.add($.__views.__alloyId15101);
    $.__views.__alloyId15102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15102"
    });
    $.__views.__alloyId15101.add($.__views.__alloyId15102);
    $.__views.__alloyId15103 = Ti.UI.createView({
        id: "__alloyId15103"
    });
    $.__views.__alloyId15103 && $.addTopLevelView($.__views.__alloyId15103);
    $.__views.__alloyId15104 = Ti.UI.createView({
        id: "__alloyId15104"
    });
    $.__views.__alloyId15103.add($.__views.__alloyId15104);
    $.__views.__alloyId15105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15105"
    });
    $.__views.__alloyId15104.add($.__views.__alloyId15105);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;