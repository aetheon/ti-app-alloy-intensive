function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_866";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_866 = Ti.UI.createView({
        id: "widget_866"
    });
    $.__views.widget_866 && $.addTopLevelView($.__views.widget_866);
    $.__views.__alloyId22178 = Ti.UI.createView({
        id: "__alloyId22178"
    });
    $.__views.widget_866.add($.__views.__alloyId22178);
    $.__views.__alloyId22179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22179"
    });
    $.__views.__alloyId22178.add($.__views.__alloyId22179);
    $.__views.__alloyId22180 = Ti.UI.createView({
        id: "__alloyId22180"
    });
    $.__views.__alloyId22180 && $.addTopLevelView($.__views.__alloyId22180);
    $.__views.__alloyId22181 = Ti.UI.createView({
        id: "__alloyId22181"
    });
    $.__views.__alloyId22180.add($.__views.__alloyId22181);
    $.__views.__alloyId22182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22182"
    });
    $.__views.__alloyId22181.add($.__views.__alloyId22182);
    $.__views.__alloyId22183 = Ti.UI.createView({
        id: "__alloyId22183"
    });
    $.__views.__alloyId22183 && $.addTopLevelView($.__views.__alloyId22183);
    $.__views.__alloyId22184 = Ti.UI.createView({
        id: "__alloyId22184"
    });
    $.__views.__alloyId22183.add($.__views.__alloyId22184);
    $.__views.__alloyId22185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22185"
    });
    $.__views.__alloyId22184.add($.__views.__alloyId22185);
    $.__views.__alloyId22186 = Ti.UI.createView({
        id: "__alloyId22186"
    });
    $.__views.__alloyId22186 && $.addTopLevelView($.__views.__alloyId22186);
    $.__views.__alloyId22187 = Ti.UI.createView({
        id: "__alloyId22187"
    });
    $.__views.__alloyId22186.add($.__views.__alloyId22187);
    $.__views.__alloyId22188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22188"
    });
    $.__views.__alloyId22187.add($.__views.__alloyId22188);
    $.__views.__alloyId22189 = Ti.UI.createView({
        id: "__alloyId22189"
    });
    $.__views.__alloyId22189 && $.addTopLevelView($.__views.__alloyId22189);
    $.__views.__alloyId22190 = Ti.UI.createView({
        id: "__alloyId22190"
    });
    $.__views.__alloyId22189.add($.__views.__alloyId22190);
    $.__views.__alloyId22191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22191"
    });
    $.__views.__alloyId22190.add($.__views.__alloyId22191);
    $.__views.__alloyId22192 = Ti.UI.createView({
        id: "__alloyId22192"
    });
    $.__views.__alloyId22192 && $.addTopLevelView($.__views.__alloyId22192);
    $.__views.__alloyId22193 = Ti.UI.createView({
        id: "__alloyId22193"
    });
    $.__views.__alloyId22192.add($.__views.__alloyId22193);
    $.__views.__alloyId22194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22194"
    });
    $.__views.__alloyId22193.add($.__views.__alloyId22194);
    $.__views.__alloyId22195 = Ti.UI.createView({
        id: "__alloyId22195"
    });
    $.__views.__alloyId22195 && $.addTopLevelView($.__views.__alloyId22195);
    $.__views.__alloyId22196 = Ti.UI.createView({
        id: "__alloyId22196"
    });
    $.__views.__alloyId22195.add($.__views.__alloyId22196);
    $.__views.__alloyId22197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22197"
    });
    $.__views.__alloyId22196.add($.__views.__alloyId22197);
    $.__views.__alloyId22198 = Ti.UI.createView({
        id: "__alloyId22198"
    });
    $.__views.__alloyId22198 && $.addTopLevelView($.__views.__alloyId22198);
    $.__views.__alloyId22199 = Ti.UI.createView({
        id: "__alloyId22199"
    });
    $.__views.__alloyId22198.add($.__views.__alloyId22199);
    $.__views.__alloyId22200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22200"
    });
    $.__views.__alloyId22199.add($.__views.__alloyId22200);
    $.__views.__alloyId22201 = Ti.UI.createView({
        id: "__alloyId22201"
    });
    $.__views.__alloyId22201 && $.addTopLevelView($.__views.__alloyId22201);
    $.__views.__alloyId22202 = Ti.UI.createView({
        id: "__alloyId22202"
    });
    $.__views.__alloyId22201.add($.__views.__alloyId22202);
    $.__views.__alloyId22203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22203"
    });
    $.__views.__alloyId22202.add($.__views.__alloyId22203);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;