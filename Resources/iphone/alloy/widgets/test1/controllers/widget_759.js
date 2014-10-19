function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_759";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_759 = Ti.UI.createView({
        id: "widget_759"
    });
    $.__views.widget_759 && $.addTopLevelView($.__views.widget_759);
    $.__views.__alloyId19084 = Ti.UI.createView({
        id: "__alloyId19084"
    });
    $.__views.widget_759.add($.__views.__alloyId19084);
    $.__views.__alloyId19085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19085"
    });
    $.__views.__alloyId19084.add($.__views.__alloyId19085);
    $.__views.__alloyId19086 = Ti.UI.createView({
        id: "__alloyId19086"
    });
    $.__views.__alloyId19086 && $.addTopLevelView($.__views.__alloyId19086);
    $.__views.__alloyId19087 = Ti.UI.createView({
        id: "__alloyId19087"
    });
    $.__views.__alloyId19086.add($.__views.__alloyId19087);
    $.__views.__alloyId19088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19088"
    });
    $.__views.__alloyId19087.add($.__views.__alloyId19088);
    $.__views.__alloyId19089 = Ti.UI.createView({
        id: "__alloyId19089"
    });
    $.__views.__alloyId19089 && $.addTopLevelView($.__views.__alloyId19089);
    $.__views.__alloyId19090 = Ti.UI.createView({
        id: "__alloyId19090"
    });
    $.__views.__alloyId19089.add($.__views.__alloyId19090);
    $.__views.__alloyId19091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19091"
    });
    $.__views.__alloyId19090.add($.__views.__alloyId19091);
    $.__views.__alloyId19092 = Ti.UI.createView({
        id: "__alloyId19092"
    });
    $.__views.__alloyId19092 && $.addTopLevelView($.__views.__alloyId19092);
    $.__views.__alloyId19093 = Ti.UI.createView({
        id: "__alloyId19093"
    });
    $.__views.__alloyId19092.add($.__views.__alloyId19093);
    $.__views.__alloyId19094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19094"
    });
    $.__views.__alloyId19093.add($.__views.__alloyId19094);
    $.__views.__alloyId19095 = Ti.UI.createView({
        id: "__alloyId19095"
    });
    $.__views.__alloyId19095 && $.addTopLevelView($.__views.__alloyId19095);
    $.__views.__alloyId19096 = Ti.UI.createView({
        id: "__alloyId19096"
    });
    $.__views.__alloyId19095.add($.__views.__alloyId19096);
    $.__views.__alloyId19097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19097"
    });
    $.__views.__alloyId19096.add($.__views.__alloyId19097);
    $.__views.__alloyId19098 = Ti.UI.createView({
        id: "__alloyId19098"
    });
    $.__views.__alloyId19098 && $.addTopLevelView($.__views.__alloyId19098);
    $.__views.__alloyId19099 = Ti.UI.createView({
        id: "__alloyId19099"
    });
    $.__views.__alloyId19098.add($.__views.__alloyId19099);
    $.__views.__alloyId19100 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19100"
    });
    $.__views.__alloyId19099.add($.__views.__alloyId19100);
    $.__views.__alloyId19101 = Ti.UI.createView({
        id: "__alloyId19101"
    });
    $.__views.__alloyId19101 && $.addTopLevelView($.__views.__alloyId19101);
    $.__views.__alloyId19102 = Ti.UI.createView({
        id: "__alloyId19102"
    });
    $.__views.__alloyId19101.add($.__views.__alloyId19102);
    $.__views.__alloyId19103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19103"
    });
    $.__views.__alloyId19102.add($.__views.__alloyId19103);
    $.__views.__alloyId19104 = Ti.UI.createView({
        id: "__alloyId19104"
    });
    $.__views.__alloyId19104 && $.addTopLevelView($.__views.__alloyId19104);
    $.__views.__alloyId19105 = Ti.UI.createView({
        id: "__alloyId19105"
    });
    $.__views.__alloyId19104.add($.__views.__alloyId19105);
    $.__views.__alloyId19106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19106"
    });
    $.__views.__alloyId19105.add($.__views.__alloyId19106);
    $.__views.__alloyId19107 = Ti.UI.createView({
        id: "__alloyId19107"
    });
    $.__views.__alloyId19107 && $.addTopLevelView($.__views.__alloyId19107);
    $.__views.__alloyId19108 = Ti.UI.createView({
        id: "__alloyId19108"
    });
    $.__views.__alloyId19107.add($.__views.__alloyId19108);
    $.__views.__alloyId19109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19109"
    });
    $.__views.__alloyId19108.add($.__views.__alloyId19109);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;