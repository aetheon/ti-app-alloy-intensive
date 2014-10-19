function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_423";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_423 = Ti.UI.createView({
        id: "widget_423"
    });
    $.__views.widget_423 && $.addTopLevelView($.__views.widget_423);
    $.__views.__alloyId9412 = Ti.UI.createView({
        id: "__alloyId9412"
    });
    $.__views.widget_423.add($.__views.__alloyId9412);
    $.__views.__alloyId9413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9413"
    });
    $.__views.__alloyId9412.add($.__views.__alloyId9413);
    $.__views.__alloyId9414 = Ti.UI.createView({
        id: "__alloyId9414"
    });
    $.__views.__alloyId9414 && $.addTopLevelView($.__views.__alloyId9414);
    $.__views.__alloyId9415 = Ti.UI.createView({
        id: "__alloyId9415"
    });
    $.__views.__alloyId9414.add($.__views.__alloyId9415);
    $.__views.__alloyId9416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9416"
    });
    $.__views.__alloyId9415.add($.__views.__alloyId9416);
    $.__views.__alloyId9417 = Ti.UI.createView({
        id: "__alloyId9417"
    });
    $.__views.__alloyId9417 && $.addTopLevelView($.__views.__alloyId9417);
    $.__views.__alloyId9418 = Ti.UI.createView({
        id: "__alloyId9418"
    });
    $.__views.__alloyId9417.add($.__views.__alloyId9418);
    $.__views.__alloyId9419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9419"
    });
    $.__views.__alloyId9418.add($.__views.__alloyId9419);
    $.__views.__alloyId9420 = Ti.UI.createView({
        id: "__alloyId9420"
    });
    $.__views.__alloyId9420 && $.addTopLevelView($.__views.__alloyId9420);
    $.__views.__alloyId9421 = Ti.UI.createView({
        id: "__alloyId9421"
    });
    $.__views.__alloyId9420.add($.__views.__alloyId9421);
    $.__views.__alloyId9422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9422"
    });
    $.__views.__alloyId9421.add($.__views.__alloyId9422);
    $.__views.__alloyId9423 = Ti.UI.createView({
        id: "__alloyId9423"
    });
    $.__views.__alloyId9423 && $.addTopLevelView($.__views.__alloyId9423);
    $.__views.__alloyId9424 = Ti.UI.createView({
        id: "__alloyId9424"
    });
    $.__views.__alloyId9423.add($.__views.__alloyId9424);
    $.__views.__alloyId9425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9425"
    });
    $.__views.__alloyId9424.add($.__views.__alloyId9425);
    $.__views.__alloyId9426 = Ti.UI.createView({
        id: "__alloyId9426"
    });
    $.__views.__alloyId9426 && $.addTopLevelView($.__views.__alloyId9426);
    $.__views.__alloyId9427 = Ti.UI.createView({
        id: "__alloyId9427"
    });
    $.__views.__alloyId9426.add($.__views.__alloyId9427);
    $.__views.__alloyId9428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9428"
    });
    $.__views.__alloyId9427.add($.__views.__alloyId9428);
    $.__views.__alloyId9429 = Ti.UI.createView({
        id: "__alloyId9429"
    });
    $.__views.__alloyId9429 && $.addTopLevelView($.__views.__alloyId9429);
    $.__views.__alloyId9430 = Ti.UI.createView({
        id: "__alloyId9430"
    });
    $.__views.__alloyId9429.add($.__views.__alloyId9430);
    $.__views.__alloyId9431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9431"
    });
    $.__views.__alloyId9430.add($.__views.__alloyId9431);
    $.__views.__alloyId9432 = Ti.UI.createView({
        id: "__alloyId9432"
    });
    $.__views.__alloyId9432 && $.addTopLevelView($.__views.__alloyId9432);
    $.__views.__alloyId9433 = Ti.UI.createView({
        id: "__alloyId9433"
    });
    $.__views.__alloyId9432.add($.__views.__alloyId9433);
    $.__views.__alloyId9434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9434"
    });
    $.__views.__alloyId9433.add($.__views.__alloyId9434);
    $.__views.__alloyId9435 = Ti.UI.createView({
        id: "__alloyId9435"
    });
    $.__views.__alloyId9435 && $.addTopLevelView($.__views.__alloyId9435);
    $.__views.__alloyId9436 = Ti.UI.createView({
        id: "__alloyId9436"
    });
    $.__views.__alloyId9435.add($.__views.__alloyId9436);
    $.__views.__alloyId9437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9437"
    });
    $.__views.__alloyId9436.add($.__views.__alloyId9437);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;