function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_797";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_797 = Ti.UI.createView({
        id: "widget_797"
    });
    $.__views.widget_797 && $.addTopLevelView($.__views.widget_797);
    $.__views.__alloyId20176 = Ti.UI.createView({
        id: "__alloyId20176"
    });
    $.__views.widget_797.add($.__views.__alloyId20176);
    $.__views.__alloyId20177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20177"
    });
    $.__views.__alloyId20176.add($.__views.__alloyId20177);
    $.__views.__alloyId20178 = Ti.UI.createView({
        id: "__alloyId20178"
    });
    $.__views.__alloyId20178 && $.addTopLevelView($.__views.__alloyId20178);
    $.__views.__alloyId20179 = Ti.UI.createView({
        id: "__alloyId20179"
    });
    $.__views.__alloyId20178.add($.__views.__alloyId20179);
    $.__views.__alloyId20180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20180"
    });
    $.__views.__alloyId20179.add($.__views.__alloyId20180);
    $.__views.__alloyId20181 = Ti.UI.createView({
        id: "__alloyId20181"
    });
    $.__views.__alloyId20181 && $.addTopLevelView($.__views.__alloyId20181);
    $.__views.__alloyId20182 = Ti.UI.createView({
        id: "__alloyId20182"
    });
    $.__views.__alloyId20181.add($.__views.__alloyId20182);
    $.__views.__alloyId20183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20183"
    });
    $.__views.__alloyId20182.add($.__views.__alloyId20183);
    $.__views.__alloyId20184 = Ti.UI.createView({
        id: "__alloyId20184"
    });
    $.__views.__alloyId20184 && $.addTopLevelView($.__views.__alloyId20184);
    $.__views.__alloyId20185 = Ti.UI.createView({
        id: "__alloyId20185"
    });
    $.__views.__alloyId20184.add($.__views.__alloyId20185);
    $.__views.__alloyId20186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20186"
    });
    $.__views.__alloyId20185.add($.__views.__alloyId20186);
    $.__views.__alloyId20187 = Ti.UI.createView({
        id: "__alloyId20187"
    });
    $.__views.__alloyId20187 && $.addTopLevelView($.__views.__alloyId20187);
    $.__views.__alloyId20188 = Ti.UI.createView({
        id: "__alloyId20188"
    });
    $.__views.__alloyId20187.add($.__views.__alloyId20188);
    $.__views.__alloyId20189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20189"
    });
    $.__views.__alloyId20188.add($.__views.__alloyId20189);
    $.__views.__alloyId20190 = Ti.UI.createView({
        id: "__alloyId20190"
    });
    $.__views.__alloyId20190 && $.addTopLevelView($.__views.__alloyId20190);
    $.__views.__alloyId20191 = Ti.UI.createView({
        id: "__alloyId20191"
    });
    $.__views.__alloyId20190.add($.__views.__alloyId20191);
    $.__views.__alloyId20192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20192"
    });
    $.__views.__alloyId20191.add($.__views.__alloyId20192);
    $.__views.__alloyId20193 = Ti.UI.createView({
        id: "__alloyId20193"
    });
    $.__views.__alloyId20193 && $.addTopLevelView($.__views.__alloyId20193);
    $.__views.__alloyId20194 = Ti.UI.createView({
        id: "__alloyId20194"
    });
    $.__views.__alloyId20193.add($.__views.__alloyId20194);
    $.__views.__alloyId20195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20195"
    });
    $.__views.__alloyId20194.add($.__views.__alloyId20195);
    $.__views.__alloyId20196 = Ti.UI.createView({
        id: "__alloyId20196"
    });
    $.__views.__alloyId20196 && $.addTopLevelView($.__views.__alloyId20196);
    $.__views.__alloyId20197 = Ti.UI.createView({
        id: "__alloyId20197"
    });
    $.__views.__alloyId20196.add($.__views.__alloyId20197);
    $.__views.__alloyId20198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20198"
    });
    $.__views.__alloyId20197.add($.__views.__alloyId20198);
    $.__views.__alloyId20199 = Ti.UI.createView({
        id: "__alloyId20199"
    });
    $.__views.__alloyId20199 && $.addTopLevelView($.__views.__alloyId20199);
    $.__views.__alloyId20200 = Ti.UI.createView({
        id: "__alloyId20200"
    });
    $.__views.__alloyId20199.add($.__views.__alloyId20200);
    $.__views.__alloyId20201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20201"
    });
    $.__views.__alloyId20200.add($.__views.__alloyId20201);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;