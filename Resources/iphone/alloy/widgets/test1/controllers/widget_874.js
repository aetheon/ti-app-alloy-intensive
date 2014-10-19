function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_874";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_874 = Ti.UI.createView({
        id: "widget_874"
    });
    $.__views.widget_874 && $.addTopLevelView($.__views.widget_874);
    $.__views.__alloyId22412 = Ti.UI.createView({
        id: "__alloyId22412"
    });
    $.__views.widget_874.add($.__views.__alloyId22412);
    $.__views.__alloyId22413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22413"
    });
    $.__views.__alloyId22412.add($.__views.__alloyId22413);
    $.__views.__alloyId22414 = Ti.UI.createView({
        id: "__alloyId22414"
    });
    $.__views.__alloyId22414 && $.addTopLevelView($.__views.__alloyId22414);
    $.__views.__alloyId22415 = Ti.UI.createView({
        id: "__alloyId22415"
    });
    $.__views.__alloyId22414.add($.__views.__alloyId22415);
    $.__views.__alloyId22416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22416"
    });
    $.__views.__alloyId22415.add($.__views.__alloyId22416);
    $.__views.__alloyId22417 = Ti.UI.createView({
        id: "__alloyId22417"
    });
    $.__views.__alloyId22417 && $.addTopLevelView($.__views.__alloyId22417);
    $.__views.__alloyId22418 = Ti.UI.createView({
        id: "__alloyId22418"
    });
    $.__views.__alloyId22417.add($.__views.__alloyId22418);
    $.__views.__alloyId22419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22419"
    });
    $.__views.__alloyId22418.add($.__views.__alloyId22419);
    $.__views.__alloyId22420 = Ti.UI.createView({
        id: "__alloyId22420"
    });
    $.__views.__alloyId22420 && $.addTopLevelView($.__views.__alloyId22420);
    $.__views.__alloyId22421 = Ti.UI.createView({
        id: "__alloyId22421"
    });
    $.__views.__alloyId22420.add($.__views.__alloyId22421);
    $.__views.__alloyId22422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22422"
    });
    $.__views.__alloyId22421.add($.__views.__alloyId22422);
    $.__views.__alloyId22423 = Ti.UI.createView({
        id: "__alloyId22423"
    });
    $.__views.__alloyId22423 && $.addTopLevelView($.__views.__alloyId22423);
    $.__views.__alloyId22424 = Ti.UI.createView({
        id: "__alloyId22424"
    });
    $.__views.__alloyId22423.add($.__views.__alloyId22424);
    $.__views.__alloyId22425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22425"
    });
    $.__views.__alloyId22424.add($.__views.__alloyId22425);
    $.__views.__alloyId22426 = Ti.UI.createView({
        id: "__alloyId22426"
    });
    $.__views.__alloyId22426 && $.addTopLevelView($.__views.__alloyId22426);
    $.__views.__alloyId22427 = Ti.UI.createView({
        id: "__alloyId22427"
    });
    $.__views.__alloyId22426.add($.__views.__alloyId22427);
    $.__views.__alloyId22428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22428"
    });
    $.__views.__alloyId22427.add($.__views.__alloyId22428);
    $.__views.__alloyId22429 = Ti.UI.createView({
        id: "__alloyId22429"
    });
    $.__views.__alloyId22429 && $.addTopLevelView($.__views.__alloyId22429);
    $.__views.__alloyId22430 = Ti.UI.createView({
        id: "__alloyId22430"
    });
    $.__views.__alloyId22429.add($.__views.__alloyId22430);
    $.__views.__alloyId22431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22431"
    });
    $.__views.__alloyId22430.add($.__views.__alloyId22431);
    $.__views.__alloyId22432 = Ti.UI.createView({
        id: "__alloyId22432"
    });
    $.__views.__alloyId22432 && $.addTopLevelView($.__views.__alloyId22432);
    $.__views.__alloyId22433 = Ti.UI.createView({
        id: "__alloyId22433"
    });
    $.__views.__alloyId22432.add($.__views.__alloyId22433);
    $.__views.__alloyId22434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22434"
    });
    $.__views.__alloyId22433.add($.__views.__alloyId22434);
    $.__views.__alloyId22435 = Ti.UI.createView({
        id: "__alloyId22435"
    });
    $.__views.__alloyId22435 && $.addTopLevelView($.__views.__alloyId22435);
    $.__views.__alloyId22436 = Ti.UI.createView({
        id: "__alloyId22436"
    });
    $.__views.__alloyId22435.add($.__views.__alloyId22436);
    $.__views.__alloyId22437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22437"
    });
    $.__views.__alloyId22436.add($.__views.__alloyId22437);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;