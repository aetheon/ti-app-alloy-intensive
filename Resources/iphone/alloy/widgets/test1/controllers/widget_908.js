function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_908";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_908 = Ti.UI.createView({
        id: "widget_908"
    });
    $.__views.widget_908 && $.addTopLevelView($.__views.widget_908);
    $.__views.__alloyId23400 = Ti.UI.createView({
        id: "__alloyId23400"
    });
    $.__views.widget_908.add($.__views.__alloyId23400);
    $.__views.__alloyId23401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23401"
    });
    $.__views.__alloyId23400.add($.__views.__alloyId23401);
    $.__views.__alloyId23402 = Ti.UI.createView({
        id: "__alloyId23402"
    });
    $.__views.__alloyId23402 && $.addTopLevelView($.__views.__alloyId23402);
    $.__views.__alloyId23403 = Ti.UI.createView({
        id: "__alloyId23403"
    });
    $.__views.__alloyId23402.add($.__views.__alloyId23403);
    $.__views.__alloyId23404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23404"
    });
    $.__views.__alloyId23403.add($.__views.__alloyId23404);
    $.__views.__alloyId23405 = Ti.UI.createView({
        id: "__alloyId23405"
    });
    $.__views.__alloyId23405 && $.addTopLevelView($.__views.__alloyId23405);
    $.__views.__alloyId23406 = Ti.UI.createView({
        id: "__alloyId23406"
    });
    $.__views.__alloyId23405.add($.__views.__alloyId23406);
    $.__views.__alloyId23407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23407"
    });
    $.__views.__alloyId23406.add($.__views.__alloyId23407);
    $.__views.__alloyId23408 = Ti.UI.createView({
        id: "__alloyId23408"
    });
    $.__views.__alloyId23408 && $.addTopLevelView($.__views.__alloyId23408);
    $.__views.__alloyId23409 = Ti.UI.createView({
        id: "__alloyId23409"
    });
    $.__views.__alloyId23408.add($.__views.__alloyId23409);
    $.__views.__alloyId23410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23410"
    });
    $.__views.__alloyId23409.add($.__views.__alloyId23410);
    $.__views.__alloyId23411 = Ti.UI.createView({
        id: "__alloyId23411"
    });
    $.__views.__alloyId23411 && $.addTopLevelView($.__views.__alloyId23411);
    $.__views.__alloyId23412 = Ti.UI.createView({
        id: "__alloyId23412"
    });
    $.__views.__alloyId23411.add($.__views.__alloyId23412);
    $.__views.__alloyId23413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23413"
    });
    $.__views.__alloyId23412.add($.__views.__alloyId23413);
    $.__views.__alloyId23414 = Ti.UI.createView({
        id: "__alloyId23414"
    });
    $.__views.__alloyId23414 && $.addTopLevelView($.__views.__alloyId23414);
    $.__views.__alloyId23415 = Ti.UI.createView({
        id: "__alloyId23415"
    });
    $.__views.__alloyId23414.add($.__views.__alloyId23415);
    $.__views.__alloyId23416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23416"
    });
    $.__views.__alloyId23415.add($.__views.__alloyId23416);
    $.__views.__alloyId23417 = Ti.UI.createView({
        id: "__alloyId23417"
    });
    $.__views.__alloyId23417 && $.addTopLevelView($.__views.__alloyId23417);
    $.__views.__alloyId23418 = Ti.UI.createView({
        id: "__alloyId23418"
    });
    $.__views.__alloyId23417.add($.__views.__alloyId23418);
    $.__views.__alloyId23419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23419"
    });
    $.__views.__alloyId23418.add($.__views.__alloyId23419);
    $.__views.__alloyId23420 = Ti.UI.createView({
        id: "__alloyId23420"
    });
    $.__views.__alloyId23420 && $.addTopLevelView($.__views.__alloyId23420);
    $.__views.__alloyId23421 = Ti.UI.createView({
        id: "__alloyId23421"
    });
    $.__views.__alloyId23420.add($.__views.__alloyId23421);
    $.__views.__alloyId23422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23422"
    });
    $.__views.__alloyId23421.add($.__views.__alloyId23422);
    $.__views.__alloyId23423 = Ti.UI.createView({
        id: "__alloyId23423"
    });
    $.__views.__alloyId23423 && $.addTopLevelView($.__views.__alloyId23423);
    $.__views.__alloyId23424 = Ti.UI.createView({
        id: "__alloyId23424"
    });
    $.__views.__alloyId23423.add($.__views.__alloyId23424);
    $.__views.__alloyId23425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23425"
    });
    $.__views.__alloyId23424.add($.__views.__alloyId23425);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;