function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_273";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_273 = Ti.UI.createView({
        id: "widget_273"
    });
    $.__views.widget_273 && $.addTopLevelView($.__views.widget_273);
    $.__views.__alloyId5070 = Ti.UI.createView({
        id: "__alloyId5070"
    });
    $.__views.widget_273.add($.__views.__alloyId5070);
    $.__views.__alloyId5071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5071"
    });
    $.__views.__alloyId5070.add($.__views.__alloyId5071);
    $.__views.__alloyId5072 = Ti.UI.createView({
        id: "__alloyId5072"
    });
    $.__views.__alloyId5072 && $.addTopLevelView($.__views.__alloyId5072);
    $.__views.__alloyId5073 = Ti.UI.createView({
        id: "__alloyId5073"
    });
    $.__views.__alloyId5072.add($.__views.__alloyId5073);
    $.__views.__alloyId5074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5074"
    });
    $.__views.__alloyId5073.add($.__views.__alloyId5074);
    $.__views.__alloyId5075 = Ti.UI.createView({
        id: "__alloyId5075"
    });
    $.__views.__alloyId5075 && $.addTopLevelView($.__views.__alloyId5075);
    $.__views.__alloyId5076 = Ti.UI.createView({
        id: "__alloyId5076"
    });
    $.__views.__alloyId5075.add($.__views.__alloyId5076);
    $.__views.__alloyId5077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5077"
    });
    $.__views.__alloyId5076.add($.__views.__alloyId5077);
    $.__views.__alloyId5078 = Ti.UI.createView({
        id: "__alloyId5078"
    });
    $.__views.__alloyId5078 && $.addTopLevelView($.__views.__alloyId5078);
    $.__views.__alloyId5079 = Ti.UI.createView({
        id: "__alloyId5079"
    });
    $.__views.__alloyId5078.add($.__views.__alloyId5079);
    $.__views.__alloyId5080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5080"
    });
    $.__views.__alloyId5079.add($.__views.__alloyId5080);
    $.__views.__alloyId5081 = Ti.UI.createView({
        id: "__alloyId5081"
    });
    $.__views.__alloyId5081 && $.addTopLevelView($.__views.__alloyId5081);
    $.__views.__alloyId5082 = Ti.UI.createView({
        id: "__alloyId5082"
    });
    $.__views.__alloyId5081.add($.__views.__alloyId5082);
    $.__views.__alloyId5083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5083"
    });
    $.__views.__alloyId5082.add($.__views.__alloyId5083);
    $.__views.__alloyId5084 = Ti.UI.createView({
        id: "__alloyId5084"
    });
    $.__views.__alloyId5084 && $.addTopLevelView($.__views.__alloyId5084);
    $.__views.__alloyId5085 = Ti.UI.createView({
        id: "__alloyId5085"
    });
    $.__views.__alloyId5084.add($.__views.__alloyId5085);
    $.__views.__alloyId5086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5086"
    });
    $.__views.__alloyId5085.add($.__views.__alloyId5086);
    $.__views.__alloyId5087 = Ti.UI.createView({
        id: "__alloyId5087"
    });
    $.__views.__alloyId5087 && $.addTopLevelView($.__views.__alloyId5087);
    $.__views.__alloyId5088 = Ti.UI.createView({
        id: "__alloyId5088"
    });
    $.__views.__alloyId5087.add($.__views.__alloyId5088);
    $.__views.__alloyId5089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5089"
    });
    $.__views.__alloyId5088.add($.__views.__alloyId5089);
    $.__views.__alloyId5090 = Ti.UI.createView({
        id: "__alloyId5090"
    });
    $.__views.__alloyId5090 && $.addTopLevelView($.__views.__alloyId5090);
    $.__views.__alloyId5091 = Ti.UI.createView({
        id: "__alloyId5091"
    });
    $.__views.__alloyId5090.add($.__views.__alloyId5091);
    $.__views.__alloyId5092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5092"
    });
    $.__views.__alloyId5091.add($.__views.__alloyId5092);
    $.__views.__alloyId5093 = Ti.UI.createView({
        id: "__alloyId5093"
    });
    $.__views.__alloyId5093 && $.addTopLevelView($.__views.__alloyId5093);
    $.__views.__alloyId5094 = Ti.UI.createView({
        id: "__alloyId5094"
    });
    $.__views.__alloyId5093.add($.__views.__alloyId5094);
    $.__views.__alloyId5095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5095"
    });
    $.__views.__alloyId5094.add($.__views.__alloyId5095);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;