function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_935";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_935 = Ti.UI.createView({
        id: "widget_935"
    });
    $.__views.widget_935 && $.addTopLevelView($.__views.widget_935);
    $.__views.__alloyId24180 = Ti.UI.createView({
        id: "__alloyId24180"
    });
    $.__views.widget_935.add($.__views.__alloyId24180);
    $.__views.__alloyId24181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24181"
    });
    $.__views.__alloyId24180.add($.__views.__alloyId24181);
    $.__views.__alloyId24182 = Ti.UI.createView({
        id: "__alloyId24182"
    });
    $.__views.__alloyId24182 && $.addTopLevelView($.__views.__alloyId24182);
    $.__views.__alloyId24183 = Ti.UI.createView({
        id: "__alloyId24183"
    });
    $.__views.__alloyId24182.add($.__views.__alloyId24183);
    $.__views.__alloyId24184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24184"
    });
    $.__views.__alloyId24183.add($.__views.__alloyId24184);
    $.__views.__alloyId24185 = Ti.UI.createView({
        id: "__alloyId24185"
    });
    $.__views.__alloyId24185 && $.addTopLevelView($.__views.__alloyId24185);
    $.__views.__alloyId24186 = Ti.UI.createView({
        id: "__alloyId24186"
    });
    $.__views.__alloyId24185.add($.__views.__alloyId24186);
    $.__views.__alloyId24187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24187"
    });
    $.__views.__alloyId24186.add($.__views.__alloyId24187);
    $.__views.__alloyId24188 = Ti.UI.createView({
        id: "__alloyId24188"
    });
    $.__views.__alloyId24188 && $.addTopLevelView($.__views.__alloyId24188);
    $.__views.__alloyId24189 = Ti.UI.createView({
        id: "__alloyId24189"
    });
    $.__views.__alloyId24188.add($.__views.__alloyId24189);
    $.__views.__alloyId24190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24190"
    });
    $.__views.__alloyId24189.add($.__views.__alloyId24190);
    $.__views.__alloyId24191 = Ti.UI.createView({
        id: "__alloyId24191"
    });
    $.__views.__alloyId24191 && $.addTopLevelView($.__views.__alloyId24191);
    $.__views.__alloyId24192 = Ti.UI.createView({
        id: "__alloyId24192"
    });
    $.__views.__alloyId24191.add($.__views.__alloyId24192);
    $.__views.__alloyId24193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24193"
    });
    $.__views.__alloyId24192.add($.__views.__alloyId24193);
    $.__views.__alloyId24194 = Ti.UI.createView({
        id: "__alloyId24194"
    });
    $.__views.__alloyId24194 && $.addTopLevelView($.__views.__alloyId24194);
    $.__views.__alloyId24195 = Ti.UI.createView({
        id: "__alloyId24195"
    });
    $.__views.__alloyId24194.add($.__views.__alloyId24195);
    $.__views.__alloyId24196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24196"
    });
    $.__views.__alloyId24195.add($.__views.__alloyId24196);
    $.__views.__alloyId24197 = Ti.UI.createView({
        id: "__alloyId24197"
    });
    $.__views.__alloyId24197 && $.addTopLevelView($.__views.__alloyId24197);
    $.__views.__alloyId24198 = Ti.UI.createView({
        id: "__alloyId24198"
    });
    $.__views.__alloyId24197.add($.__views.__alloyId24198);
    $.__views.__alloyId24199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24199"
    });
    $.__views.__alloyId24198.add($.__views.__alloyId24199);
    $.__views.__alloyId24200 = Ti.UI.createView({
        id: "__alloyId24200"
    });
    $.__views.__alloyId24200 && $.addTopLevelView($.__views.__alloyId24200);
    $.__views.__alloyId24201 = Ti.UI.createView({
        id: "__alloyId24201"
    });
    $.__views.__alloyId24200.add($.__views.__alloyId24201);
    $.__views.__alloyId24202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24202"
    });
    $.__views.__alloyId24201.add($.__views.__alloyId24202);
    $.__views.__alloyId24203 = Ti.UI.createView({
        id: "__alloyId24203"
    });
    $.__views.__alloyId24203 && $.addTopLevelView($.__views.__alloyId24203);
    $.__views.__alloyId24204 = Ti.UI.createView({
        id: "__alloyId24204"
    });
    $.__views.__alloyId24203.add($.__views.__alloyId24204);
    $.__views.__alloyId24205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24205"
    });
    $.__views.__alloyId24204.add($.__views.__alloyId24205);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;