function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_485";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_485 = Ti.UI.createView({
        id: "widget_485"
    });
    $.__views.widget_485 && $.addTopLevelView($.__views.widget_485);
    $.__views.__alloyId11180 = Ti.UI.createView({
        id: "__alloyId11180"
    });
    $.__views.widget_485.add($.__views.__alloyId11180);
    $.__views.__alloyId11181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11181"
    });
    $.__views.__alloyId11180.add($.__views.__alloyId11181);
    $.__views.__alloyId11182 = Ti.UI.createView({
        id: "__alloyId11182"
    });
    $.__views.__alloyId11182 && $.addTopLevelView($.__views.__alloyId11182);
    $.__views.__alloyId11183 = Ti.UI.createView({
        id: "__alloyId11183"
    });
    $.__views.__alloyId11182.add($.__views.__alloyId11183);
    $.__views.__alloyId11184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11184"
    });
    $.__views.__alloyId11183.add($.__views.__alloyId11184);
    $.__views.__alloyId11185 = Ti.UI.createView({
        id: "__alloyId11185"
    });
    $.__views.__alloyId11185 && $.addTopLevelView($.__views.__alloyId11185);
    $.__views.__alloyId11186 = Ti.UI.createView({
        id: "__alloyId11186"
    });
    $.__views.__alloyId11185.add($.__views.__alloyId11186);
    $.__views.__alloyId11187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11187"
    });
    $.__views.__alloyId11186.add($.__views.__alloyId11187);
    $.__views.__alloyId11188 = Ti.UI.createView({
        id: "__alloyId11188"
    });
    $.__views.__alloyId11188 && $.addTopLevelView($.__views.__alloyId11188);
    $.__views.__alloyId11189 = Ti.UI.createView({
        id: "__alloyId11189"
    });
    $.__views.__alloyId11188.add($.__views.__alloyId11189);
    $.__views.__alloyId11190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11190"
    });
    $.__views.__alloyId11189.add($.__views.__alloyId11190);
    $.__views.__alloyId11191 = Ti.UI.createView({
        id: "__alloyId11191"
    });
    $.__views.__alloyId11191 && $.addTopLevelView($.__views.__alloyId11191);
    $.__views.__alloyId11192 = Ti.UI.createView({
        id: "__alloyId11192"
    });
    $.__views.__alloyId11191.add($.__views.__alloyId11192);
    $.__views.__alloyId11193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11193"
    });
    $.__views.__alloyId11192.add($.__views.__alloyId11193);
    $.__views.__alloyId11194 = Ti.UI.createView({
        id: "__alloyId11194"
    });
    $.__views.__alloyId11194 && $.addTopLevelView($.__views.__alloyId11194);
    $.__views.__alloyId11195 = Ti.UI.createView({
        id: "__alloyId11195"
    });
    $.__views.__alloyId11194.add($.__views.__alloyId11195);
    $.__views.__alloyId11196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11196"
    });
    $.__views.__alloyId11195.add($.__views.__alloyId11196);
    $.__views.__alloyId11197 = Ti.UI.createView({
        id: "__alloyId11197"
    });
    $.__views.__alloyId11197 && $.addTopLevelView($.__views.__alloyId11197);
    $.__views.__alloyId11198 = Ti.UI.createView({
        id: "__alloyId11198"
    });
    $.__views.__alloyId11197.add($.__views.__alloyId11198);
    $.__views.__alloyId11199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11199"
    });
    $.__views.__alloyId11198.add($.__views.__alloyId11199);
    $.__views.__alloyId11200 = Ti.UI.createView({
        id: "__alloyId11200"
    });
    $.__views.__alloyId11200 && $.addTopLevelView($.__views.__alloyId11200);
    $.__views.__alloyId11201 = Ti.UI.createView({
        id: "__alloyId11201"
    });
    $.__views.__alloyId11200.add($.__views.__alloyId11201);
    $.__views.__alloyId11202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11202"
    });
    $.__views.__alloyId11201.add($.__views.__alloyId11202);
    $.__views.__alloyId11203 = Ti.UI.createView({
        id: "__alloyId11203"
    });
    $.__views.__alloyId11203 && $.addTopLevelView($.__views.__alloyId11203);
    $.__views.__alloyId11204 = Ti.UI.createView({
        id: "__alloyId11204"
    });
    $.__views.__alloyId11203.add($.__views.__alloyId11204);
    $.__views.__alloyId11205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11205"
    });
    $.__views.__alloyId11204.add($.__views.__alloyId11205);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;