function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_966";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_966 = Ti.UI.createView({
        id: "widget_966"
    });
    $.__views.widget_966 && $.addTopLevelView($.__views.widget_966);
    $.__views.__alloyId25064 = Ti.UI.createView({
        id: "__alloyId25064"
    });
    $.__views.widget_966.add($.__views.__alloyId25064);
    $.__views.__alloyId25065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25065"
    });
    $.__views.__alloyId25064.add($.__views.__alloyId25065);
    $.__views.__alloyId25066 = Ti.UI.createView({
        id: "__alloyId25066"
    });
    $.__views.__alloyId25066 && $.addTopLevelView($.__views.__alloyId25066);
    $.__views.__alloyId25067 = Ti.UI.createView({
        id: "__alloyId25067"
    });
    $.__views.__alloyId25066.add($.__views.__alloyId25067);
    $.__views.__alloyId25068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25068"
    });
    $.__views.__alloyId25067.add($.__views.__alloyId25068);
    $.__views.__alloyId25069 = Ti.UI.createView({
        id: "__alloyId25069"
    });
    $.__views.__alloyId25069 && $.addTopLevelView($.__views.__alloyId25069);
    $.__views.__alloyId25070 = Ti.UI.createView({
        id: "__alloyId25070"
    });
    $.__views.__alloyId25069.add($.__views.__alloyId25070);
    $.__views.__alloyId25071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25071"
    });
    $.__views.__alloyId25070.add($.__views.__alloyId25071);
    $.__views.__alloyId25072 = Ti.UI.createView({
        id: "__alloyId25072"
    });
    $.__views.__alloyId25072 && $.addTopLevelView($.__views.__alloyId25072);
    $.__views.__alloyId25073 = Ti.UI.createView({
        id: "__alloyId25073"
    });
    $.__views.__alloyId25072.add($.__views.__alloyId25073);
    $.__views.__alloyId25074 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25074"
    });
    $.__views.__alloyId25073.add($.__views.__alloyId25074);
    $.__views.__alloyId25075 = Ti.UI.createView({
        id: "__alloyId25075"
    });
    $.__views.__alloyId25075 && $.addTopLevelView($.__views.__alloyId25075);
    $.__views.__alloyId25076 = Ti.UI.createView({
        id: "__alloyId25076"
    });
    $.__views.__alloyId25075.add($.__views.__alloyId25076);
    $.__views.__alloyId25077 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25077"
    });
    $.__views.__alloyId25076.add($.__views.__alloyId25077);
    $.__views.__alloyId25078 = Ti.UI.createView({
        id: "__alloyId25078"
    });
    $.__views.__alloyId25078 && $.addTopLevelView($.__views.__alloyId25078);
    $.__views.__alloyId25079 = Ti.UI.createView({
        id: "__alloyId25079"
    });
    $.__views.__alloyId25078.add($.__views.__alloyId25079);
    $.__views.__alloyId25080 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25080"
    });
    $.__views.__alloyId25079.add($.__views.__alloyId25080);
    $.__views.__alloyId25081 = Ti.UI.createView({
        id: "__alloyId25081"
    });
    $.__views.__alloyId25081 && $.addTopLevelView($.__views.__alloyId25081);
    $.__views.__alloyId25082 = Ti.UI.createView({
        id: "__alloyId25082"
    });
    $.__views.__alloyId25081.add($.__views.__alloyId25082);
    $.__views.__alloyId25083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25083"
    });
    $.__views.__alloyId25082.add($.__views.__alloyId25083);
    $.__views.__alloyId25084 = Ti.UI.createView({
        id: "__alloyId25084"
    });
    $.__views.__alloyId25084 && $.addTopLevelView($.__views.__alloyId25084);
    $.__views.__alloyId25085 = Ti.UI.createView({
        id: "__alloyId25085"
    });
    $.__views.__alloyId25084.add($.__views.__alloyId25085);
    $.__views.__alloyId25086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25086"
    });
    $.__views.__alloyId25085.add($.__views.__alloyId25086);
    $.__views.__alloyId25087 = Ti.UI.createView({
        id: "__alloyId25087"
    });
    $.__views.__alloyId25087 && $.addTopLevelView($.__views.__alloyId25087);
    $.__views.__alloyId25088 = Ti.UI.createView({
        id: "__alloyId25088"
    });
    $.__views.__alloyId25087.add($.__views.__alloyId25088);
    $.__views.__alloyId25089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25089"
    });
    $.__views.__alloyId25088.add($.__views.__alloyId25089);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;